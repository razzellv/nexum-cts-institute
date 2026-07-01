import { Link } from 'react-router-dom';
import {
  ArrowRight, BookOpen, FlaskConical, GraduationCap, Users, Award,
  Globe, FileText, Layers, ChevronRight, TrendingUp, Shield, Lightbulb,
  Building2, Microscope, BarChart3,
} from 'lucide-react';

const C = {
  cream:     '#FAF9F1',
  beige:     '#F3F0EA',
  tan:       '#E7DDD4',
  darkBrown: '#4C3D21',
  brown:     '#6E5E34',
  gold:      '#D4AF57',
  teal:      '#00C2A8',
  tealDark:  '#005677',
  text:      '#2C1F0E',
  muted:     '#7A6A55',
  border:    '#E2D8CC',
};

const PILLARS = [
  {
    icon: <Microscope className="h-6 w-6" />,
    title: 'Research',
    desc: 'Original industry research, surveys, and studies that establish the evidence base for Operational Intelligence™ as a formal discipline.',
    href: '/institute/research',
    color: C.teal,
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Standards',
    desc: 'Formal published standards defining how Operational Intelligence™ and CTS™ methodology are applied across industries and organizations.',
    href: '/institute/standards',
    color: C.gold,
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: 'Publications',
    desc: 'White papers, research papers, executive guides, case studies, and the Operational Intelligence Journal™.',
    href: '/institute/publications',
    color: C.brown,
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: 'Education',
    desc: 'Self-paced courses, professional certifications, and structured learning paths for every stage of your career.',
    href: '/institute/courses',
    color: C.tealDark,
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Certification',
    desc: 'Industry-recognized credentials validating expertise in Operational Intelligence™, CTS™, and related disciplines.',
    href: '/institute/certifications',
    color: C.gold,
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Community',
    desc: 'A global professional network of practitioners sharing knowledge through forums, roundtables, chapters, and events.',
    href: '/institute/forums',
    color: C.teal,
  },
];

const DISCIPLINES = [
  {
    label: 'Operational Intelligence™',
    desc: 'The core discipline — transforming operational data into defensible, documented decisions.',
    href: '/institute/operational-intelligence',
    icon: <Lightbulb className="h-5 w-5" />,
  },
  {
    label: 'CTS™ Methodology',
    desc: 'The Comprehensive Thinking System™ — a structured eight-phase decision framework.',
    href: '/institute/cts',
    icon: <Layers className="h-5 w-5" />,
  },
  {
    label: 'Decision Defensibility™',
    desc: 'Making every recommendation traceable, evidence-based, and professionally defensible.',
    href: '/institute/bok',
    icon: <Shield className="h-5 w-5" />,
  },
  {
    label: 'Knowledge Continuity™',
    desc: "Preserving institutional knowledge so organizations don't lose expertise when people move.",
    href: '/institute/bok',
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    label: 'Facility Intelligence™',
    desc: 'Applying OI principles to built environment management, asset data, and capital decisions.',
    href: '/institute/bok',
    icon: <Building2 className="h-5 w-5" />,
  },
  {
    label: 'Operational Friction™',
    desc: 'Identifying and eliminating the hidden forces that slow organizational performance.',
    href: '/institute/research',
    icon: <TrendingUp className="h-5 w-5" />,
  },
];

const SECTORS = [
  'Government', 'Healthcare', 'Manufacturing', 'Higher Education',
  'Commercial Real Estate', 'Infrastructure', 'Utilities', 'Enterprise Operations',
];

const STATS = [
  { value: '8', label: 'Formal Standards Published' },
  { value: '6', label: 'Core Disciplines' },
  { value: '57', label: 'Countries Represented' },
  { value: '3,284', label: 'Practitioners Worldwide' },
];

const CERT_PATHS = [
  { title: 'Operational Intelligence Foundations™', level: 'Foundation', color: C.teal },
  { title: 'CTS Practitioner™', level: 'Practitioner', color: C.gold },
  { title: 'CTS Professional™', level: 'Professional', color: C.brown },
  { title: 'Operational Intelligence Professional™', level: 'Advanced', color: C.tealDark },
  { title: 'Facility Intelligence Professional™', level: 'Specialist', color: C.gold },
  { title: 'Executive Operational Intelligence™', level: 'Executive', color: C.darkBrown },
];

