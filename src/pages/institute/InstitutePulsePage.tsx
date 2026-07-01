import { MessageSquare, Bookmark, Share2, ExternalLink } from 'lucide-react'
import Badge from '@/components/InstituteUI'
import { Button } from '@/components/InstituteUI'

const posts = [
  {
    headline: 'GSA Infrastructure Modernization Initiative — FY2027 Budget Guidance Released',
    summary: 'The General Services Administration has released FY2027 capital planning guidance with significant emphasis on deferred maintenance reduction and lifecycle-based asset management across federal real property portfolios.',
    whyItMatters: 'Federal facilities professionals and GovCon consultants operating under GSA contracts should review alignment with the new cost-of-ownership documentation requirements. The guidance creates defensibility pressure on all capital recommendations submitted for federal review.',
    industries: ['Government', 'GovCon', 'Facility Management'],
    relatedStandard: 'CTS-STD-002',
    threads: 14,
    date: '2 days ago',
  },
  {
    headline: 'ASHRAE Standard 55-2024 Thermal Comfort Update — Key Operational Changes',
    summary: 'ASHRAE 55-2024 introduces significant revisions to thermal comfort modeling, expanding acceptable operative temperature ranges and introducing new requirements for adaptive comfort documentation in mixed-mode buildings.',
    whyItMatters: 'Facility managers responsible for HVAC operations and energy compliance reporting need to review current system settings against the new operative temperature thresholds. Impacts occupant comfort documentation and energy performance contracts.',
    industries: ['Facility Management', 'Energy & Utilities', 'Higher Education'],
    relatedStandard: 'CTS-STD-004',
    threads: 8,
    date: '4 days ago',
  },
  {
    headline: 'OSHA National Emphasis Program: Heat Illness Prevention — Enforcement Priorities Updated',
    summary: 'OSHA has updated enforcement priorities under the Heat Illness Prevention NEP, expanding targeted inspection criteria to include indoor workplaces with elevated ambient temperatures and inadequate climate control infrastructure.',
    whyItMatters: 'Operations and safety leaders in facilities with documented HVAC deficiencies should conduct immediate risk assessments. Enforcement actions now create liability exposure where facility condition records are absent or incomplete — a direct argument for Operational Intelligence™ documentation practices.',
    industries: ['Facility Management', 'Manufacturing', 'Maintenance & Reliability'],
    relatedStandard: 'CTS-STD-001',
    threads: 22,
    date: '5 days ago',
  },
  {
    headline: 'AI Integration in Facility Decision Support Systems — Where the Market Is Heading',
    summary: 'A wave of AI-assisted decision support tools is entering the facility management market, promising predictive maintenance, automated work order prioritization, and natural language reporting from building management systems.',
    whyItMatters: 'AI tools that automate analysis without structured methodology create Decision Defensibility™ gaps — producing recommendations without traceable rationale. CTS™ practitioners should evaluate AI tools for their ability to produce auditable decision logs and maintain chain-of-custody from data to recommendation.',
    industries: ['Facility Management', 'AI and Decision Support', 'Capital Planning'],
    relatedStandard: 'CTS-STD-002',
    threads: 31,
    date: '1 week ago',
  },
  {
    headline: 'NFPA 70E 2024 Arc Flash Update — New Training and Documentation Requirements',
    summary: 'NFPA 70E 2024 introduces enhanced arc flash risk assessment documentation requirements and expands mandatory training scope for qualified electrical workers. Changes affect facilities with electrical systems requiring energized work.',
    whyItMatters: 'Facilities managers overseeing electrical infrastructure need to ensure arc flash studies are current, documented, and linked to maintenance planning records. This is precisely the type of compliance-critical operational knowledge that must be preserved and accessible.',
    industries: ['Facility Management', 'Energy & Utilities', 'Maintenance & Reliability'],
    relatedStandard: 'CTS-STD-003',
    threads: 11,
    date: '1 week ago',
  },
  {
    headline: 'DOE Building Performance Standard Implementation Timeline — State Adoption Tracker',
    summary: 'The Department of Energy has released updated guidance on state-level adoption of Building Performance Standards, with 18 states now in active implementation phases affecting commercial and institutional building portfolios.',
    whyItMatters: 'Portfolio facility managers in covered jurisdictions should be integrating BPS compliance milestones into capital planning timelines. The energy performance documentation requirements align directly with CTS™ Lifecycle stage outputs for the Monitor and Preserve phases.',
    industries: ['Facility Management', 'Energy & Utilities', 'Government'],
    relatedStandard: 'CTS-STD-002',
    threads: 17,
    date: '2 weeks ago',
  },
]

export default function PulsePage() {
  return (
    <div className="bg-[#04080f]">
      {/* Hero */}
      <section className="py-20 border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#c9a96e] font-bold mb-4">Intelligence Feed</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Operational Pulse<span className="text-[#c9a96e] text-2xl align-super">™</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Curated operational intelligence — regulatory updates, standards changes, and industry developments analyzed through the CTS™ lens. Each post includes a "Why It Matters" summary and links to relevant CTS™ standards.
          </p>
        </div>
      </section>

      {/* Feed */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {posts.map((post, i) => (
              <article
                key={i}
                className="bg-white/[0.025] border border-white/[0.06] rounded-xl p-7 hover:border-white/[0.12] transition-all duration-300"
              >
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {post.industries.map((ind) => (
                    <span
                      key={ind}
                      className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.06] rounded-full text-[10px] text-white/40 uppercase tracking-wider"
                    >
                      {ind}
                    </span>
                  ))}
                  <span className="ml-auto text-white/30 text-xs">{post.date}</span>
                </div>

                <h2 className="text-xl font-bold text-white mb-3 leading-snug">{post.headline}</h2>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{post.summary}</p>

                <div className="bg-[#00FFE1]/[0.04] border border-[#00FFE1]/10 rounded-lg p-4 mb-4">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#00FFE1] font-bold mb-2">Why It Matters</p>
                  <p className="text-white/70 text-sm leading-relaxed">{post.whyItMatters}</p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Badge variant="teal">{post.relatedStandard}</Badge>
                    <button className="flex items-center gap-1.5 text-white/40 hover:text-white text-xs transition-colors">
                      <MessageSquare size={13} />
                      {post.threads} threads
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Bookmark size={13} /> Save
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 size={13} /> Share
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink size={13} /> View Thread
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="border-t border-white/[0.06] py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Get Operational Pulse™ in Your Inbox</h2>
          <p className="text-white/50 text-sm mb-6">
            Weekly briefing — curated operational intelligence with CTS™ context. Free for all members.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#00FFE1]/40"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
