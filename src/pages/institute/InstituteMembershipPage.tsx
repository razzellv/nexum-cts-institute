import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronUp, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const tiers = [
  {
    id: 'explorer',
    name: 'Explorer',
    price: 'Free',
    priceDetail: null,
    cardStyle: 'border border-[#E2D8CC]',
    badgeStyle: 'bg-white/5 text-[#6E5E34] border border-white/10',
    popular: false,
    founding: false,
    features: [
      'Public articles and research',
      'Free downloads (8 resources)',
      'Limited forum access (read-only)',
      'Operational Pulse™ access',
      'Standards previews (first 10 pages)',
    ],
    cta: 'Start Free',
    ctaStyle: 'border border-[#00C2A8]/40 text-[#00C2A8] hover:bg-[#00C2A8]/10',
    ctaLink: '/institute/membership/explorer',
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '$19/mo',
    priceDetail: 'or $199/year',
    cardStyle: 'border border-[#00C2A8]/25',
    badgeStyle: 'bg-[#00C2A8]/10 text-[#00C2A8] border border-[#00C2A8]/20',
    popular: false,
    founding: false,
    features: [
      'Everything in Explorer',
      'Full community forum access (post + comment)',
      '20+ premium downloads',
      'Standards previews (first 30 pages)',
      'Event registrations',
      'Member profile + contribution history',
    ],
    cta: 'Join Professional',
    ctaStyle: 'bg-[#00C2A8] text-black font-bold hover:bg-[#00C2A8]/90',
    ctaLink: '/institute/membership/professional',
  },
  {
    id: 'practitioner',
    name: 'Practitioner',
    price: '$49/mo',
    priceDetail: 'or $499/year',
    cardStyle: 'border border-[#D4AF57]/50 bg-[#D4AF57]/[0.02]',
    badgeStyle: 'bg-[#D4AF57]/10 text-[#D4AF57] border border-[#D4AF57]/25',
    popular: true,
    founding: false,
    features: [
      'Everything in Professional',
      'Full standards access (all 6 standards)',
      'CTS™ template library',
      'Roundtable participation',
      'Priority event access',
      'Professional resources library',
      'Practitioner designation on profile',
    ],
    cta: 'Join Practitioner',
    ctaStyle: 'border border-[#D4AF57]/50 text-[#D4AF57] hover:bg-[#D4AF57]/10',
    ctaLink: '/institute/membership/practitioner',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom Pricing',
    priceDetail: null,
    cardStyle: 'bg-[#0d1b3e]/60 border border-[#0d1b3e]',
    badgeStyle: 'bg-[#0d1b3e] text-[#4A3828] border border-white/10',
    popular: false,
    founding: false,
    features: [
      'Organization account (up to 50 members)',
      'Multiple seat management',
      'Private organizational roundtables',
      'Publication licensing rights',
      'Training access for teams',
      'Dedicated account support',
      'OI platform integration (coming soon)',
    ],
    cta: 'Contact for Pricing',
    ctaStyle: 'border border-white/20 text-[#4A3828] hover:text-[#00C2A8] hover:border-white/40',
    ctaLink: '/institute/contact',
  },
  {
    id: 'founding',
    name: 'Founding Member',
    price: 'Limited — 12 spots left',
    priceDetail: 'Locked at Practitioner pricing forever',
    cardStyle: 'bg-gradient-to-br from-[#c9a96e]/[0.08] to-[#00FFE1]/[0.04] border border-[#c9a96e]/30',
    badgeStyle: 'bg-[#D4AF57]/15 text-[#D4AF57] border border-[#c9a96e]/30',
    popular: false,
    founding: true,
    features: [
      'Everything in Practitioner',
      'Founding Member badge (permanent)',
      'Locked-in Practitioner pricing forever',
      'Early access to all new standards',
      'Input on future standards development',
      'Recognition in CTS-STD-001 acknowledgements',
    ],
    cta: 'Claim Founding Member',
    ctaStyle: 'bg-[#D4AF57] text-black font-bold hover:bg-[#D4AF57]/90',
    ctaLink: '/institute/membership/founding',
  },
]

