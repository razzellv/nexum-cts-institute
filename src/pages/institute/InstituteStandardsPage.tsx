import { useState } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

type FilterType = 'All' | 'Published' | 'Draft' | 'In Development' | 'Planned'

const standards = [
  {
    id: 'CTS-STD-001',
    version: 'v1.0',
    status: 'Published' as const,
    title: 'Critical Thinking System™ Standard',
    description:
      'The foundational governing document establishing the CTS™ methodology, six-stage thinking framework, principles, governance rules, and official definitions. Required reading for all CTS™ practitioners and organizational adopters.',
    related: '2 posters, 5 articles',
    actions: ['preview', 'purchase'],
    price: '$49',
  },
  {
    id: 'CTS-STD-002',
    version: 'v1.0',
    status: 'Published' as const,
    title: 'Operational Intelligence™ Framework',
    description:
      'Defines the eight-stage OI™ Lifecycle, intelligence hierarchy, evidence governance architecture, and knowledge continuity framework. The essential companion standard to CTS-STD-001 for full OI™ implementation.',
    related: 'OI Lifecycle Poster, 4 articles',
    actions: ['preview', 'purchase'],
    price: '$79',
  },
  {
    id: 'CTS-STD-003',
    version: 'v0.9',
    status: 'Draft' as const,
    title: 'Analytical Disciplines Manual',
    description:
      'Documents the analytical methods within the CTS™ Analyze phase: triangulation, synthesis, root cause analysis, evidence correlation, and decision modeling. A practitioner-level reference for advanced CTS™ application.',
    related: null,
    actions: ['waitlist'],
    price: null,
  },
  {
    id: 'CTS-STD-004',
    version: 'v0.8',
    status: 'Draft' as const,
    title: 'Industry Applications Guide',
    description:
      'Application-specific guidance for Facility Management, GovCon, Healthcare, Manufacturing, Energy & Utilities, and Education sectors. Maps the CTS™ methodology to sector-specific operational requirements.',
    related: null,
    actions: ['waitlist'],
    price: null,
  },
  {
    id: 'CTS-STD-005',
    version: 'v0.7',
    status: 'In Development' as const,
    title: 'Implementation & Governance Guide',
    description:
      'Organizational adoption guide covering change management, governance structure, practitioner development pathways, and quality assurance for enterprise CTS™ implementations.',
    related: null,
    actions: ['notify'],
    price: null,
  },
  {
    id: 'CTS-STD-006',
    version: 'v0.1',
    status: 'Planned' as const,
    title: 'Certification Body of Knowledge',
    description:
      'The official knowledge framework for CTS™ practitioner certification. Defines competency levels, examination scope, and the professional standard for certified CTS™ practitioners.',
    related: null,
    actions: ['notify'],
    price: null,
  },
]

const statusStyles: Record<string, string> = {
  Published: 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400',
  Draft: 'bg-[#c9a96e]/10 border border-[#c9a96e]/30 text-[#c9a96e]',
  'In Development': 'bg-[#00FFE1]/10 border border-[#00FFE1]/30 text-[#00FFE1]',
  Planned: 'bg-white/5 border border-white/15 text-white/40',
}

export default function InstituteStandardsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All')
  const [waitlistStd, setWaitlistStd] = useState<string | null>(null)
  const [waitlistEmail, setWaitlistEmail] = useState('')

  const filters: FilterType[] = ['All', 'Published', 'Draft', 'In Development', 'Planned']

  const filtered = activeFilter === 'All' ? standards : standards.filter((s) => s.status === activeFilter)

  return (
    <div className="bg-[#04080f] text-white">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#c9a96e] font-bold mb-3">Standards</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">CTS™ Standards Library</h1>
        <p className="text-white/55 text-sm leading-relaxed max-w-2xl mb-8">
          Official governing standards for Operational Intelligence™ — peer-reviewed, professionally structured, and built for field application.
        </p>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={cn(
                'px-4 py-1.5 rounded-full text-xs font-medium transition-all',
                activeFilter === f
                  ? 'bg-[#00FFE1] text-black font-bold'
                  : 'bg-white/[0.04] border border-white/[0.08] text-white/55 hover:text-white hover:border-white/20'
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Standards Grid */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((std) => (
            <div
              key={std.id}
              className="bg-white/[0.025] border border-white/[0.07] rounded-xl p-6 hover:border-white/[0.14] hover:bg-white/[0.04] transition-all flex flex-col"
            >
              {/* Top badges */}
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className="text-xs px-2.5 py-0.5 rounded-full border border-[#00FFE1]/30 text-[#00FFE1] font-mono font-bold">
                  {std.id}
                </span>
                <span className={cn('text-xs px-2.5 py-0.5 rounded-full font-medium', statusStyles[std.status])}>
                  {std.status}
                </span>
                <span className="text-xs text-white/25 ml-auto font-mono">{std.version}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{std.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-4 flex-1">{std.description}</p>

              {std.related && (
                <p className="text-xs text-white/30 mb-4">Related: {std.related}</p>
              )}

              <div className="border-t border-white/[0.06] pt-4 flex flex-wrap gap-2">
                {std.actions.includes('preview') && (
                  <button className="px-4 py-2 rounded-lg border border-[#00FFE1]/40 text-[#00FFE1] hover:bg-[#00FFE1]/10 transition-all text-xs font-medium">
                    Free Preview — first 10 pages
                  </button>
                )}
                {std.actions.includes('purchase') && (
                  <button className="px-4 py-2 rounded-lg bg-[#00FFE1] text-black font-bold hover:bg-[#00FFE1]/90 transition-all text-xs">
                    Purchase Full Standard — {std.price}
                  </button>
                )}
                {std.actions.includes('waitlist') && (
                  <div>
                    {waitlistStd === std.id ? (
                      <div className="flex gap-2">
                        <input
                          type="email"
                          placeholder="your@email.com"
                          value={waitlistEmail}
                          onChange={(e) => setWaitlistEmail(e.target.value)}
                          className="px-3 py-2 rounded-lg bg-white/[0.05] border border-white/10 text-white text-xs placeholder:text-white/25 outline-none focus:border-[#00FFE1]/40 w-40"
                        />
                        <button className="px-3 py-2 rounded-lg bg-[#00FFE1] text-black font-bold text-xs hover:bg-[#00FFE1]/90 transition-all">
                          Submit
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setWaitlistStd(std.id)}
                        className="px-4 py-2 rounded-lg border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-all text-xs font-medium"
                      >
                        Join Waitlist — Free
                      </button>
                    )}
                  </div>
                )}
                {std.actions.includes('notify') && (
                  <button className="px-4 py-2 rounded-lg border border-white/15 text-white/40 hover:text-white/60 hover:border-white/25 transition-all text-xs font-medium">
                    Notify Me on Release
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom info cards */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto pb-16">
        <h2 className="text-2xl font-bold text-white mb-6">What Makes a CTS™ Standard?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: 'Peer-Reviewed',
              body: 'All standards undergo editorial review by operational intelligence practitioners and subject matter experts before publication.',
            },
            {
              title: 'Field-Tested',
              body: 'Validated in real operational engagements across facility management, GovCon, and infrastructure environments.',
            },
            {
              title: 'Living Documents',
              body: 'Updated as the discipline evolves. Registered practitioners receive notifications when standards are revised.',
            },
          ].map(({ title, body }) => (
            <div key={title} className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5">
              <h3 className="font-bold text-white mb-2">{title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
