/**
 * CTS Institute™ Home Page
 * Matches design spec: warm cream, Playfair headings, teal/gold accents
 */

import { Link } from 'react-router-dom'
import {
  BookOpen,
  Users,
  MessageSquare,
  CalendarDays,
  ArrowRight,
  FileText,
  Shield,
  FlaskConical,
  Bot,
  Globe,
  Award,
  ChevronRight,
  Share2,
  TrendingUp,
  Smartphone,
  GraduationCap,
  CheckCircle2,
  Star,
} from 'lucide-react'
import { useInstituteAuth } from '@/context/InstituteAuthContext'

// Design tokens
const C = {
  cream:     '#FAF9F1',
  beige:     '#F3F0EA',
  tan:       '#E7DDD4',
  brown:     '#6E5E34',
  darkBrown: '#4C3D21',
  gold:      '#D4AF57',
  turquoise: '#6ECAB6',
  teal:      '#00C2A8',
  tealDark:  '#005677',
  text:      '#2C1F0E',
  muted:     '#7A6A55',
  border:    '#E2D8CC',
}

// ─── Data ────────────────────────────────────────────────────────────────────

const STATS = [
  { num: '412',   label: 'Publications',    icon: FileText },
  { num: '128',   label: 'CTS Standards™',  icon: Shield },
  { num: '3,284', label: 'Members',         icon: Users },
  { num: '57',    label: 'Countries',       icon: Globe },
  { num: '842',   label: 'Discussions',     icon: MessageSquare },
]

const FEATURES_RIGHT = [
  { icon: Share2,        title: 'Share Knowledge',      sub: 'Publish papers, articles, standards, and insights.' },
  { icon: Users,         title: 'Engage Community',     sub: 'Join discussions, ask questions, and collaborate.' },
  { icon: GraduationCap, title: 'Advance Your Career',  sub: 'Courses, certifications, and professional growth.' },
  { icon: Smartphone,    title: 'Access Anywhere',      sub: 'On any device, anytime, anywhere.' },
]

const FEATURED = [
  {
    tag: 'NEW PAPER',
    tagColor: C.teal,
    title: 'Operational Intelligence™: Preserving Decision Context Across Facility Lifecycles',
    author: 'Razzell Valentine',
    date: 'May 28, 2026',
    href: '/institute/publications',
    bg: 'linear-gradient(135deg, #E8F4F0 0%, #D4EDE8 100%)',
  },
  {
    tag: 'CTS STANDARD™',
    tagColor: C.gold,
    title: 'CTS-101 Context Documentation Standard™',
    author: 'Nexum Suum Inc.',
    date: 'May 25, 2026',
    href: '/institute/standards',
    bg: 'linear-gradient(135deg, #F5EDD8 0%, #EDE0C4 100%)',
  },
  {
    tag: 'WHITE PAPER',
    tagColor: '#6B9FD4',
    title: 'The Hidden Cost of Organizational Friction™ in Facilities',
    author: 'Nexum Suum Inc.',
    date: 'May 20, 2026',
    href: '/institute/publications',
    bg: 'linear-gradient(135deg, #E8EEF5 0%, #D8E4F0 100%)',
  },
  {
    tag: 'RESEARCH',
    tagColor: '#9B7BC4',
    title: 'Decision Defensibility™ in Critical Infrastructure Environments',
    author: 'Razzell Valentine',
    date: 'May 18, 2026',
    href: '/institute/pulse',
    bg: 'linear-gradient(135deg, #EEE8F5 0%, #E2D8F0 100%)',
  },
]

const AI_PROMPTS = [
  'Ask me anything about standards, courses, research, assessments, and more…',
]

