import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Shield, Lightbulb, Building2, TrendingUp, Layers, ChevronRight } from 'lucide-react';

const C = { cream:'#FAF9F1', beige:'#F3F0EA', darkBrown:'#4C3D21', brown:'#6E5E34', gold:'#D4AF57', teal:'#00C2A8', tealDark:'#005677', muted:'#4A3828', border:'#E2D8CC' };

const BOKS = [
  {
    icon: <Lightbulb className="h-7 w-7" />,
    title: 'Operational Intelligence™',
    subtitle: 'OI-BOK-001',
    status: 'Active',
    desc: 'The foundational body of knowledge defining Operational Intelligence™ — its principles, components, lifecycle, and application across industries. The master framework from which all other BOKs derive.',
    href: '/institute/operational-intelligence',
    color: C.teal,
    topics: ['OI Lifecycle', 'Decision Science', 'Intelligence Architecture', 'Maturity Models', 'Implementation Frameworks'],
  },
  {
    icon: <Layers className="h-7 w-7" />,
    title: 'CTS™ Methodology',
    subtitle: 'OI-BOK-002',
    status: 'Active',
    desc: 'The Comprehensive Thinking System™ — an eight-phase decision framework governing how operational intelligence is gathered, analyzed, documented, and applied to consequential decisions.',
    href: '/institute/cts',
    color: C.gold,
    topics: ['Eight-Phase Lifecycle', 'Assessment Methods', 'Documentation Standards', 'Evidence Requirements', 'Case Applications'],
  },
  {
    icon: <Shield className="h-7 w-7" />,
    title: 'Decision Defensibility™',
    subtitle: 'OI-BOK-003',
    status: 'Active',
    desc: 'The formal body of knowledge governing how organizations make recommendations that are traceable, evidence-based, and defensible under scrutiny — protecting both individuals and institutions.',
    href: '/institute/standards',
    color: C.brown,
    topics: ['Evidence Standards', 'Documentation Requirements', 'Audit Readiness', 'Professional Accountability', 'Risk Mitigation'],
  },
  {
    icon: <BookOpen className="h-7 w-7" />,
    title: 'Knowledge Continuity™',
    subtitle: 'OI-BOK-004',
    status: 'Active',
    desc: 'The discipline of preserving, structuring, and transferring institutional knowledge — ensuring that organizations retain expertise when personnel change, retire, or move on.',
    href: '/institute/standards',
    color: C.tealDark,
    topics: ['Knowledge Capture', 'Institutional Memory', 'Transfer Protocols', 'Continuity Planning', 'Succession Intelligence'],
  },
  {
    icon: <Building2 className="h-7 w-7" />,
    title: 'Facility Intelligence™',
    subtitle: 'OI-BOK-005',
    status: 'Planning',
    desc: 'The application of Operational Intelligence™ principles to built environment management — covering asset data, condition intelligence, capital planning, and operational decision support for facilities.',
    href: '/institute/standards',
    color: C.gold,
    topics: ['Asset Intelligence', 'Condition Assessment', 'Capital Decision Support', 'Deferred Maintenance', 'Lifecycle Costing'],
  },
  {
    icon: <TrendingUp className="h-7 w-7" />,
    title: 'Operational Friction™',
    subtitle: 'OI-BOK-006',
    status: 'Planning',
    desc: 'Research and frameworks for identifying, measuring, and eliminating the hidden forces — process gaps, communication failures, knowledge silos — that slow organizational performance.',
    href: '/institute/research',
    color: C.teal,
    topics: ['Friction Identification', 'Root Cause Analysis', 'Process Intelligence', 'Efficiency Frameworks', 'Improvement Science'],
  },
];

export default function InstituteBOKPage() {
  return (
    <div style={{ background: C.cream, color: C.darkBrown }}>
      <section className="py-20 border-b" style={{ borderColor: C.border }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-4" style={{ color: C.teal }}>Bodies of Knowledge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            Formal Disciplines of<br /><span style={{ color: C.teal }}>Operational Intelligence™</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: C.muted }}>
            The Institute maintains formal Bodies of Knowledge (BOK) across multiple disciplines. Each BOK has its own research base, published standards, educational content, and professional certification pathway.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-6">
            {BOKS.map(bok => (
              <div key={bok.title} className="rounded-2xl border p-8" style={{ background: C.beige, borderColor: C.border }}>
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${bok.color}15`, color: bok.color }}>{bok.icon}</div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: bok.color }}>{bok.subtitle}</span>
                          <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ background: bok.status === 'Active' ? `${C.teal}18` : `${C.gold}18`, color: bok.status === 'Active' ? C.teal : C.gold }}>{bok.status}</span>
                        </div>
                        <h2 className="text-xl font-bold" style={{ color: C.darkBrown }}>{bok.title}</h2>
                      </div>
                    </div>
                    <p className="text-[14px] leading-relaxed mb-5" style={{ color: C.muted }}>{bok.desc}</p>
                    <Link to={bok.href} className="inline-flex items-center gap-1.5 text-[13px] font-semibold" style={{ color: bok.color }}>
                      Explore {bok.title} <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest font-bold mb-3" style={{ color: C.muted }}>Core Topics</p>
                    <ul className="space-y-2">
                      {bok.topics.map(t => (
                        <li key={t} className="flex items-center gap-2 text-[13px]" style={{ color: C.darkBrown }}>
                          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: bok.color }} />{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t" style={{ background: C.darkBrown, borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4 text-[#2C1F0E]" style={{ fontFamily: 'Playfair Display, serif' }}>Contribute to a Body of Knowledge</h2>
          <p className="text-base opacity-60 text-[#2C1F0E] mb-8">Practitioners, researchers, and subject matter experts can contribute to BOK development through Institute committees, research submissions, and standards review processes.</p>
          <Link to="/institute/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-bold text-[#2C1F0E] transition-all hover:opacity-90" style={{ background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})` }}>
            Get Involved <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
