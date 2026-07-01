import { useState } from 'react'
import { Calendar, Video, Users, BookOpen, ArrowRight, Bell } from 'lucide-react'
import { Button, Badge } from '@/components/InstituteUI'

const eventTypes = [
  {
    icon: <Video size={20} className="text-[#00C2A8]" />,
    title: 'Webinars',
    description: 'Live practitioner-led webinars on CTS™ methodology, standards releases, and operational intelligence topics. Recorded for on-demand playback for members.',
    cadence: 'Monthly',
  },
  {
    icon: <Users size={20} className="text-[#00C2A8]" />,
    title: 'Roundtable Sessions',
    description: 'Facilitated peer dialogue in domain-specific roundtables. Open roundtable sessions allow non-members to observe and participate in select discussions.',
    cadence: 'Monthly',
  },
  {
    icon: <BookOpen size={20} className="text-[#00C2A8]" />,
    title: 'Standards Release Events',
    description: 'Structured release briefings for each new or updated CTS™ standard — covering methodology changes, key requirements, and practitioner Q&A.',
    cadence: 'As published',
  },
  {
    icon: <Calendar size={20} className="text-[#00C2A8]" />,
    title: 'Annual CTS™ Conference',
    description: 'The flagship annual gathering of CTS™ practitioners — combining methodology deep-dives, peer case studies, advisory sessions, and community events.',
    cadence: 'Annual',
  },
]

const upcomingPlaceholders = [
  {
    title: 'CTS™ Methodology Introduction — Webinar',
    date: 'Coming Q3 2026',
    type: 'Webinar',
    status: 'Registration Opening Soon',
  },
  {
    title: 'Decision Defensibility™ in Practice — Roundtable Session',
    date: 'Coming Q3 2026',
    type: 'Roundtable',
    status: 'Member Priority Access',
  },
  {
    title: 'CTS-STD-002 Release Briefing — OI Framework v1.0',
    date: 'Coming Q4 2026',
    type: 'Standards Release',
    status: 'Open Registration',
  },
  {
    title: 'Inaugural CTS™ Practitioner Conference',
    date: 'Planning for 2027',
    type: 'Conference',
    status: 'Founding Member Priority',
  },
]

export default function EventsPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <div className="bg-[#FAF9F1]">
      {/* Hero */}
      <section className="py-20 border-b border-[#E2D8CC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF57] font-bold mb-4">Community Events</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#2C1F0E] mb-5">
            Events &amp; <span className="text-[#D4AF57]">Programming</span>
          </h1>
          <p className="text-[#4A3828] text-lg leading-relaxed">
            Operational Intelligence Institute™ events bring practitioners together for structured learning, peer dialogue, and standards development. Webinars, roundtables, standards briefings, and an annual conference — all grounded in Operational Intelligence™.
          </p>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0d1b3e]/30 border border-[#0d1b3e] rounded-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#00C2A8]/10 border border-[#00C2A8]/20 flex items-center justify-center mx-auto mb-5">
              <Calendar size={28} className="text-[#00C2A8]" />
            </div>
            <Badge variant="teal" className="mb-4">Events Calendar Launching Soon</Badge>
            <h2 className="text-2xl font-bold text-[#2C1F0E] mb-3">Programming Is Being Developed</h2>
            <p className="text-[#4A3828] text-sm leading-relaxed max-w-xl mx-auto mb-6">
              The Operational Intelligence Institute™ events calendar is under development. Sign up below to be notified when registration opens for our first webinars, roundtable sessions, and standards briefings.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm mx-auto">
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-[#EDE8E0] border border-[#E2D8CC] rounded-lg px-4 py-2.5 text-sm text-[#2C1F0E] placeholder-[#7A6A55] focus:outline-none focus:border-[#00C2A8]/40"
                />
                <Button type="submit">
                  <Bell size={14} /> Notify Me
                </Button>
              </form>
            ) : (
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00C2A8]/10 border border-[#00C2A8]/20 rounded-lg">
                <Bell size={14} className="text-[#00C2A8]" />
                <span className="text-[#00C2A8] text-sm font-medium">You're on the list — we'll be in touch.</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 border-t border-[#E2D8CC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF57] font-bold mb-3">What to Expect</p>
            <h2 className="text-2xl font-bold text-[#2C1F0E]">Types of Operational Intelligence Institute™ Programming</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {eventTypes.map((et) => (
              <div
                key={et.title}
                className="bg-[#F3F0EA] border border-[#E2D8CC] rounded-xl p-6 hover:border-[#E2D8CC] transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00C2A8]/10 border border-[#00C2A8]/20 flex items-center justify-center shrink-0">
                    {et.icon}
                  </div>
                  <div>
                    <h3 className="text-[#2C1F0E] font-bold">{et.title}</h3>
                    <span className="text-[#6E5E34] text-xs">{et.cadence}</span>
                  </div>
                </div>
                <p className="text-[#4A3828] text-sm leading-relaxed">{et.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Placeholder */}
      <section className="border-t border-[#E2D8CC] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#2C1F0E] mb-8">Upcoming Events</h2>
          <div className="flex flex-col gap-4">
            {upcomingPlaceholders.map((event, i) => (
              <div
                key={i}
                className="bg-[#F3F0EA] border border-[#E2D8CC] rounded-xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge variant="gray">{event.type}</Badge>
                    <Badge variant="teal">{event.status}</Badge>
                  </div>
                  <h3 className="text-[#2C1F0E] font-semibold">{event.title}</h3>
                  <p className="text-[#6E5E34] text-sm mt-1">{event.date}</p>
                </div>
                <Button size="sm" variant="outline" className="shrink-0">
                  <Bell size={12} /> Get Notified
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#E2D8CC] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#2C1F0E] mb-3">Propose an Event or Webinar Topic</h2>
          <p className="text-[#4A3828] text-sm mb-6 leading-relaxed">
            Operational Intelligence Institute™ accepts proposals for webinar topics, roundtable themes, and practitioner panels from Professional and Practitioner members.
          </p>
          <Button variant="gold">
            Submit a Proposal <ArrowRight size={14} />
          </Button>
        </div>
      </section>
    </div>
  )
}
