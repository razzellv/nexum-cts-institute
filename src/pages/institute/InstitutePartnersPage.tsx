import { Link } from 'react-router-dom';
import { ArrowRight, Globe, BookOpen, Users, Award } from 'lucide-react';

const C = { cream:'#FAF9F1', beige:'#F3F0EA', darkBrown:'#4C3D21', brown:'#6E5E34', gold:'#D4AF57', teal:'#00C2A8', tealDark:'#005677', muted:'#4A3828', border:'#E2D8CC' };

const PARTNERSHIP_TYPES = [
  { icon: <BookOpen className="h-5 w-5" />, title: 'Academic Partners', desc: 'Universities and research institutions collaborating on research, co-authoring publications, and offering joint credentials.' },
  { icon: <Globe className="h-5 w-5" />, title: 'Professional Associations', desc: 'Allied professional organizations with complementary missions — co-developing standards, sharing research, and cross-credentialing.' },
  { icon: <Users className="h-5 w-5" />, title: 'Government Partners', desc: 'Public sector agencies and regulatory bodies engaged in operational intelligence policy, standards adoption, and government research.' },
  { icon: <Award className="h-5 w-5" />, title: 'Industry Partners', desc: 'Technology providers, consultancies, and industry organizations integrating OI standards and certifications into their platforms and practice.' },
];

export default function InstitutePartnersPage() {
  return (
    <div style={{ background: C.cream, color: C.darkBrown }}>
      <section className="py-20 border-b" style={{ borderColor: C.border }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-4" style={{ color: C.teal }}>Partner Organizations</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            Strategic<br /><span style={{ color: C.teal }}>Alliances & Partners</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: C.muted }}>
            The Operational Intelligence Institute™ builds strategic partnerships with academic institutions, professional associations, government agencies, and industry organizations to advance the discipline of Operational Intelligence™ globally.
          </p>
        </div>
      </section>

      <section className="py-20 border-b" style={{ background: C.beige, borderColor: C.border }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Partnership Categories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PARTNERSHIP_TYPES.map(pt => (
              <div key={pt.title} className="flex gap-4 p-6 rounded-xl border" style={{ background: C.cream, borderColor: C.border }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${C.gold}18`, color: C.gold }}>{pt.icon}</div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: C.darkBrown }}>{pt.title}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: C.muted }}>{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-b" style={{ borderColor: C.border }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="rounded-2xl border p-12" style={{ background: C.beige, borderColor: C.border }}>
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Partner Network Forming</h2>
            <p className="text-base leading-relaxed mb-8 max-w-xl mx-auto" style={{ color: C.muted }}>
              The Institute's partner network is being established in 2026. We are actively seeking aligned organizations in academia, government, professional associations, and industry to build the foundation for Operational Intelligence™ as a globally recognized discipline.
            </p>
            <Link to="/institute/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-bold text-[#2C1F0E] transition-all hover:opacity-90" style={{ background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})` }}>
              Inquire About Partnership <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
