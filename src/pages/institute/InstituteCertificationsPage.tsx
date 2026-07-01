import { Link } from 'react-router-dom';
import { ArrowRight, Award, BookOpen, CheckCircle, RefreshCw, Badge as BadgeIcon } from 'lucide-react';

const C = { cream:'#FAF9F1', beige:'#F3F0EA', darkBrown:'#4C3D21', brown:'#6E5E34', gold:'#D4AF57', teal:'#00C2A8', tealDark:'#005677', muted:'#4A3828', border:'#E2D8CC' };

const CERTIFICATIONS = [
  {
    id: 'oif',
    code: 'OIF™',
    title: 'Operational Intelligence Foundations™',
    level: 'Foundation',
    color: C.teal,
    desc: 'The entry-level credential for Operational Intelligence™. Validates foundational knowledge of OI principles, terminology, and application across operational environments.',
    requirements: ['Complete OI Foundations course', 'Pass 60-question exam (80% minimum)', 'No prerequisites'],
    renewalYears: 3,
    status: 'Available',
  },
  {
    id: 'ctsp',
    code: 'CTS-P™',
    title: 'CTS Practitioner™',
    level: 'Practitioner',
    color: C.gold,
    desc: 'Validates proficiency in applying the Comprehensive Thinking System™ methodology to real operational environments and decision scenarios.',
    requirements: ['Complete CTS Practitioner course series', 'Pass proctored exam (85% minimum)', 'OIF™ or equivalent experience required'],
    renewalYears: 3,
    status: 'Available',
  },
  {
    id: 'ctsprof',
    code: 'CTS-Pro™',
    title: 'CTS Professional™',
    level: 'Professional',
    color: C.brown,
    desc: 'Advanced CTS™ credential validating expert-level application, documentation leadership, and the ability to lead organizational OI implementation.',
    requirements: ['Complete all 7 CTS™ courses', 'Pass comprehensive exam (90% minimum)', 'CTS-P™ required', '2 years practice documentation'],
    renewalYears: 2,
    status: 'Coming 2027',
  },
  {
    id: 'oip',
    code: 'OI-Pro™',
    title: 'Operational Intelligence Professional™',
    level: 'Advanced',
    color: C.tealDark,
    desc: 'The advanced OI credential — for practitioners leading organizational intelligence programs, mentoring others, and contributing to the profession.',
    requirements: ['CTS-Pro™ or CTS-P™ + 3 years', 'Submission of documented case studies', 'Peer review and committee approval'],
    renewalYears: 2,
    status: 'Coming 2027',
  },
  {
    id: 'fip',
    code: 'FI-Pro™',
    title: 'Facility Intelligence Professional™',
    level: 'Specialist',
    color: C.gold,
    desc: 'Specialist credential for Facility Intelligence™ — validating expertise in applying OI to built environment management, asset intelligence, and capital decision support.',
    requirements: ['OIF™ or CTS-P™ required', 'Complete Facility Intelligence course', 'Pass specialist exam'],
    renewalYears: 3,
    status: 'Planning',
  },
  {
    id: 'eoi',
    code: 'EOI™',
    title: 'Executive Operational Intelligence™',
    level: 'Executive',
    color: C.darkBrown,
    desc: 'Executive-level credential for leaders implementing, sponsoring, or governing Operational Intelligence™ programs at the organizational or enterprise level.',
    requirements: ['Senior leadership role or 10+ years', 'Executive program completion', 'Strategic case study submission'],
    renewalYears: 3,
    status: 'Planning',
  },
];

const CERT_COMPONENTS = [
  { icon: <BookOpen className="h-5 w-5" />, label: 'Learning Path', desc: 'Structured courses and modules preparing you for the exam' },
  { icon: <CheckCircle className="h-5 w-5" />, label: 'Examination', desc: 'Proctored exam with defined minimum passing scores' },
  { icon: <BadgeIcon className="h-5 w-5" />, label: 'Digital Badge', desc: 'Shareable digital credential for professional profiles' },
  { icon: <Award className="h-5 w-5" />, label: 'Certificate', desc: 'Official Institute certificate of completion' },
  { icon: <RefreshCw className="h-5 w-5" />, label: 'Renewal', desc: 'Continuing education requirements to maintain credential' },
];

export default function InstituteCertificationsPage() {
  return (
    <div style={{ background: C.cream, color: C.darkBrown }}>
      <section className="py-20 border-b" style={{ borderColor: C.border }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-4" style={{ color: C.teal }}>Professional Credentials</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            Certification<br /><span style={{ color: C.teal }}>Pathways</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: C.muted }}>
            Institute certifications validate professional expertise in Operational Intelligence™, CTS™ methodology, and related disciplines. Earned through coursework, examination, and continuing professional education.
          </p>
        </div>
      </section>

      <section className="py-16 border-b" style={{ background: C.beige, borderColor: C.border }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Every Certification Includes</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {CERT_COMPONENTS.map(cc => (
              <div key={cc.label} className="flex flex-col items-center text-center gap-2 p-4 rounded-xl border" style={{ background: C.cream, borderColor: C.border }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${C.teal}15`, color: C.teal }}>{cc.icon}</div>
                <p className="text-[12px] font-bold" style={{ color: C.darkBrown }}>{cc.label}</p>
                <p className="text-[11px] leading-tight" style={{ color: C.muted }}>{cc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Available Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CERTIFICATIONS.map(cert => (
              <div key={cert.id} className="rounded-2xl border p-7" style={{ background: C.beige, borderColor: C.border }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: cert.color, color: '#fff' }}>
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: cert.color }}>{cert.code}</p>
                      <h3 className="text-[15px] font-bold leading-tight" style={{ color: C.darkBrown }}>{cert.title}</h3>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full whitespace-nowrap" style={{ background: cert.status === 'Available' ? `${C.teal}18` : cert.status === 'Coming 2027' ? `${C.gold}18` : `${C.muted}15`, color: cert.status === 'Available' ? C.teal : cert.status === 'Coming 2027' ? C.gold : C.muted }}>
                    {cert.status}
                  </span>
                </div>
                <p className="text-[13px] leading-relaxed mb-4" style={{ color: C.muted }}>{cert.desc}</p>
                <div className="mb-4">
                  <p className="text-[11px] uppercase tracking-widest font-bold mb-2" style={{ color: C.muted }}>Requirements</p>
                  <ul className="space-y-1">
                    {cert.requirements.map(r => (
                      <li key={r} className="flex items-start gap-2 text-[12px]" style={{ color: C.darkBrown }}>
                        <CheckCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" style={{ color: cert.color }} />{r}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-[11px]" style={{ color: C.muted }}>Renewal every {cert.renewalYears} years via continuing education</p>
                {cert.status === 'Available' && (
                  <Link to="/institute/courses" className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold" style={{ color: cert.color }}>
                    Begin preparation <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: C.darkBrown }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#2C1F0E]" style={{ fontFamily: 'Playfair Display, serif' }}>Start Your Certification Journey</h2>
          <p className="text-base opacity-60 text-[#2C1F0E] mb-8">Begin with the Operational Intelligence Foundations™ course — the starting point for all OI Institute credentials.</p>
          <Link to="/institute/courses" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-bold text-[#2C1F0E] transition-all hover:opacity-90" style={{ background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})` }}>
            View Courses <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
