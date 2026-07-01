import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Users, BookOpen, Building2 } from 'lucide-react';

const C = { cream:'#FAF9F1', beige:'#F3F0EA', darkBrown:'#4C3D21', brown:'#6E5E34', gold:'#D4AF57', teal:'#00C2A8', tealDark:'#005677', muted:'#7A6A55', border:'#E2D8CC' };

const BENEFITS = [
  { icon: <Users className="h-5 w-5" />, title: 'Local Networking', desc: 'Connect with OI practitioners in your region for in-person events, roundtables, and peer groups.' },
  { icon: <BookOpen className="h-5 w-5" />, title: 'Chapter Programming', desc: 'Host local educational events, workshops, and speaker series aligned with Institute standards.' },
  { icon: <Building2 className="h-5 w-5" />, title: 'Regional Research', desc: 'Contribute to regionally-focused research studies and practitioner surveys.' },
  { icon: <Globe className="h-5 w-5" />, title: 'Global Connection', desc: 'Chapters connect into the Institute\'s global network for shared resources and collaboration.' },
];

const CHAPTER_TYPES = [
  { title: 'Regional Chapters', desc: 'Geography-based chapters serving cities, states, or countries' },
  { title: 'Sector Chapters', desc: 'Industry-specific chapters for healthcare, government, manufacturing, and more' },
  { title: 'Academic Chapters', desc: 'University and research institution chapters for students and faculty' },
  { title: 'Corporate Chapters', desc: 'Enterprise chapters serving large organizations with multiple OI practitioners' },
];

export default function InstituteChaptersPage() {
  return (
    <div style={{ background: C.cream, color: C.darkBrown }}>
      <section className="py-20 border-b" style={{ borderColor: C.border }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-4" style={{ color: C.teal }}>Professional Chapters</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            A Global Chapter<br /><span style={{ color: C.teal }}>Network</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: C.muted }}>
            Professional Chapters bring Operational Intelligence™ practitioners together at the local and sector level — extending the Institute's mission into communities, industries, and regions worldwide.
          </p>
        </div>
      </section>

      <section className="py-20 border-b" style={{ background: C.beige, borderColor: C.border }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Chapter Benefits</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {BENEFITS.map(b => (
              <div key={b.title} className="flex gap-4 p-6 rounded-xl border" style={{ background: C.cream, borderColor: C.border }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${C.teal}15`, color: C.teal }}>{b.icon}</div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: C.darkBrown }}>{b.title}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: C.muted }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-b" style={{ borderColor: C.border }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Types of Chapters</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CHAPTER_TYPES.map(ct => (
              <div key={ct.title} className="p-6 rounded-xl border" style={{ background: C.beige, borderColor: C.border }}>
                <h3 className="font-bold mb-2" style={{ color: C.darkBrown }}>{ct.title}</h3>
                <p className="text-[13px]" style={{ color: C.muted }}>{ct.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: C.darkBrown }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Start or Join a Chapter</h2>
          <p className="text-base opacity-60 text-white mb-8">
            Professional Chapters are launching in 2026. Express your interest in founding a chapter in your region or sector, or to be notified when a chapter forms near you.
          </p>
          <Link to="/institute/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-bold text-white transition-all hover:opacity-90" style={{ background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})` }}>
            Express Chapter Interest <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