const DISCUSSIONS = [
  {
    avatar: 'J',
    avatarColor: C.teal,
    author: 'James T.',
    time: '2h ago',
    title: 'How do you capture tribal knowledge before key personnel retire?',
    replies: 12,
  },
  {
    avatar: 'S',
    avatarColor: C.gold,
    author: 'Sarah M.',
    time: '5h ago',
    title: 'Best practices for Decision Defensibility™ in capital planning?',
    replies: 8,
  },
  {
    avatar: 'M',
    avatarColor: '#9B7BC4',
    author: 'Michael R.',
    time: '1d ago',
    title: 'Operational Intelligence™ Metrics that actually drive behavior change',
    replies: 21,
  },
]

const EVENTS = [
  {
    month: 'JUN', day: '15',
    title: 'Operational Intelligence™ Roundtable',
    type: 'Virtual Event',
    time: '11:00 AM EST',
  },
  {
    month: 'JUN', day: '22',
    title: 'CTS™ Standards Workshop for Practitioners',
    type: 'Virtual Event',
    time: '1:00 PM EST',
  },
  {
    month: 'JUL', day: '10',
    title: 'Defensible Decisions in Complex Environments',
    type: 'Virtual Event',
    time: '10:00 AM EST',
  },
]

const MEMBERSHIP = [
  {
    icon: '◎',
    name: 'Core Member',
    sub: 'Access to publications & community',
    price: 'Free',
    priceColor: C.turquoise,
  },
  {
    icon: '◈',
    name: 'Professional Member',
    sub: 'Courses, downloads, certificates',
    price: '$29/mo',
    priceColor: C.gold,
    featured: true,
  },
  {
    icon: '◆',
    name: 'Enterprise Member',
    sub: 'Teams, analytics, private content',
    price: '$199/mo',
    priceColor: C.brown,
  },
]

const COURSE_STEPS = [
  { num: 1, label: 'Select Source',    sub: 'Choose assessment\n(PMO, FIWE, FI, etc.)' },
  { num: 2, label: 'AI Generation',    sub: 'AI creates course outline,\nmodules, lessons, questions.' },
  { num: 3, label: 'Review & Edit',    sub: 'Review content, structure,\nquestions, and objectives.' },
  { num: 4, label: 'Take Course',      sub: 'Admin must complete\nthe course.' },
  { num: 5, label: 'Pass to Publish',  sub: 'Pass with 100% (min. 80%)\nto publish live.' },
  { num: 6, label: 'Publish to Institute', sub: 'Course goes live for\nmembers.' },
]

