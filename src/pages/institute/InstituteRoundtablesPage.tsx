import { Link } from 'react-router-dom'
import { Users, Lock, FileText, MessageSquare, Video, FolderOpen, ArrowRight, Plus } from 'lucide-react'
import { Button } from '@/components/InstituteUI'
import Badge from '@/components/InstituteUI'

const roundtables = [
  {
    name: 'University Facilities Roundtable',
    description: 'Higher education facility directors and operations leaders discussing capital renewal, deferred maintenance strategy, and campus OI maturity.',
    members: 24,
    sector: 'Higher Education',
    cadence: 'Monthly',
    status: 'Open',
  },
  {
    name: 'Government Infrastructure Roundtable',
    description: 'Federal and state facility professionals discussing GSA guidance, government contract requirements, and public-sector operational intelligence.',
    members: 18,
    sector: 'Government',
    cadence: 'Bi-Monthly',
    status: 'Invitation Only',
  },
  {
    name: 'Energy & Utilities Roundtable',
    description: 'Energy managers, MEP engineers, and utility professionals discussing building performance standards, decarbonization, and energy decision documentation.',
    members: 31,
    sector: 'Energy & Utilities',
    cadence: 'Monthly',
    status: 'Open',
  },
  {
    name: 'Hospital Operations Roundtable',
    description: 'Healthcare facility directors and operations leads discussing compliance, patient environment requirements, maintenance reliability, and capital planning.',
    members: 15,
    sector: 'Healthcare',
    cadence: 'Monthly',
    status: 'Invitation Only',
  },
  {
    name: 'Manufacturing Reliability Roundtable',
    description: 'Reliability engineers and plant operations managers discussing predictive maintenance, OEE, asset health documentation, and failure prevention strategies.',
    members: 22,
    sector: 'Manufacturing',
    cadence: 'Monthly',
    status: 'Open',
  },
  {
    name: 'Capital Planning Roundtable',
    description: 'Senior facility leaders and CFOs discussing capital renewal frameworks, investment prioritization, lifecycle cost modeling, and defensible budget narratives.',
    members: 19,
    sector: 'Cross-Sector',
    cadence: 'Quarterly',
    status: 'Invitation Only',
  },
]

const features = [
  {
    icon: <Plus size={18} className="text-[#00FFE1]" />,
    title: 'Create a Roundtable',
    desc: 'Any Professional or higher member can launch a private roundtable for their sector or topic area.',
  },
  {
    icon: <Users size={18} className="text-[#00FFE1]" />,
    title: 'Invite Your Peers',
    desc: 'Roundtable organizers control membership — invite by email or share a private access link.',
  },
  {
    icon: <Lock size={18} className="text-[#00FFE1]" />,
    title: 'Private Discussions',
    desc: 'All roundtable content is visible only to members. Nothing is indexed or visible to the public.',
  },
  {
    icon: <FolderOpen size={18} className="text-[#00FFE1]" />,
    title: 'Shared File Library',
    desc: 'Upload case studies, decision documents, templates, and reference materials for group access.',
  },
  {
    icon: <FileText size={18} className="text-[#00FFE1]" />,
    title: 'Meeting Notes & Summaries',
    desc: 'Structured meeting note templates aligned with CTS™ stage outputs for knowledge preservation.',
  },
  {
    icon: <MessageSquare size={18} className="text-[#00FFE1]" />,
    title: 'Async Discussion Threads',
    desc: 'Threaded discussion boards for between-session dialogue, questions, and document annotation.',
  },
  {
    icon: <Video size={18} className="text-[#00FFE1]" />,
    title: 'Session Scheduling',
    desc: 'Integrated scheduling tools with calendar sync and session agenda management.',
  },
  {
    icon: <Users size={18} className="text-[#00FFE1]" />,
    title: 'Admin Controls',
    desc: 'Full admin controls for membership management, content moderation, and session recording settings.',
  },
]

export default function RoundtablesPage() {
  return (
    <div className="bg-[#04080f]">
      {/* Hero */}
      <section className="py-20 border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#c9a96e] font-bold mb-4">Collaborative Workspaces</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            <span className="text-[#c9a96e]">Roundtables</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Private organizational workspaces for teams, peer groups, and sector cohorts. Roundtables are structured for ongoing dialogue — not one-off events. Invite your peers, share documents, and preserve the conversations that matter.
          </p>
        </div>
      </section>

      {/* Roundtable Cards */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-white">Active Roundtables</h2>
            <Button size="sm">
              <Plus size={14} /> Start a Roundtable
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {roundtables.map((rt) => (
              <div
                key={rt.name}
                className="bg-white/[0.025] border border-white/[0.06] rounded-xl p-6 hover:border-white/[0.12] transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-white font-bold leading-snug">{rt.name}</h3>
                  {rt.status === 'Invitation Only' ? (
                    <Lock size={14} className="text-[#c9a96e] mt-0.5 shrink-0" />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-green-400 mt-1 shrink-0" />
                  )}
                </div>

                <p className="text-white/50 text-sm leading-relaxed mb-4">{rt.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="gray">{rt.sector}</Badge>
                  <Badge variant="gray">{rt.cadence}</Badge>
                  {rt.status === 'Open' ? (
                    <Badge variant="green">Open</Badge>
                  ) : (
                    <Badge variant="gold">Invitation Only</Badge>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-white/30 text-xs">
                    <Users size={12} />
                    {rt.members} members
                  </div>
                  {rt.status === 'Open' ? (
                    <Button size="sm" variant="outline">Request to Join</Button>
                  ) : (
                    <Button size="sm" variant="ghost">Learn More</Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-white/[0.06] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#c9a96e] font-bold mb-3">Platform Features</p>
            <h2 className="text-3xl font-bold text-white">Everything Your Roundtable Needs</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white/[0.025] border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.1] transition-all"
              >
                <div className="mb-3">{feature.icon}</div>
                <h3 className="text-white font-bold text-sm mb-2">{feature.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.06] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Launch Your Own Roundtable</h2>
          <p className="text-white/50 text-sm leading-relaxed mb-8">
            Professional and higher membership tiers include the ability to create and manage private roundtables. Gather your team, your cohort, or your sector peers in a structured, knowledge-preserving environment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/membership">
              <Button size="lg">View Membership Plans <ArrowRight size={16} /></Button>
            </Link>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
