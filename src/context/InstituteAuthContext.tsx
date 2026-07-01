import { createContext, useContext, useState, ReactNode } from 'react';

export type InstituteTier =
  | 'explorer'
  | 'professional'
  | 'practitioner'
  | 'enterprise'
  | 'founding';

export interface InstituteProfile {
  id: string;
  display_name: string;
  organization: string;
  job_title: string;
  tier: InstituteTier;
  stripe_customer_id: string;
  stripe_subscription_id: string;
  subscription_status: string;
  created_at: string;
  last_active: string;
}

interface SignUpMeta {
  display_name: string;
  organization?: string;
  job_title?: string;
  tier?: InstituteTier;
}

interface InstituteAuthState {
  user: { id: string; email: string } | null;
  session: null;
  profile: InstituteProfile | null;
  loading: boolean;
  signUp: (email: string, password: string, meta: SignUpMeta) => Promise<{ error: string | null }>;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  updateProfile: (updates: Partial<InstituteProfile>) => Promise<{ error: string | null }>;
  refreshProfile: () => Promise<void>;
}

const InstituteAuthContext = createContext<InstituteAuthState | null>(null);

export function InstituteAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<{ id: string; email: string } | null>(null);
  const [profile, setProfile] = useState<InstituteProfile | null>(null);

  async function signUp(
    email: string,
    _password: string,
    meta: SignUpMeta,
  ): Promise<{ error: string | null }> {
    const newUser = { id: crypto.randomUUID(), email };
    const newProfile: InstituteProfile = {
      id: newUser.id,
      display_name: meta.display_name,
      organization: meta.organization ?? '',
      job_title: meta.job_title ?? '',
      tier: meta.tier ?? 'explorer',
      stripe_customer_id: '',
      stripe_subscription_id: '',
      subscription_status: 'inactive',
      created_at: new Date().toISOString(),
      last_active: new Date().toISOString(),
    };
    setUser(newUser);
    setProfile(newProfile);
    return { error: null };
  }

  async function signIn(
    email: string,
    _password: string,
  ): Promise<{ error: string | null }> {
    setUser({ id: crypto.randomUUID(), email });
    return { error: null };
  }

  async function signOut() {
    setUser(null);
    setProfile(null);
  }

  async function updateProfile(
    updates: Partial<InstituteProfile>,
  ): Promise<{ error: string | null }> {
    if (profile) setProfile({ ...profile, ...updates });
    return { error: null };
  }

  async function refreshProfile() {
    // no-op in stub
  }

  return (
    <InstituteAuthContext.Provider
      value={{ user, session: null, profile, loading: false, signUp, signIn, signOut, updateProfile, refreshProfile }}
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
