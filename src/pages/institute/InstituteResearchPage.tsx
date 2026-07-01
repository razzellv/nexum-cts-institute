import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, BarChart3, Building2, FlaskConical, Globe, FileText, Users } from 'lucide-react';

const C = { cream:'#FAF9F1', beige:'#F3F0EA', darkBrown:'#4C3D21', brown:'#6E5E34', gold:'#D4AF57', teal:'#00C2A8', tealDark:'#005677', muted:'#4A3828', border:'#E2D8CC' };

const TRACKS = [
  { icon: <BarChart3 className="h-6 w-6" />, title: 'Industry Surveys', desc: 'Annual practitioner surveys measuring operational maturity, decision quality, and intelligence gaps across government, healthcare, manufacturing, and enterprise sectors.', status: 'Active' },
  { icon: <Microscope className="h-6 w-6" />, title: 'Operational Trends', desc: 'Longitudinal tracking of how organizational decisions are made, documented, and defended over time — and how OI implementation changes outcomes.', status: 'Active' },
  { icon: <Building2 className="h-6 w-6" />, title: 'Government Studies', desc: 'Public sector studies on operational intelligence adoption, decision defensibility standards, and institutional knowledge management in government facilities and agencies.', status: 'Planning' },
  { icon: <FlaskConical className="h-6 w-6" />, title: 'Healthcare Research', desc: 'Research into operational intelligence applications in clinical facilities management, healthcare infrastructure, and patient environment optimization.', status: 'Planning' },
  { icon: <Globe className="h-6 w-6" />, title: 'Infrastructure Research', desc: 'Studies on operational intelligence for critical infrastructure — utilities, transportation, energy systems, and resilience planning.', status: 'Future' },
  { icon: <Users className="h-6 w-6" />, title: 'Organizational Intelligence™', desc: 'Research into how organizations build, sustain, and transfer institutional knowledge across personnel changes, mergers, and growth.', status: 'Active' },
  { icon: <FileText className="h-6 w-6" />, title: 'Decision Research', desc: 'Study of decision-making quality, defensibility standards, evidence requirements, and the cost of undocumented or undefended decisions.', status: 'Active' },
  { icon: <BarChart3 className="h-6 w-6" />, title: 'Higher Education Research', desc: 'Research focused on facility management, campus operations, and institutional intelligence at colleges, universities, and research institutions.', status: 'Future' },
];

const FOCUS_AREAS = [
  'Operational Friction™', 'Knowledge Continuity™', 'Decision Defensibility™',
  'Evidence Governance™', 'Operational Trust™', 'Institutional Memory',
  'Continuous Improvement™', 'Asset Intelligence', 'Capital Decision Quality',
  'Operational Maturity Models',
];

export default function InstituteResearchPage() {
  return (
    <div style={{ background: C.cream, color: C.darkBrown }}>
      <section className="py-20 border-b" style={{ borderColor: C.border }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-4" style={{ color: C.teal }}>Research Center</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            Original Research in<br /><span style={{ color: C.teal }}>Operational Intelligence™</span>
          </h1>
          <p className="text-lg leading-relaxed mb-8" style={{ color: C.muted }}>
            The Institute conducts and publishes original research establishing Operational Intelligence™ as a measurable, evidence-backed professional discipline. Our research informs standards, publications, and education.
          </p>
          <Link to="/institute/publications" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[13px] font-bold transition-all hover:opacity-90" style={{ background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`, color: '#fff' }}>
            View Published Research <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="py-20 border-b" style={{ background: C.beige, borderColor: C.border }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-3" style={{ color: C.teal }}>Research Tracks</p>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Active & Planned Research</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TRACKS.map(t => (
              <div key={t.title} className="flex gap-5 p-6 rounded-xl border" style={{ background: C.cream, borderColor: C.border }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${C.teal}15`, color: C.teal }}>{t.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-[15px] font-bold" style={{ color: C.darkBrown }}>{t.title}</h3>
                    <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full" style={{ background: t.status === 'Active' ? `${C.teal}18` : t.status === 'Planning' ? `${C.gold}18` : `${C.muted}15`, color: t.status === 'Active' ? C.teal : t.status === 'Planning' ? C.gold : C.muted }}>
                      {t.status}
                    </span>
                  </div>
                  <p className="text-[13px] leading-relaxed" style={{ color: C.muted }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-b" style={{ borderColor: C.border }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-3" style={{ color: C.teal }}>Focus Areas</p>
            <h2 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Research Focus Areas</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {FOCUS_AREAS.map(f => (
              <span key={f} className="px-4 py-2 rounded-full text-[13px] font-semibold border" style={{ borderColor: C.border, background: C.beige, color: C.brown }}>{f}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: C.darkBrown }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#2C1F0E]" style={{ fontFamily: 'Playfair Display, serif' }}>Research Collaboration</h2>
          <p className="text-base opacity-60 text-[#2C1F0E] mb-8">The Institute welcomes research partnerships with universities, government agencies, and professional organizations advancing the study of operational intelligence.</p>
          <Link to="/institute/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-bold text-[#2C1F0E] transition-all hover:opacity-90" style={{ background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})` }}>
            Propose Research Collaboration <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
