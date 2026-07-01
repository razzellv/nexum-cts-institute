import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Shield, BookOpen, TrendingUp, Users, Award, ChevronRight } from 'lucide-react';

const C = { cream:'#FAF9F1', beige:'#F3F0EA', darkBrown:'#4C3D21', brown:'#6E5E34', gold:'#D4AF57', teal:'#00C2A8', tealDark:'#005677', muted:'#7A6A55', border:'#E2D8CC' };

const PRINCIPLES = [
  { num: '01', title: 'Evidence-Based', desc: 'Every decision is grounded in documented evidence — data, observations, assessments, and professional analysis.' },
  { num: '02', title: 'Systematically Gathered', desc: 'Intelligence is collected through a defined process, not ad hoc observation. Repeatable. Auditable. Defensible.' },
  { num: '03', title: 'Continuously Documented', desc: 'Decisions and the intelligence behind them are captured in real time — building an institutional record over time.' },
  { num: '04', title: 'Professionally Defensible', desc: 'Every recommendation can be defended under scrutiny — to leadership, auditors, boards, or regulators.' },
  { num: '05', title: 'Continuously Improving', desc: 'Operational intelligence feeds back into itself. Each decision improves the quality of the next.' },
  { num: '06', title: 'Institutionally Retained', desc: 'Intelligence is organizational property — not trapped in individual minds. It survives personnel changes.' },
];

const APPLICATIONS = [
  { icon: <Shield className="h-5 w-5" />, title: 'Decision Defensibility™', desc: 'Making every recommendation traceable, evidence-based, and professionally accountable.' },
  { icon: <BookOpen className="h-5 w-5" />, title: 'Knowledge Continuity™', desc: 'Preserving institutional knowledge across personnel changes and organizational growth.' },
  { icon: <TrendingUp className="h-5 w-5" />, title: 'Operational Friction™', desc: 'Identifying and eliminating the hidden forces that slow organizational performance.' },
  { icon: <Users className="h-5 w-5" />, title: 'Operational Trust™', desc: 'Building leadership and stakeholder confidence through consistent, documented performance.' },
  { icon: <Award className="h-5 w-5" />, title: 'Lower Cost of Ownership', desc: 'Reducing total lifecycle costs through intelligence-driven capital and maintenance decisions.' },
  { icon: <Lightbulb className="h-5 w-5" />, title: 'Facility Intelligence™', desc: 'Applying OI to built environment management, asset data, and capital planning.' },
];

export default function InstituteOIPage() {
  return (
    <div style={{ background: C.cream, color: C.darkBrown }}>
      <section className="py-20 border-b" style={{ borderColor: C.border }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-4" style={{ color: C.teal }}>The Core Discipline</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Operational<br /><span style={{ color: C.teal }}>Intelligence™</span>
          </h1>
          <p className="text-xl leading-relaxed mb-6" style={{ color: C.brown, fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
            The systematic discipline of transforming operational data and institutional knowledge into documented, defensible, and continuously improving decisions.
          </p>
          <p className="text-base leading-relaxed mb-8" style={{ color: C.muted }}>
            Operational Intelligence™ is not a software product or a reporting dashboard. It is a professional discipline — a structured, repeatable approach to how organizations gather evidence, make decisions, document reasoning, and build institutional knowledge that survives beyond any individual.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/institute/courses" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[13px] font-bold text-white transition-all hover:opacity-90" style={{ background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})` }}>
              Start Learning <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/institute/bok" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[13px] font-bold border transition-all hover:bg-black/[0.04]" style={{ borderColor: C.border, color: C.darkBrown }}>
              Explore the BOK
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 border-b" style={{ background: C.beige, borderColor: C.border }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-3" style={{ color: C.teal }}>Core Principles</p>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>What Makes Intelligence Operational</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRINCIPLES.map(p => (
              <div key={p.num} className="p-6 rounded-xl border" style={{ background: C.cream, borderColor: C.border }}>
                <p className="text-[32px] font-bold mb-3 leading-none" style={{ fontFamily: 'Playfair Display, serif', color: `${C.teal}40` }}>{p.num}</p>
                <h3 className="font-bold mb-2" style={{ color: C.darkBrown }}>{p.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: C.muted }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-b" style={{ borderColor: C.border }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-3" style={{ color: C.teal }}>Applications</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>How Operational Intelligence™ Is Applied</h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: C.muted }}>OI manifests as a set of formal disciplines, each with its own body of knowledge, standards, and certification pathway.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {APPLICATIONS.map(a => (
              <div key={a.title} className="flex flex-col gap-3 p-6 rounded-xl border" style={{ background: C.beige, borderColor: C.border }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${C.teal}15`, color: C.teal }}>{a.icon}</div>
                <h3 className="font-bold" style={{ color: C.darkBrown }}>{a.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: C.muted }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-b" style={{ background: C.beige, borderColor: C.border }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-3" style={{ color: C.teal }}>Where It Applies</p>
              <h2 className="text-2xl font-bold mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>Applicable Across Every Industry</h2>
              <p className="text-base leading-relaxed" style={{ color: C.muted }}>
                Operational Intelligence™ applies wherever complex decisions must be made, documented, and defended — in healthcare facilities, government agencies, manufacturing plants, university campuses, commercial real estate, utilities, and enterprise operations of all kinds.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { q: 'Is this a software platform?', a: 'No. Operational Intelligence™ is a discipline — a professional practice. Software tools may support it, but OI itself is a methodology and a body of knowledge.' },
                { q: 'How is it different from BI / analytics?', a: 'Business intelligence describes the past. Operational Intelligence™ governs how decisions are made, documented, and defended — and builds institutional knowledge over time.' },
                { q: 'How do I get started?', a: 'Join the Institute free as an Explorer, begin with the Operational Intelligence Foundations™ course, and explore the CTS™ methodology.' },
              ].map(faq => (
                <div key={faq.q} className="p-5 rounded-xl border" style={{ background: C.cream, borderColor: C.border }}>
                  <p className="font-bold text-[14px] mb-1.5" style={{ color: C.darkBrown }}>{faq.q}</p>
                  <p className="text-[13px] leading-relaxed" style={{ color: C.muted }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: C.darkBrown }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { label: 'Learn the discipline', href: '/institute/courses', cta: 'Start Courses' },
              { label: 'Read the CTS™ methodology', href: '/institute/cts', cta: 'CTS™ Center' },
              { label: 'Get certified', href: '/institute/certifications', cta: 'Certifications' },
            ].map(item => (
              <Link key={item.label} to={item.href} className="group flex flex-col gap-2 p-6 rounded-xl border text-center transition-all hover:bg-white/10" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
                <p className="text-[12px] opacity-50 text-white">{item.label}</p>
                <p className="font-bold text-white flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                  {item.cta} <ChevronRight className="h-4 w-4" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