const faqs = [
  {
    q: 'Can I upgrade or downgrade my plan?',
    a: 'Yes, upgrades take effect immediately. Downgrades take effect at the start of your next billing cycle. Your content and contributions are preserved through any plan change.',
  },
  {
    q: 'Is there a free trial for Professional?',
    a: 'All paid plans include a 14-day free trial. No credit card is required to join at the Explorer tier.',
  },
  {
    q: 'What happens to my access if I cancel?',
    a: 'Your content and posts remain in the community. Your access reverts to the Explorer tier, and you retain read-only access to any content you contributed.',
  },
  {
    q: 'Does Enterprise include the OI Platform?',
    a: 'Enterprise membership includes integration planning support. Full OI Platform access is a separate product — contact us for bundled pricing.',
  },
]

export default function InstituteMembershipPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const topTiers = tiers.filter((t) => !t.founding && t.id !== 'enterprise')
  const bottomTiers = tiers.filter((t) => t.founding || t.id === 'enterprise')

  return (
    <div className="bg-[#FAF9F1] text-[#2C1F0E]">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF57] font-bold mb-3">Membership</p>
        <h1 className="text-3xl md:text-4xl font-bold text-[#2C1F0E] mb-4">Operational Intelligence Institute™ Membership</h1>
        <p className="text-[#4A3828] text-sm leading-relaxed max-w-xl mx-auto">
          Choose the level of access that fits your professional journey.
        </p>
      </section>

      {/* Top 3 tiers */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topTiers.map((tier) => (
            <div
              key={tier.id}
              className={cn('rounded-xl p-6 flex flex-col relative', tier.cardStyle)}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-emerald-500 text-[#2C1F0E] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-4">
                <span className={cn('text-xs font-bold px-2.5 py-0.5 rounded-full', tier.badgeStyle)}>
                  {tier.name}
                </span>
              </div>

              <div className="mb-6">
                <div className="text-2xl font-bold text-[#2C1F0E]">{tier.price}</div>
                {tier.priceDetail && (
                  <div className="text-xs text-[#6E5E34] mt-0.5">{tier.priceDetail}</div>
                )}
              </div>

              <ul className="space-y-2.5 flex-1 mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-[#4A3828]">
                    <Check className="w-3.5 h-3.5 text-[#00C2A8] mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to={tier.ctaLink}
                className={cn(
                  'w-full text-center px-6 py-2.5 rounded-lg text-sm transition-all',
                  tier.ctaStyle
                )}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom 2 tiers (Enterprise + Founding) */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bottomTiers.map((tier) => (
            <div
              key={tier.id}
              className={cn('rounded-xl p-6 flex flex-col relative', tier.cardStyle)}
            >
              {tier.founding && (
                <div className="absolute top-4 right-4">
                  <span className="bg-red-500/80 text-[#2C1F0E] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    Limited — 12 spots left
                  </span>
                </div>
              )}

              <div className="mb-4">
                <span className={cn('text-xs font-bold px-2.5 py-0.5 rounded-full', tier.badgeStyle)}>
                  {tier.name}
                </span>
              </div>

              <div className="mb-6">
                <div className="text-2xl font-bold text-[#2C1F0E]">{tier.price}</div>
                {tier.priceDetail && (
                  <div className="text-xs text-[#6E5E34] mt-0.5">{tier.priceDetail}</div>
                )}
              </div>

              <ul className="space-y-2.5 flex-1 mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-[#4A3828]">
                    <Check className="w-3.5 h-3.5 text-[#00C2A8] mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to={tier.ctaLink}
                className={cn(
                  'w-full text-center px-6 py-2.5 rounded-lg text-sm transition-all',
                  tier.ctaStyle
                )}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto pb-16">
        <h2 className="text-2xl font-bold text-[#2C1F0E] mb-6">Frequently Asked Questions</h2>
        <div className="space-y-3 max-w-2xl">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#F3F0EA] border border-[#E2D8CC] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-[#2C1F0E] text-sm">{faq.q}</span>
                {openFaq === idx ? (
                  <ChevronUp className="w-4 h-4 text-[#6E5E34] shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#6E5E34] shrink-0" />
                )}
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5">
                  <p className="text-[#4A3828] text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