const ECOSYSTEM_NODES = [
  { label: 'OPERATIONAL\nINTELLIGENCE™\nHEADQUARTERS', x: 50, y: 8, r: 32, highlight: false },
  { label: 'CTS\nINSTITUTE™',                            x: 50, y: 52, r: 38, highlight: true },
  { label: 'FACILITY\nINTELLIGENCE™\nPLATFORM',         x: 12, y: 70, r: 28, highlight: false },
  { label: 'ASSESSMENTS\n& CONSULTING',                  x: 88, y: 28, r: 28, highlight: false },
  { label: 'CTS\nSTANDARDS™\nLIBRARY',                  x: 88, y: 72, r: 28, highlight: false },
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function InstituteHomePage() {
  const { user } = useInstituteAuth()

  return (
    <div style={{ background: C.cream, color: C.text, fontFamily: 'Inter, sans-serif' }}>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: C.beige, borderBottom: `1px solid ${C.border}` }}
      >
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left: headline + CTA */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.18em] font-bold mb-5"
                style={{ background: `${C.teal}15`, color: C.teal, border: `1px solid ${C.teal}30` }}
              >
                The Center for Operational Intelligence™
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] mb-3"
                style={{ fontFamily: 'Playfair Display, serif', color: C.darkBrown }}
              >
                CTS Institute<span style={{ color: C.gold }}>™</span>
              </h1>

              <p
                className="text-[11px] uppercase tracking-[0.22em] font-bold mb-2"
                style={{ color: C.turquoise }}
              >
                The Center for Operational Intelligence™
              </p>

              <p
                className="text-[12px] uppercase tracking-[0.16em] font-semibold mb-6"
                style={{ color: C.muted }}
              >
                Knowledge that Transforms. Standards that Endure. Impact that Lasts.
              </p>

              <p className="text-[14px] leading-relaxed mb-8 max-w-xl" style={{ color: C.muted }}>
                Explore the global hub for Operational Intelligence™, Decision Defensibility™, CTS Standards™, and the professionals building the future of intelligent, resilient, and defensible operations.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <Link
                  to="/institute/publications"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-[13px] font-bold transition-all hover:opacity-90"
                  style={{ background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`, color: '#fff' }}
                >
                  Explore the Library
                </Link>
                <Link
                  to="/institute/courses"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-[13px] font-semibold transition-all"
                  style={{ background: C.cream, border: `1px solid ${C.border}`, color: C.text }}
                >
                  Browse Courses
                </Link>
              </div>

              {/* Hero image placeholder */}
              <div
                className="rounded-xl overflow-hidden relative"
                style={{
                  background: 'linear-gradient(135deg, #D4C4A8 0%, #C4B090 40%, #B8A07A 100%)',
                  height: '220px',
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p
                      className="text-3xl font-bold mb-1 opacity-40"
                      style={{ fontFamily: 'Playfair Display, serif', color: C.darkBrown }}
                    >
                      "Context is the
                    </p>
                    <p
                      className="text-3xl font-bold opacity-40"
                      style={{ fontFamily: 'Playfair Display, serif', color: C.darkBrown }}
                    >
                      CEO of Data."
                    </p>
                  </div>
                </div>
                <div
                  className="absolute bottom-4 right-4 rounded-xl px-4 py-2 text-[11px] font-bold uppercase tracking-wider"
                  style={{ background: `${C.teal}22`, color: C.teal, border: `1px solid ${C.teal}30` }}
                >
                  Professional Knowledge Hub
                </div>
              </div>
            </div>

            {/* Right: feature bullets + phone mockup */}
            <div className="lg:col-span-5 space-y-6">
              <div
                className="rounded-xl p-5"
                style={{ background: C.darkBrown }}
              >
                {/* Phone mockup */}
                <div
                  className="rounded-xl p-4 mb-5"
                  style={{ background: C.cream, border: `4px solid rgba(255,255,255,0.12)` }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-5 h-5 rounded flex items-center justify-center"
                      style={{ background: `${C.gold}20` }}
                    >
                      <BookOpen className="h-2.5 w-2.5" style={{ color: C.gold }} />
                    </div>
                    <span className="text-[10px] font-bold" style={{ color: C.darkBrown }}>CTS INSTITUTE™</span>
                  </div>
                  <p className="text-[11px] font-bold mb-1" style={{ color: C.darkBrown, fontFamily: 'Playfair Display, serif' }}>
                    Knowledge.<br />Standards.<br />Community.<br />Impact.
                  </p>
                  <div className="flex flex-col gap-1.5 mt-3">
                    <Link
                      to="/institute/publications"
                      className="block text-center py-1.5 rounded-lg text-[11px] font-bold text-white transition-all hover:opacity-90"
                      style={{ background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})` }}
                    >
                      Explore Library
                    </Link>
                    <Link
                      to="/institute/signup"
                      className="block text-center py-1.5 rounded-lg text-[11px] font-semibold border transition-all hover:opacity-80"
                      style={{ border: `1px solid ${C.border}`, color: C.muted }}
                    >
                      Join the Community
                    </Link>
                  </div>
                  {/* Mini stats */}
                  <div className="grid grid-cols-3 gap-2 mt-3 pt-3" style={{ borderTop: `1px solid ${C.border}` }}>
                    {[{ n: '412', l: 'Publications' }, { n: '128', l: 'Standards' }, { n: '3,284', l: 'Members' }].map(s => (
                      <div key={s.l} className="text-center">
                        <div className="text-[13px] font-bold" style={{ color: C.teal }}>{s.n}</div>
                        <div className="text-[9px]" style={{ color: C.muted }}>{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Feature list */}
                <p
                  className="text-[10px] uppercase tracking-[0.2em] font-bold mb-3"
                  style={{ color: 'rgba(255,255,255,0.4)' }}
                >
                  Built for Purpose. Designed for Impact.
                </p>
                <div className="space-y-3">
                  {FEATURES_RIGHT.map(({ icon: Icon, title, sub }) => (
                    <div key={title} className="flex items-start gap-3">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: `${C.teal}20` }}
                      >
                        <Icon className="h-3.5 w-3.5" style={{ color: C.turquoise }} />
                      </div>
                      <div>
                        <p className="text-[12px] font-semibold" style={{ color: 'rgba(255,255,255,0.85)' }}>{title}</p>
                        <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────────── */}
      <div style={{ background: '#fff', borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="grid grid-cols-5 gap-4">
            {STATS.map(({ num, label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${C.teal}12`, border: `1px solid ${C.teal}25` }}
                >
                  <Icon className="h-4 w-4" style={{ color: C.teal }} />
                </div>
                <div>
                  <div className="text-[18px] font-bold leading-none" style={{ color: C.darkBrown }}>{num}</div>
                  <div className="text-[10px] mt-0.5" style={{ color: C.muted }}>{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FEATURED CONTENT ─────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-5">
          <h2
            className="text-[13px] uppercase tracking-[0.16em] font-bold"
            style={{ color: C.muted }}
          >
            Featured Content
          </h2>
          <Link
            to="/institute/publications"
            className="text-[12px] flex items-center gap-1 transition-opacity hover:opacity-70"
            style={{ color: C.teal }}
          >
            View all <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURED.map(({ tag, tagColor, title, author, date, href, bg }) => (
            <Link
              key={title}
              to={href}
              className="group block rounded-xl overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-md"
              style={{ background: '#fff', border: `1px solid ${C.border}` }}
            >
              {/* Card image area */}
              <div
                className="h-28 flex items-end p-3"
                style={{ background: bg }}
              >
                <span
                  className="text-[9px] uppercase tracking-[0.15em] font-bold px-2 py-0.5 rounded-full"
                  style={{ background: `${tagColor}20`, color: tagColor, border: `1px solid ${tagColor}35` }}
                >
                  {tag}
                </span>
              </div>
              <div className="p-4">
                <h3
                  className="text-[13px] font-semibold leading-snug mb-3 group-hover:opacity-80 transition-opacity"
                  style={{ color: C.text }}
                >
                  {title}
                </h3>
                <div className="flex items-center gap-2">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white"
                    style={{ background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})` }}
                  >
                    {author[0]}
                  </div>
                  <div>
                    <p className="text-[10px] font-medium" style={{ color: C.text }}>{author}</p>
                    <p className="text-[10px]" style={{ color: C.muted }}>{date}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 4-COLUMN MID SECTION ─────────────────────────────────────────────── */}
      <section
        className="py-10"
        style={{ background: C.beige, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {/* AI Instructor */}
          <div
            className="rounded-xl p-5 flex flex-col"
            style={{ background: C.darkBrown }}
          >
            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: `${C.gold}20` }}
              >
                <Bot className="h-4 w-4" style={{ color: C.gold }} />
              </div>
              <p
                className="text-[13px] font-bold"
                style={{ color: 'rgba(255,255,255,0.9)', fontFamily: 'Playfair Display, serif' }}
              >
                AI Instructor
              </p>
            </div>
            <p className="text-[12px] mb-2" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Your intelligent guide for Operational Intelligence™
            </p>
            <div
              className="flex-1 rounded-lg px-3 py-2.5 mb-4 text-[11px] italic"
              style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)' }}
            >
              {AI_PROMPTS[0]}
            </div>
            <Link
              to="/institute/ai-instructor"
              className="flex items-center justify-center gap-2 py-2 rounded-lg text-[12px] font-bold transition-all hover:opacity-90"
              style={{ background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`, color: '#fff' }}
            >
              Ask AI Instructor
            </Link>
          </div>

          {/* Community Forum */}
          <div
            className="rounded-xl overflow-hidden"
            style={{ background: '#fff', border: `1px solid ${C.border}` }}
          >
            <div
              className="flex items-center justify-between px-4 py-3 border-b"
              style={{ borderColor: C.tan }}
            >
              <p className="text-[13px] font-bold" style={{ color: C.text }}>Community Forum</p>
              <Link
                to="/institute/forums"
                className="text-[11px] transition-opacity hover:opacity-70"
                style={{ color: C.teal }}
              >
                View all
              </Link>
            </div>
            <div className="divide-y" style={{ borderColor: C.tan }}>
              {DISCUSSIONS.map(({ avatar, avatarColor, author, time, title, replies }) => (
                <div key={title} className="px-4 py-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0"
                      style={{ background: avatarColor }}
                    >
                      {avatar}
                    </div>
                    <span className="text-[10px] font-medium" style={{ color: C.text }}>{author}</span>
                    <span className="text-[10px]" style={{ color: C.muted }}>• {time}</span>
                  </div>
                  <p className="text-[12px] leading-snug mb-1" style={{ color: C.text }}>{title}</p>
                  <p className="text-[10px]" style={{ color: C.muted }}>{replies} replies</p>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div
            className="rounded-xl overflow-hidden"
            style={{ background: '#fff', border: `1px solid ${C.border}` }}
          >
            <div
              className="flex items-center justify-between px-4 py-3 border-b"
              style={{ borderColor: C.tan }}
            >
              <p className="text-[13px] font-bold" style={{ color: C.text }}>Upcoming Events</p>
              <Link
                to="/institute/events"
                className="text-[11px] transition-opacity hover:opacity-70"
                style={{ color: C.teal }}
              >
                View all
              </Link>
            </div>
            <div className="divide-y" style={{ borderColor: C.tan }}>
              {EVENTS.map(({ month, day, title, type, time }) => (
                <div key={title} className="flex items-start gap-3 px-4 py-3">
                  <div
                    className="shrink-0 w-10 text-center rounded-lg py-1.5"
                    style={{ background: C.beige, border: `1px solid ${C.border}` }}
                  >
                    <div className="text-[8px] uppercase tracking-wider font-bold" style={{ color: C.teal }}>{month}</div>
                    <div className="text-[16px] font-bold leading-none mt-0.5" style={{ color: C.darkBrown }}>{day}</div>
                  </div>
                  <div>
                    <p className="text-[12px] font-medium leading-snug" style={{ color: C.text }}>{title}</p>
                    <p className="text-[10px] mt-0.5" style={{ color: C.muted }}>{type} • {time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Membership Tiers */}
          <div
            className="rounded-xl overflow-hidden"
            style={{ background: '#fff', border: `1px solid ${C.border}` }}
          >
            <div className="px-4 py-3 border-b" style={{ borderColor: C.tan }}>
              <p className="text-[13px] font-bold" style={{ color: C.text }}>Membership Tiers</p>
              <p className="text-[10px] mt-0.5" style={{ color: C.muted }}>Choose the membership that fits your journey.</p>
            </div>
            <div className="divide-y" style={{ borderColor: C.tan }}>
              {MEMBERSHIP.map(({ icon, name, sub, price, priceColor, featured }) => (
                <div
                  key={name}
                  className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-black/[0.015]"
                  style={featured ? { background: `${C.gold}08` } : {}}
                >
                  <span className="text-lg" style={{ color: priceColor }}>{icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[12px] font-semibold" style={{ color: C.text }}>{name}</p>
                    <p className="text-[10px] truncate" style={{ color: C.muted }}>{sub}</p>
                  </div>
                  <span className="text-[12px] font-bold shrink-0" style={{ color: priceColor }}>{price}</span>
                </div>
              ))}
            </div>
            <div className="px-4 py-3">
              <Link
                to="/institute/signup"
                className="block text-center py-2 rounded-lg text-[12px] font-bold transition-all hover:opacity-90"
                style={{ background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`, color: '#fff' }}
              >
                View All Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI COURSE CREATOR (INTERNAL) ─────────────────────────────────────── */}
      <section
        className="py-10"
        style={{ background: C.cream }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <p
                  className="text-[13px] uppercase tracking-[0.14em] font-bold"
                  style={{ color: C.text }}
                >
                  AI Course Creator
                </p>
                <span
                  className="text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full"
                  style={{ background: `${C.gold}18`, color: C.gold, border: `1px solid ${C.gold}30` }}
                >
                  Internal
                </span>
              </div>
              <p className="text-[12px]" style={{ color: C.muted }}>
                Generate courses from assessments. Review, verify, and publish to the Institute.
              </p>
            </div>
            {/* Verification status */}
            <div
              className="hidden lg:block rounded-xl px-5 py-3 text-right"
              style={{ background: '#fff', border: `1px solid ${C.border}` }}
            >
              <p
                className="text-[10px] uppercase tracking-wider font-bold mb-2"
                style={{ color: C.muted }}
              >
                Your Verification Status
              </p>
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-[22px] font-bold" style={{ color: C.teal }}>24</div>
                  <div className="text-[10px]" style={{ color: C.muted }}>Courses Completed</div>
                </div>
                <div>
                  <div className="text-[22px] font-bold" style={{ color: C.gold }}>98%</div>
                  <div className="text-[10px]" style={{ color: C.muted }}>Average Score</div>
                </div>
                <Link
                  to="/institute/dashboard"
                  className="px-4 py-2 rounded-lg text-[12px] font-bold text-white transition-all hover:opacity-90 whitespace-nowrap"
                  style={{ background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})` }}
                >
                  Go to My Courses
                </Link>
              </div>
            </div>
          </div>

          {/* Steps flow */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {COURSE_STEPS.map(({ num, label, sub }, i) => (
              <div key={label} className="relative">
                <div
                  className="rounded-xl p-4 h-full"
                  style={{ background: '#fff', border: `1px solid ${C.border}` }}
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold mb-3"
                    style={{ background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`, color: '#fff' }}
                  >
                    {num}
                  </div>
                  <p className="text-[12px] font-semibold mb-1" style={{ color: C.text }}>{label}</p>
                  <p className="text-[10px] leading-relaxed whitespace-pre-line" style={{ color: C.muted }}>{sub}</p>
                </div>
                {i < COURSE_STEPS.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-1/2 -right-2 z-10 w-4 h-4 rounded-full border-2 flex items-center justify-center"
                    style={{ background: C.cream, borderColor: C.teal, transform: 'translateY(-50%)' }}
                  >
                    <ArrowRight className="h-2 w-2" style={{ color: C.teal }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ECOSYSTEM + QUOTE ─────────────────────────────────────────────────── */}
      <section
        className="py-10"
        style={{ background: C.beige, borderTop: `1px solid ${C.border}` }}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Ecosystem diagram */}
          <div>
            <p
              className="text-[10px] uppercase tracking-[0.18em] font-bold mb-2"
              style={{ color: C.muted }}
            >
              The CTS Ecosystem
            </p>
            <div
              className="rounded-xl p-6"
              style={{ background: C.darkBrown }}
            >
              <div className="relative" style={{ height: '220px' }}>
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 220" style={{ opacity: 0.3 }}>
                  {/* Lines from OI HQ to CTS */}
                  <line x1="200" y1="30" x2="200" y2="90" stroke={C.gold} strokeWidth="1" strokeDasharray="5 3" />
                  {/* Lines from CTS to others */}
                  <line x1="200" y1="130" x2="60" y2="175" stroke={C.turquoise} strokeWidth="1" strokeDasharray="5 3" />
                  <line x1="200" y1="110" x2="340" y2="60" stroke={C.turquoise} strokeWidth="1" strokeDasharray="5 3" />
                  <line x1="200" y1="130" x2="340" y2="175" stroke={C.turquoise} strokeWidth="1" strokeDasharray="5 3" />
                </svg>

                {/* OI HQ */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center">
                  <div
                    className="px-3 py-1.5 rounded-lg text-center"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
                  >
                    <p className="text-[9px] font-bold text-white whitespace-nowrap">OPERATIONAL INTELLIGENCE™</p>
                    <p className="text-[9px] font-bold text-white">HEADQUARTERS</p>
                  </div>
                </div>

                {/* CTS Institute — center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className="w-20 h-20 rounded-full flex flex-col items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})` }}
                  >
                    <p className="text-[9px] font-bold text-white text-center leading-tight">CTS<br />INSTITUTE™</p>
                  </div>
                </div>

                {/* FI Platform */}
                <div className="absolute bottom-4 left-4">
                  <div
                    className="px-2 py-1.5 rounded-lg text-center"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
                  >
                    <p className="text-[8px] font-bold" style={{ color: C.turquoise }}>FACILITY</p>
                    <p className="text-[8px] font-bold" style={{ color: C.turquoise }}>INTELLIGENCE™</p>
                    <p className="text-[8px] font-bold" style={{ color: C.turquoise }}>PLATFORM</p>
                  </div>
                </div>

                {/* Assessments */}
                <div className="absolute top-4 right-4">
                  <div
                    className="px-2 py-1.5 rounded-lg text-center"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
                  >
                    <p className="text-[8px] font-bold text-white">ASSESSMENTS</p>
                    <p className="text-[8px] font-bold text-white">& CONSULTING</p>
                  </div>
                </div>

                {/* Standards Library */}
                <div className="absolute bottom-4 right-4">
                  <div
                    className="px-2 py-1.5 rounded-lg text-center"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
                  >
                    <p className="text-[8px] font-bold text-white">CTS STANDARDS™</p>
                    <p className="text-[8px] font-bold text-white">LIBRARY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div>
            <div
              className="text-6xl font-bold mb-4 leading-none"
              style={{ color: C.gold, fontFamily: 'Georgia, serif' }}
            >
              "
            </div>
            <p
              className="text-xl md:text-2xl font-bold mb-6 leading-snug"
              style={{ fontFamily: 'Playfair Display, serif', color: C.darkBrown }}
            >
              We don't just share information. We build Operational Intelligence that lasts generations.
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white"
                style={{ background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})` }}
              >
                R
              </div>
              <div>
                <p className="text-[13px] font-bold" style={{ color: C.text }}>Razzell Valentine</p>
                <p className="text-[11px]" style={{ color: C.muted }}>Founder & CEO, Nexum Suum Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────────── */}
      <section
        className="py-14 text-center"
        style={{ background: `linear-gradient(135deg, ${C.darkBrown} 0%, #2C1F0E 100%)` }}
      >
        <div className="max-w-2xl mx-auto px-6">
          <p
            className="text-[10px] uppercase tracking-[0.22em] font-bold mb-3"
            style={{ color: C.gold }}
          >
            Join the Movement
          </p>
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Elevate how your organization<br />makes operational decisions.
          </h2>
          <p className="text-[13px] mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
            3,284 professionals across 57 countries apply CTS™ methodology daily. Join them free.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/institute/signup"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-[13px] font-bold transition-all hover:opacity-90"
              style={{ background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`, color: '#fff' }}
            >
              Join Free — No credit card <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/institute/downloads"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-[13px] font-semibold transition-all"
              style={{ border: '1px solid rgba(201,169,110,0.35)', color: 'rgba(255,255,255,0.65)' }}
            >
              Download Executive Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