const RECENT_PUBS = [
  { tag: 'White Paper', title: 'The Operational Intelligence Maturity Model', author: 'Research Division', href: '/institute/publications' },
  { tag: 'Research', title: 'Decision Defensibility in Government Facilities', author: 'Research Division', href: '/institute/research' },
  { tag: 'Standard', title: 'CTS-STD-001: OI Framework v1.0', author: 'Standards Committee', href: '/institute/standards' },
  { tag: 'Executive Guide', title: 'Lower Cost of Ownership Through Operational Intelligence™', author: 'Education Division', href: '/institute/publications' },
];

export default function InstituteHomePage() {
  return (
    <div style={{ background: C.cream, color: C.text }}>

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b" style={{ borderColor: C.border }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: `radial-gradient(${C.teal} 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06]" style={{ background: `radial-gradient(circle, ${C.gold}, transparent 70%)`, transform: 'translate(30%, -30%)' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.25em] font-bold mb-5" style={{ color: C.teal }}>
              Established 2026 · Nexum Suum™
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6" style={{ fontFamily: 'Playfair Display, serif', color: C.darkBrown }}>
              Operational<br />Intelligence<br /><span style={{ color: C.teal }}>Institute™</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-4 max-w-xl" style={{ color: C.brown, fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
              Advancing Operational Intelligence™ as a recognized professional discipline.
            </p>
            <p className="text-base leading-relaxed mb-10 max-w-2xl" style={{ color: C.muted }}>
              The professional home for research, standards, education, certification, and community dedicated to transforming how organizations make, document, and defend operational decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/institute/signup" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-[14px] font-bold transition-all hover:opacity-90 hover:shadow-lg" style={{ background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`, color: '#fff' }}>
                Join the Institute — Free <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/institute/about" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-[14px] font-semibold transition-all hover:bg-black/[0.05]" style={{ border: `1px solid ${C.border}`, color: C.darkBrown }}>
                About the Institute
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────────────── */}
      <section className="border-b" style={{ background: C.darkBrown, borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map(s => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif', color: C.gold }}>{s.value}</p>
                <p className="text-[12px] opacity-50 uppercase tracking-widest text-white">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ───────────────────────────────────────────────────────────── */}
      <section className="py-24 border-b" style={{ borderColor: C.border }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-4" style={{ color: C.teal }}>Our Mission</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif', color: C.darkBrown }}>
            A Professional Institute for a New Discipline
          </h2>
          <p className="text-lg leading-relaxed mb-8 max-w-3xl mx-auto" style={{ color: C.muted }}>
            Operational Intelligence™ is the systematic discipline of transforming operational data and institutional knowledge into documented, defensible, and continuously improving decisions. The Institute exists to advance this discipline through rigorous research, formal standards, professional education, and an engaged global community.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Research', 'Standards', 'Publications', 'Education', 'Certification', 'Community', 'Thought Leadership', 'Industry Engagement'].map(tag => (
              <span key={tag} className="px-4 py-1.5 rounded-full text-[12px] font-semibold border" style={{ borderColor: C.border, color: C.brown, background: C.beige }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Six Pillars ───────────────────────────────────────────────────────── */}
      <section className="py-24 border-b" style={{ background: C.beige, borderColor: C.border }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-3" style={{ color: C.teal }}>What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: C.darkBrown }}>Six Pillars of the Institute</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map(p => (
              <Link key={p.title} to={p.href} className="group block rounded-2xl p-7 border transition-all hover:shadow-md hover:-translate-y-0.5" style={{ background: C.cream, borderColor: C.border }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110" style={{ background: `${p.color}15`, color: p.color }}>
                  {p.icon}
                </div>
                <h3 className="text-[17px] font-bold mb-2" style={{ color: C.darkBrown }}>{p.title}</h3>
                <p className="text-[13px] leading-relaxed mb-4" style={{ color: C.muted }}>{p.desc}</p>
                <span className="text-[12px] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: p.color }}>
                  Explore <ChevronRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Disciplines ───────────────────────────────────────────────────────── */}
      <section className="py-24 border-b" style={{ borderColor: C.border }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-3" style={{ color: C.teal }}>Bodies of Knowledge</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ fontFamily: 'Playfair Display, serif', color: C.darkBrown }}>
                Formal Disciplines of<br />Operational Intelligence™
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: C.muted }}>
                The Institute maintains formal Bodies of Knowledge across multiple disciplines, each with its own research base, standards, publications, and certification pathway.
              </p>
              <Link to="/institute/bok" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[13px] font-bold transition-all hover:opacity-90" style={{ background: C.darkBrown, color: '#fff' }}>
                View All Bodies of Knowledge <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DISCIPLINES.map(d => (
                <Link key={d.label} to={d.href} className="group flex flex-col gap-2 p-5 rounded-xl border transition-all hover:shadow-sm" style={{ background: C.beige, borderColor: C.border }}>
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${C.teal}18`, color: C.teal }}>
                      {d.icon}
                    </div>
                    <span className="text-[13px] font-bold" style={{ color: C.darkBrown }}>{d.label}</span>
                  </div>
                  <p className="text-[12px] leading-relaxed" style={{ color: C.muted }}>{d.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications ────────────────────────────────────────────────────── */}
      <section className="py-24 border-b" style={{ background: C.beige, borderColor: C.border }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-3" style={{ color: C.teal }}>Professional Credentials</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: C.darkBrown }}>Certification Pathways</h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: C.muted }}>
              Industry-recognized credentials earned through coursework, examination, and continuing professional education.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {CERT_PATHS.map((c, i) => (
              <div key={c.title} className="flex items-center gap-4 p-5 rounded-xl border" style={{ background: C.cream, borderColor: C.border }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-[13px] font-bold shrink-0" style={{ background: c.color }}>{i + 1}</div>
                <div>
                  <p className="text-[13px] font-bold" style={{ color: C.darkBrown }}>{c.title}</p>
                  <p className="text-[11px] uppercase tracking-wider mt-0.5" style={{ color: C.muted }}>{c.level}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/institute/certifications" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[13px] font-bold transition-all hover:opacity-90" style={{ background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`, color: '#fff' }}>
              View Certification Paths <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Sectors ───────────────────────────────────────────────────────────── */}
      <section className="py-20 border-b" style={{ borderColor: C.border }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-3" style={{ color: C.teal }}>Sectors We Serve</p>
              <h2 className="text-3xl font-bold mb-5" style={{ fontFamily: 'Playfair Display, serif', color: C.darkBrown }}>
                Operational Intelligence™<br />Across Every Industry
              </h2>
              <p className="text-base leading-relaxed" style={{ color: C.muted }}>
                The discipline applies wherever people manage complex operations, make consequential decisions, and depend on institutional knowledge to deliver reliable outcomes.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {SECTORS.map(s => (
                <span key={s} className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold border" style={{ background: C.beige, borderColor: C.border, color: C.darkBrown }}>
                  <Globe className="h-3.5 w-3.5" style={{ color: C.teal }} />{s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Publications ──────────────────────────────────────────────────────── */}
      <section className="py-24 border-b" style={{ background: C.beige, borderColor: C.border }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-2" style={{ color: C.teal }}>Latest Releases</p>
              <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: C.darkBrown }}>Publications & Research</h2>
            </div>
            <Link to="/institute/publications" className="hidden sm:flex items-center gap-1.5 text-[13px] font-semibold hover:gap-2.5 transition-all" style={{ color: C.teal }}>
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {RECENT_PUBS.map(pub => (
              <Link key={pub.title} to={pub.href} className="group flex gap-5 p-6 rounded-xl border transition-all hover:shadow-md hover:-translate-y-0.5" style={{ background: C.cream, borderColor: C.border }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${C.gold}18`, border: `1px solid ${C.gold}30` }}>
                  <FileText className="h-5 w-5" style={{ color: C.gold }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase tracking-widest font-bold mb-1.5" style={{ color: C.teal }}>{pub.tag}</p>
                  <h3 className="text-[14px] font-bold leading-snug mb-1" style={{ color: C.darkBrown }}>{pub.title}</h3>
                  <p className="text-[12px]" style={{ color: C.muted }}>{pub.author}</p>
                </div>
                <ChevronRight className="h-4 w-4 shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: C.teal }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Research ──────────────────────────────────────────────────────────── */}
      <section className="py-24 border-b" style={{ borderColor: C.border }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1">
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-3" style={{ color: C.teal }}>Research Center</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: C.darkBrown }}>Building the Evidence Base</h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: C.muted }}>
                The Institute conducts original research establishing Operational Intelligence™ as a measurable, evidence-backed discipline across government, healthcare, manufacturing, and enterprise operations.
              </p>
              <Link to="/institute/research" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-bold border transition-all hover:bg-black/[0.04]" style={{ borderColor: C.border, color: C.darkBrown }}>
                Explore Research <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <BarChart3 className="h-5 w-5" />, label: 'Industry Surveys', desc: 'Annual practitioner surveys across all Institute sectors' },
                { icon: <Microscope className="h-5 w-5" />, label: 'Research Projects', desc: 'Active research into operational friction, decision science, and knowledge continuity' },
                { icon: <Building2 className="h-5 w-5" />, label: 'Government Studies', desc: 'Public sector operational intelligence studies and policy research' },
                { icon: <FlaskConical className="h-5 w-5" />, label: 'Future Research', desc: 'Open calls for research proposals and academic collaboration' },
              ].map(item => (
                <div key={item.label} className="flex gap-4 p-5 rounded-xl border" style={{ background: C.beige, borderColor: C.border }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${C.teal}15`, color: C.teal }}>{item.icon}</div>
                  <div>
                    <p className="text-[13px] font-bold mb-0.5" style={{ color: C.darkBrown }}>{item.label}</p>
                    <p className="text-[12px] leading-relaxed" style={{ color: C.muted }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Community ─────────────────────────────────────────────────────────── */}
      <section className="py-20 border-b" style={{ background: C.beige, borderColor: C.border }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-3" style={{ color: C.teal }}>Professional Community</p>
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: C.darkBrown }}>A Global Network of Practitioners</h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: C.muted }}>
              Connect with peers, participate in roundtables, join professional chapters, and engage in the communities shaping the future of Operational Intelligence™.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Discussion Forums', href: '/institute/forums', icon: <Users className="h-5 w-5" /> },
              { label: 'Roundtables', href: '/institute/roundtables', icon: <Globe className="h-5 w-5" /> },
              { label: 'Events & Webinars', href: '/institute/events', icon: <GraduationCap className="h-5 w-5" /> },
              { label: 'Professional Chapters', href: '/institute/chapters', icon: <Building2 className="h-5 w-5" /> },
            ].map(item => (
              <Link key={item.label} to={item.href} className="group flex flex-col items-center gap-3 p-6 rounded-xl border text-center transition-all hover:shadow-md hover:-translate-y-0.5" style={{ background: C.cream, borderColor: C.border }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${C.teal}15`, color: C.teal }}>{item.icon}</div>
                <span className="text-[13px] font-bold" style={{ color: C.darkBrown }}>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: C.darkBrown }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-4 opacity-60 text-white">Join the Institute</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            Become Part of the<br /><span style={{ color: C.gold }}>Professional Community</span>
          </h2>
          <p className="text-base leading-relaxed mb-10 opacity-60 text-white max-w-2xl mx-auto">
            Join thousands of professionals advancing Operational Intelligence™ through research, standards, education, and community. Membership starts free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/institute/signup" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-[14px] font-bold transition-all hover:opacity-90" style={{ background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`, color: '#fff' }}>
              Join Free — No Credit Card <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/institute/membership" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-[14px] font-semibold transition-all hover:bg-white/10" style={{ border: '1px solid rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.8)' }}>
              View Membership Options
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
