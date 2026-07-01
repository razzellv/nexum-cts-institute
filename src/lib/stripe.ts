// Stripe price IDs — match products created in Stripe Dashboard
export const STRIPE_PRICES = {
  professional: 'price_1ToAtxDfw4bOR2dfzAH5Ld1Q',
  practitioner: 'price_1ToAwnDfw4bOR2dftwZmJxqN',
  founding:     'price_1ToB0lDfw4bOR2dfK0lucuNr',
} as const;

export type StripePriceKey = keyof typeof STRIPE_PRICES;

export interface CheckoutParams {
  priceId: string;
  customerEmail: string;
  memberId: string;
  successUrl?: string;
  cancelUrl?: string;
}

export interface CheckoutResult {
  url: string | null;
  error: string | null;
}

export async function createCheckoutSession(params: CheckoutParams): Promise<CheckoutResult> {
  try {
    // Import here to avoid circular deps
    const { instituteApi } = await import('@/lib/instituteApi');
    const result = await instituteApi.createCheckoutSession(params);
    return { url: result.url, error: null };
  } catch (err) {
    return { url: null, error: (err as Error).message ?? 'Checkout session failed.' };
  }
}
