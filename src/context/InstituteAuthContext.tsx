import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import {
  signUp as amplifySignUp,
  signIn as amplifySignIn,
  signOut as amplifySignOut,
  getCurrentUser,
  fetchAuthSession,
  confirmSignUp,
} from 'aws-amplify/auth';
import { instituteApi } from '@/lib/instituteApi';
import type { MemberProfile, InstituteTier } from '@/lib/instituteApi';

export type { InstituteTier, MemberProfile as InstituteProfile };

interface SignUpMeta {
  display_name: string;
  organization?: string;
  job_title?: string;
  tier?: InstituteTier;
}

interface InstituteAuthState {
  user: { id: string; email: string } | null;
  session: { token: string } | null;
  profile: MemberProfile | null;
  loading: boolean;
  signUp: (email: string, password: string, meta: SignUpMeta) => Promise<{ error: string | null; nextStep?: string }>;
  confirmCode: (email: string, code: string) => Promise<{ error: string | null }>;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  updateProfile: (updates: Partial<MemberProfile>) => Promise<{ error: string | null }>;
  refreshProfile: () => Promise<void>;
}

const InstituteAuthContext = createContext<InstituteAuthState | null>(null);

export function InstituteAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<{ id: string; email: string } | null>(null);
  const [session, setSession] = useState<{ token: string } | null>(null);
  const [profile, setProfile] = useState<MemberProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Restore session on mount
  useEffect(() => {
    async function restore() {
      try {
        const cognitoUser = await getCurrentUser();
        const sess = await fetchAuthSession();
        const token = sess.tokens?.idToken?.toString() ?? null;
        const email = cognitoUser.signInDetails?.loginId ?? '';
        setUser({ id: cognitoUser.userId, email });
        if (token) setSession({ token });
        await loadProfile(cognitoUser.userId);
      } catch {
        // Not signed in
      } finally {
        setLoading(false);
      }
    }
    restore();
  }, []);

  async function loadProfile(userId: string) {
    try {
      const p = await instituteApi.getProfile(userId);
      setProfile(p);
    } catch {
      // Profile may not exist yet (new signup)
    }
  }

  async function signUp(
    email: string,
    password: string,
    meta: SignUpMeta,
  ): Promise<{ error: string | null; nextStep?: string }> {
    try {
      const result = await amplifySignUp({
        username: email,
        password,
        options: {
          userAttributes: {
            email,
            name: meta.display_name,
          },
        },
      });

      // If confirmation is needed, return the next step
      if (result.nextStep.signUpStep !== 'DONE') {
        return { error: null, nextStep: result.nextStep.signUpStep };
      }

      // Auto sign in after signup if no confirmation needed
      await amplifySignIn({ username: email, password });
      const cognitoUser = await getCurrentUser();
      const sess = await fetchAuthSession();
      const token = sess.tokens?.idToken?.toString() ?? null;
      setUser({ id: cognitoUser.userId, email });
      if (token) setSession({ token });

      // Create profile in DynamoDB
      const p = await instituteApi.createProfile({
        email,
        displayName: meta.display_name,
        organization: meta.organization,
        jobTitle: meta.job_title,
        tier: meta.tier ?? 'explorer',
      });
      setProfile(p);

      return { error: null };
    } catch (err) {
      return { error: (err as Error).message };
    }
  }

  async function confirmCode(
    email: string,
    code: string,
  ): Promise<{ error: string | null }> {
    try {
      await confirmSignUp({ username: email, confirmationCode: code });
      return { error: null };
    } catch (err) {
      return { error: (err as Error).message };
    }
  }

  async function signIn(
    email: string,
    password: string,
  ): Promise<{ error: string | null }> {
    try {
      await amplifySignIn({ username: email, password });
      const cognitoUser = await getCurrentUser();
      const sess = await fetchAuthSession();
      const token = sess.tokens?.idToken?.toString() ?? null;
      setUser({ id: cognitoUser.userId, email });
      if (token) setSession({ token });
      await loadProfile(cognitoUser.userId);
      return { error: null };
    } catch (err) {
      return { error: (err as Error).message };
    }
  }

  async function signOut() {
    try {
      await amplifySignOut();
    } catch {
      // ignore
    }
    setUser(null);
    setSession(null);
    setProfile(null);
  }

  async function updateProfile(
    updates: Partial<MemberProfile>,
  ): Promise<{ error: string | null }> {
    if (!user) return { error: 'Not signed in' };
    try {
      const updated = await instituteApi.updateProfile(user.id, updates);
      setProfile(updated);
      return { error: null };
    } catch (err) {
      return { error: (err as Error).message };
    }
  }

  async function refreshProfile() {
    if (user) await loadProfile(user.id);
  }

  return (
    <InstituteAuthContext.Provider
      value={{
        user,
        session,
        profile,
        loading,
        signUp,
        confirmCode,
        signIn,
        signOut,
        updateProfile,
        refreshProfile,
      }}
    >
      {children}
    </InstituteAuthContext.Provider>
  );
}

export function useInstituteAuth(): InstituteAuthState {
  const ctx = useContext(InstituteAuthContext);
  if (!ctx) throw new Error('useInstituteAuth must be used inside InstituteAuthProvider');
  return ctx;
}
