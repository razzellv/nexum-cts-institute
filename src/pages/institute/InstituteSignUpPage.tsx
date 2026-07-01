import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { BookOpen, Mail, Lock, User, Building2, Briefcase, AlertCircle, Eye, EyeOff, Check } from 'lucide-react';
import { useInstituteAuth, type InstituteTier } from '@/context/InstituteAuthContext';
import { Button, Badge } from '@/components/InstituteUI';
import { STRIPE_PRICES, createCheckoutSession } from '@/lib/stripe';

interface TierOption {
  id: InstituteTier;
  name: string;
  price: string;
  billing: string;
  badge: 'teal' | 'gold' | 'blue' | 'orange' | 'green';
  perks: string[];
  stripePriceId?: string;
  isFree?: boolean;
}

const TIERS: TierOption[] = [
  {
    id: 'explorer',
    name: 'Explorer',
    price: 'Free',
    billing: 'forever',
    badge: 'teal',
    isFree: true,
    perks: [
      'Read access to CTS™ Standards library',
      'Browse all forum categories',
      'Download free resources',
      'Receive OI Pulse digest',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '$19',
    billing: '/month',
    badge: 'blue',
    stripePriceId: STRIPE_PRICES.professional,
    perks: [
      'Everything in Explorer',
      'CTS™ Courses 1–5 access',
      'Post and reply in all forums',
      'Access to member publications',
      'Professional directory listing',
    ],
  },
  {
    id: 'practitioner',
    name: 'Practitioner',
    price: '$49',
    billing: '/month',
    badge: 'gold',
    stripePriceId: STRIPE_PRICES.practitioner,
    perks: [
      'Everything in Professional',
      'All 7 CTS™ courses + exam eligibility',
      'CTS™ Certified Practitioner™ credential',
      'Roundtable participation',
      'Priority support',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Contact us',
    billing: '',
    badge: 'orange',
    perks: [
      'Everything in Practitioner',
      'Private organizational roundtables',
      'Org admin + team management',
      'White-label resources',
      'Dedicated account manager',
    ],
  },
  {
    id: 'founding',
    name: 'Founding Member',
    price: '$149',
    billing: '/year',
    badge: 'green',
    stripePriceId: STRIPE_PRICES.founding,
    perks: [
      'Everything in Practitioner',
      'Founding member badge',
      'Lifetime pricing guarantee',
      'Co-founder advisory access',
    ],
  },
];

export default function InstituteSignUpPage() {
  const { signUp } = useInstituteAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const preselected = (searchParams.get('tier') as InstituteTier) ?? 'explorer';

  const [step, setStep] = useState<'tier' | 'details'>('tier');
  const [selectedTier, setSelectedTier] = useState<InstituteTier>(preselected);

  const [displayName, setDisplayName] = useState('');
  const [organization, setOrganization] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const tier = TIERS.find(t => t.id === selectedTier)!;

  function handleTierSelect(id: InstituteTier) {
    if (id === 'enterprise') {
      window.location.href = 'mailto:institute@nexumsuum.com?subject=Enterprise Membership Inquiry';
      return;
    }
    setSelectedTier(id);
    setStep('details');
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setSubmitting(true);

    const { error: err } = await signUp(email.trim(), password, {
      display_name: displayName.trim(),
      organization: organization.trim(),
      job_title: jobTitle.trim(),
      tier: selectedTier,
    });

    if (err) {
      setSubmitting(false);
      setError(err);
      return;
    }

    // Paid tiers: create Stripe checkout session via Lambda
    if (tier.stripePriceId) {
      const { url, error: checkoutErr } = await createCheckoutSession({
        priceId: tier.stripePriceId,
        customerEmail: email.trim(),
        memberId: email.trim(),
      });
      setSubmitting(false);
      if (checkoutErr || !url) {
        // Account created but payment redirect failed — send to dashboard with notice
        navigate('/institute/dashboard?payment=pending');
        return;
      }
      window.location.href = url;
      return;
    }

    setSubmitting(false);
    navigate('/institute/dashboard');
  }

  if (step === 'tier') {
    return (
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF57] font-bold mb-3">
              Operational Intelligence Institute™
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-[#2C1F0E] mb-4">
              Choose your membership
            </h1>
            <p className="text-[#4A3828] text-base max-w-xl mx-auto">
              Start free as an Explorer and upgrade anytime. No commitment required.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {TIERS.filter(t => t.id !== 'founding').map(t => (
              <button
                key={t.id}
                onClick={() => handleTierSelect(t.id)}
                className="text-left bg-[#F3F0EA] border border-[#E2D8CC] hover:border-[#E2D8CC] hover:bg-[#EDE8E0] rounded-xl p-6 transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <Badge variant={t.badge}>{t.name}</Badge>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-[#2C1F0E]">{t.price}</span>
                      {t.billing && <span className="text-sm text-[#6E5E34]">{t.billing}</span>}
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {t.perks.map(p => (
                    <li key={p} className="flex items-start gap-2 text-sm text-[#4A3828]">
                      <Check size={13} className="text-[#00C2A8] mt-0.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 text-sm font-semibold text-[#00C2A8]">
                  {t.id === 'enterprise' ? 'Contact us →' : t.isFree ? 'Get started free →' : 'Select →'}
                </div>
              </button>
            ))}
          </div>

          {/* Founding member banner */}
          {(() => {
            const f = TIERS.find(t => t.id === 'founding')!;
            return (
              <button
                onClick={() => handleTierSelect('founding')}
                className="w-full text-left bg-[#D4AF57]/[0.04] border border-[#D4AF57]/25 hover:border-[#D4AF57]/50 rounded-xl p-6 transition-all duration-200 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <Badge variant="gold">Founding Member</Badge>
                    <p className="text-[#2C1F0E] font-bold mt-2 text-lg">
                      {f.price}<span className="text-[#6E5E34] text-sm font-normal">{f.billing}</span>
                    </p>
                    <p className="text-[#4A3828] text-sm mt-1">
                      Lock in founder pricing forever + founding badge + advisory access.
                    </p>
                  </div>
                  <ul className="space-y-1.5 md:min-w-[240px]">
                    {f.perks.map(p => (
                      <li key={p} className="flex items-center gap-2 text-sm text-[#4A3828]">
                        <Check size={13} className="text-[#D4AF57] shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </button>
            );
          })()}

          <p className="text-center text-sm text-[#6E5E34] mt-8">
            Already a member?{' '}
            <Link to="/institute/login" className="text-[#00C2A8] hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    );
  }

  // Step 2: Details form
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg">
        <div className="flex items-center justify-center gap-2.5 mb-8">
          <div className="w-9 h-9 rounded-xl bg-[#00C2A8]/10 border border-[#00C2A8]/20 flex items-center justify-center">
            <BookOpen size={18} className="text-[#00C2A8]" />
          </div>
          <div>
            <p className="text-sm font-bold text-[#2C1F0E] leading-none">
              Operational Intelligence Institute<span className="text-[#D4AF57]">™</span>
            </p>
            <p className="text-[10px] text-[#6E5E34]">Create your account</p>
          </div>
        </div>

        <div className="bg-[#F3F0EA] border border-[#E2D8CC] rounded-2xl p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-lg font-bold text-[#2C1F0E]">Create your account</h1>
              <p className="text-sm text-[#6E5E34] mt-0.5">
                {tier.name} — {tier.price}{tier.billing}
              </p>
            </div>
            <Badge variant={tier.badge}>{tier.name}</Badge>
          </div>

          {error && (
            <div className="flex items-start gap-2.5 bg-red-500/10 border border-red-500/20 rounded-lg p-3 mb-5">
              <AlertCircle className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
              <p className="text-sm text-red-300">{error}</p>
            </div>
          )}

          {tier.stripePriceId && (
            <div className="bg-[#D4AF57]/[0.06] border border-[#D4AF57]/25 rounded-lg px-3 py-2.5 mb-5 text-sm text-[#D4AF57]/80">
              After creating your account you'll be redirected to Stripe to complete payment.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <Field label="Full name" icon={<User size={15} className="text-[#7A6A55]" />}>
              <input
                required
                value={displayName}
                onChange={e => setDisplayName(e.target.value)}
                placeholder="Jane Smith"
                className={inputClass}
              />
            </Field>

            <div className="grid grid-cols-2 gap-3">
              <Field label="Organization" icon={<Building2 size={15} className="text-[#7A6A55]" />}>
                <input
                  value={organization}
                  onChange={e => setOrganization(e.target.value)}
                  placeholder="Optional"
                  className={inputClass}
                />
              </Field>
              <Field label="Job title" icon={<Briefcase size={15} className="text-[#7A6A55]" />}>
                <input
                  value={jobTitle}
                  onChange={e => setJobTitle(e.target.value)}
                  placeholder="Optional"
                  className={inputClass}
                />
              </Field>
            </div>

            <Field label="Email address" icon={<Mail size={15} className="text-[#7A6A55]" />}>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={inputClass}
              />
            </Field>

            <Field label="Password" icon={<Lock size={15} className="text-[#7A6A55]" />} rightSlot={
              <button type="button" onClick={() => setShowPass(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7A6A55] hover:text-[#4A3828] transition-colors">
                {showPass ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            }>
              <input
                type={showPass ? 'text' : 'password'}
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Min 8 characters"
                className={`${inputClass} pr-10`}
              />
            </Field>

            <Field label="Confirm password" icon={<Lock size={15} className="text-[#7A6A55]" />}>
              <input
                type={showPass ? 'text' : 'password'}
                required
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                placeholder="Re-enter password"
                className={inputClass}
              />
            </Field>

            <div className="flex gap-3 pt-1">
              <Button
                type="button"
                variant="ghost"
                size="md"
                onClick={() => setStep('tier')}
                className="flex-none"
              >
                Back
              </Button>
              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={submitting}
                className="flex-1"
              >
                {submitting
                  ? 'Creating account…'
                  : tier.stripePriceId
                  ? 'Continue to payment →'
                  : 'Create account'}
              </Button>
            </div>
          </form>

          <p className="text-center text-sm text-[#6E5E34] mt-5">
            Already a member?{' '}
            <Link to="/institute/login" className="text-[#00C2A8] hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

const inputClass =
  'w-full bg-[#EDE8E0] border border-[#E2D8CC] rounded-lg pl-9 pr-4 py-2.5 text-sm text-[#2C1F0E] placeholder:text-[#7A6A55] focus:outline-none focus:border-[#00C2A8]/40 focus:bg-white/[0.06] transition-colors';

function Field({
  label,
  icon,
  rightSlot,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  rightSlot?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs text-[#4A3828] mb-1.5 font-medium uppercase tracking-wide">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">{icon}</div>
        {children}
        {rightSlot}
      </div>
    </div>
  );
}
