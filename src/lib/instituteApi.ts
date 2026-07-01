import { fetchAuthSession } from 'aws-amplify/auth';

const BASE = import.meta.env.VITE_INSTITUTE_API_URL as string;

// ── camelCase ↔ snake_case helpers ─────────────────────────────────────────

function toSnake(str: string): string {
  return str.replace(/[A-Z]/g, l => `_${l.toLowerCase()}`);
}

function toCamel(str: string): string {
  return str.replace(/_([a-z])/g, (_, l) => l.toUpperCase());
}

function snakeKeys<T>(obj: unknown): T {
  if (Array.isArray(obj)) return obj.map(snakeKeys) as unknown as T;
  if (obj !== null && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj as Record<string, unknown>).map(([k, v]) => [toSnake(k), snakeKeys(v)])
    ) as T;
  }
  return obj as T;
}

function camelKeys<T>(obj: unknown): T {
  if (Array.isArray(obj)) return obj.map(camelKeys) as unknown as T;
  if (obj !== null && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj as Record<string, unknown>).map(([k, v]) => [toCamel(k), camelKeys(v)])
    ) as T;
  }
  return obj as T;
}

// ── Auth token helper ───────────────────────────────────────────────────────

async function getToken(): Promise<string | null> {
  try {
    const session = await fetchAuthSession();
    return session.tokens?.idToken?.toString() ?? null;
  } catch {
    return null;
  }
}

// ── Fetch wrapper ───────────────────────────────────────────────────────────

async function apiFetch<T>(
  path: string,
  options: RequestInit = {},
  authenticated = true,
): Promise<T> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };

  if (authenticated) {
    const token = await getToken();
    if (token) headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE}${path}`, { ...options, headers });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error((body as { message?: string }).message ?? `API error ${res.status}`);
  }

  const data = await res.json();
  return camelKeys<T>(data);
}

// ── Types ───────────────────────────────────────────────────────────────────

export type InstituteTier = 'explorer' | 'professional' | 'practitioner' | 'enterprise' | 'founding';

export interface MemberProfile {
  id: string;
  email: string;
  displayName: string;
  organization: string;
  jobTitle: string;
  tier: InstituteTier;
  stripeCustomerId: string;
  stripeSubscriptionId: string;
  subscriptionStatus: string;
  createdAt: string;
  lastActive: string;
}

export interface ForumPost {
  id: string;
  authorId: string;
  authorName: string;
  category: string;
  title: string;
  body: string;
  replyCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface ForumReply {
  id: string;
  postId: string;
  authorId: string;
  authorName: string;
  body: string;
  createdAt: string;
}

export interface CreateProfileInput {
  email: string;
  displayName: string;
  organization?: string;
  jobTitle?: string;
  tier?: InstituteTier;
}

export interface CreatePostInput {
  category: string;
  title: string;
  body: string;
}

export interface CreateReplyInput {
  body: string;
}

// ── Profile ─────────────────────────────────────────────────────────────────

export const instituteApi = {
  // Member profiles
  async createProfile(input: CreateProfileInput): Promise<MemberProfile> {
    return apiFetch<MemberProfile>('/profiles', {
      method: 'POST',
      body: JSON.stringify(snakeKeys(input)),
    });
  },

  async getProfile(userId: string): Promise<MemberProfile> {
    return apiFetch<MemberProfile>(`/profiles/${userId}`);
  },

  async updateProfile(userId: string, updates: Partial<MemberProfile>): Promise<MemberProfile> {
    return apiFetch<MemberProfile>(`/profiles/${userId}`, {
      method: 'PATCH',
      body: JSON.stringify(snakeKeys(updates)),
    });
  },

  // Forum posts
  async getForumPosts(category?: string): Promise<ForumPost[]> {
    const qs = category ? `?category=${encodeURIComponent(category)}` : '';
    return apiFetch<ForumPost[]>(`/forum/posts${qs}`, {}, false);
  },

  async getForumPost(postId: string): Promise<ForumPost> {
    return apiFetch<ForumPost>(`/forum/posts/${postId}`, {}, false);
  },

  async createForumPost(input: CreatePostInput): Promise<ForumPost> {
    return apiFetch<ForumPost>('/forum/posts', {
      method: 'POST',
      body: JSON.stringify(snakeKeys(input)),
    });
  },

  async getForumReplies(postId: string): Promise<ForumReply[]> {
    return apiFetch<ForumReply[]>(`/forum/posts/${postId}/replies`, {}, false);
  },

  async createForumReply(postId: string, input: CreateReplyInput): Promise<ForumReply> {
    return apiFetch<ForumReply>(`/forum/posts/${postId}/replies`, {
      method: 'POST',
      body: JSON.stringify(snakeKeys(input)),
    });
  },

  // Stripe checkout
  async createCheckoutSession(params: {
    priceId: string;
    customerEmail: string;
    memberId: string;
    successUrl?: string;
    cancelUrl?: string;
  }): Promise<{ url: string }> {
    return apiFetch<{ url: string }>('/checkout/session', {
      method: 'POST',
      body: JSON.stringify(snakeKeys({
        ...params,
        successUrl: params.successUrl ?? `${window.location.origin}/institute/dashboard?payment=success`,
        cancelUrl: params.cancelUrl ?? `${window.location.origin}/institute/signup`,
      })),
    });
  },
};
