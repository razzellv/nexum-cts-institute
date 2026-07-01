// Stripe price IDs — match products created in Stripe Dashboard
export const STRIPE_PRICES = {
  professional: 'price_1ToAtxDfw4bOR2dfzAH5Ld1Q',
  practitioner: 'price_1ToAwnDfw4bOR2dftwZmJxqN',
  founding:     'price_1ToB0lDfw4bOR2dfK0lucuNr',
} as const;

export type StripePriceKey = keyof typeof STRIPE_PRICES;

// Lambda endpoint — set VITE_CHECKOUT_API_URL in Netlify env vars once Lambda is deployed
const CHECKOUT_API = import.meta.env.VITE_CHECKOUT_API_URL as string | undefined;

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
  if (!CHECKOUT_API) {
    return { url: null, error: 'Payment processing endpoint not configured.' };
  }

  try {
    const res = await fetch(`${CHECKOUT_API}/checkout/session`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        priceId: params.priceId,
        customerEmail: params.customerEmail,
        memberId: params.memberId,
        successUrl: params.successUrl ?? `${window.location.origin}/institute/dashboard?payment=success`,
        cancelUrl:  params.cancelUrl  ?? `${window.location.origin}/institute/signup`,
      }),
    });

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      return { url: null, error: (body as { message?: string }).message ?? 'Checkout session failed.' };
    }

    const data = await res.json() as { url: string };
    return { url: data.url, error: null };
  } catch {
    return { url: null, error: 'Unable to reach payment service. Please try again.' };
  }
}
