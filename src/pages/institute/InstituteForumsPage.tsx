import { MessageSquare, Users, TrendingUp, Lock } from 'lucide-react'
import { Button } from '@/components/InstituteUI'
import Badge from '@/components/InstituteUI'

const forums = [
  {
    name: 'Operational Intelligence™',
    description: 'Core discussions on OI principles, lifecycle practices, and maturity model development. The central forum for CTS™ methodology practitioners.',
    topics: 142,
    posts: 1847,
    activity: 'Very Active',
    memberOnly: false,
  },
  {
    name: 'CTS™ Methodology',
    description: 'Deep-dive discussions on CTS™ application, stage-by-stage methodology questions, case studies, and practitioner interpretation guidance.',
    topics: 89,
    posts: 1203,
    activity: 'Active',
    memberOnly: false,
  },
  {
    name: 'Facility Management',
    description: 'Operational challenges, capital planning, deferred maintenance strategy, asset management, and facility condition assessment discussions.',
    topics: 211,
    posts: 2904,
    activity: 'Very Active',
    memberOnly: false,
  },
  {
    name: 'Project Governance',
    description: 'Project delivery, owner advisory, construction oversight, commissioning, and post-occupancy evaluation discussions for facilities professionals.',
    topics: 74,
    posts: 891,
    activity: 'Active',
    memberOnly: true,
  },
  {
    name: 'Energy & Utilities',
    description: 'Energy management, utility infrastructure, Building Performance Standards compliance, decarbonization planning, and mechanical system optimization.',
    topics: 103,
    posts: 1456,
    activity: 'Active',
    memberOnly: false,
  },
  {
    name: 'Maintenance & Reliability',
    description: 'Preventive and predictive maintenance strategy, reliability engineering, CMMS practices, work order documentation, and maintenance KPI discussions.',
    topics: 156,
    posts: 2103,
    activity: 'Very Active',
    memberOnly: false,
  },
  {
    name: 'Infrastructure Modernization',
    description: 'Aging infrastructure strategy, capital renewal planning, infrastructure gap analysis, and modernization prioritization frameworks.',
    topics: 67,
    posts: 743,
    activity: 'Moderate',
    memberOnly: true,
  },
  {
    name: 'Government & GovCon',
    description: 'Federal, state, and local government facility challenges, GSA guidance, government contracting, and public sector operational intelligence.',
    topics: 88,
    posts: 1122,
    activity: 'Active',
    memberOnly: true,
  },
  {
    name: 'AI and Decision Support',
    description: 'Artificial intelligence, machine learning, and decision support tool integration within the CTS™ framework. Responsible AI use in operational contexts.',
    topics: 44,
    posts: 612,
    activity: 'Growing',
    memberOnly: false,
  },
  {
    name: 'Knowledge Preservation',
    description: 'Institutional knowledge management, operational documentation standards, first-signal capture, and knowledge base architecture for facilities organizations.',
    topics: 58,
    posts: 784,
    activity: 'Active',
    memberOnly: true,
  },
  {
    name: 'Lower Cost of Ownership',
    description: 'Lifecycle cost analysis, total cost of ownership modeling, cost attribution, and the relationship between operational decisions and long-term ownership cost.',
    topics: 71,
    posts: 934,
    activity: 'Active',
    memberOnly: false,
  },
  {
    name: 'Decision Defensibility™',
    description: 'Evidence standards, recommendation documentation, stakeholder communication, analytical integrity, and building defensible decision packages.',
    topics: 96,
    posts: 1278,
    activity: 'Active',
    memberOnly: true,
  },
]

function activityColor(activity: string) {
  if (activity === 'Very Active') return 'text-[#00FFE1]'
  if (activity === 'Growing') return 'text-green-400'
  if (activity === 'Active') return 'text-white/60'
  return 'text-white/40'
}

export default function ForumsPage() {
  return (
    <div className="bg-[#04080f]">
      {/* Hero */}
      <section className="py-20 border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#c9a96e] font-bold mb-4">Community</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Discussion <span className="text-[#c9a96e]">Forums</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Practitioner-led discussion across 12 operational domains. Ask questions, share case studies, and engage with peers applying Operational Intelligence™ in real environments.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-white/[0.06] py-5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <Users size={14} className="text-[#00FFE1]" />
              <span className="text-sm text-white/60"><span className="text-white font-semibold">2,847</span> members</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare size={14} className="text-[#00FFE1]" />
              <span className="text-sm text-white/60"><span className="text-white font-semibold">15,877</span> posts</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp size={14} className="text-[#00FFE1]" />
              <span className="text-sm text-white/60"><span className="text-white font-semibold">342</span> new posts this week</span>
            </div>
          </div>
        </div>
      </section>

      {/* Forum Grid */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {forums.map((forum) => (
              <div
                key={forum.name}
                className="bg-white/[0.025] border border-white/[0.06] rounded-xl p-6 hover:border-white/[0.12] transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-white font-bold">{forum.name}</h3>
                    {forum.memberOnly && (
                      <Lock size={12} className="text-[#c9a96e]" />
                    )}
                  </div>
                  <span className={`text-xs font-medium shrink-0 ${activityColor(forum.activity)}`}>
                    {forum.activity}
                  </span>
                </div>

                <p className="text-white/50 text-sm leading-relaxed mb-4">{forum.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-white/30">
                    <span>{forum.topics} topics</span>
                    <span>{forum.posts.toLocaleString()} posts</span>
                  </div>
                  {forum.memberOnly ? (
                    <Badge variant="gold">Members Only</Badge>
                  ) : (
                    <Button size="sm" variant="outline">Join Discussion</Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="border-t border-white/[0.06] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a96e]/[0.06] border border-[#c9a96e]/20 rounded-full mb-5">
            <Lock size={12} className="text-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs font-bold uppercase tracking-wider">Member-Only Forums</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Unlock All 12 Forum Categories
          </h2>
          <p className="text-white/50 text-sm mb-6 leading-relaxed">
            Some forums require CTS Institute™ membership. Join free to access open forums, or upgrade to unlock all member-only discussions including Knowledge Preservation, Decision Defensibility™, and Government & GovCon.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button>Join Free</Button>
            <Button variant="gold">View Membership Plans</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
