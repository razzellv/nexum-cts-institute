import { useParams, Link } from 'react-router-dom';
import { Award, Download, Share2, CheckCircle } from 'lucide-react';
import { useInstituteAuth } from '@/context/InstituteAuthContext';

export default function InstituteCertificatePage() {
  const { type } = useParams<{ type?: string }>();
  const { profile } = useInstituteAuth();

  const certType = type ?? 'practitioner';
  const certConfig = {
    foundation: {
      title: 'CTS™ Foundation Certificate',
      subtitle: 'Courses 1 & 2 — CTS™ Foundations & Assessment Methodology',
      color: '#00FFE1',
      description: 'This certifies completion of the CTS™ Foundation curriculum, establishing proficiency in CTS™ methodology principles and assessment criteria.',
    },
    professional: {
      title: 'CTS™ Professional Certificate',
      subtitle: 'Courses 1–5 — Full Methodology Track',
      color: '#60a5fa',
      description: 'This certifies completion of the CTS™ Professional curriculum, establishing proficiency in methodology, lifecycle intelligence, operational phases, and energy intelligence.',
    },
    practitioner: {
      title: 'CTS™ Certified Practitioner™',
      subtitle: 'All 7 Courses + Formal OI™ HQ Examination',
      color: '#c9a96e',
      description: 'This certifies that the holder has successfully completed the full CTS™ methodology curriculum and passed the formal CTS™ Practitioner Certification Exam, evaluated by a CTS™ Certified Instructor via OI™ HQ.',
    },
  }[certType] ?? {
    title: 'CTS™ Certificate',
    subtitle: '',
    color: '#00FFE1',
    description: '',
  };

  const holderName = profile?.display_name ?? 'Certificate Holder';
  const issuedDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-8">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2" style={{ color: certConfig.color }}>
            Operational Intelligence Institute™
          </p>
          <h1 className="text-2xl font-bold text-[#2C1F0E]">Your Certificate</h1>
        </div>

        {/* Certificate card */}
        <div
          className="relative rounded-2xl border p-10 mb-8 text-center overflow-hidden"
          style={{ borderColor: `${certConfig.color}25`, background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${certConfig.color}08, transparent 60%)` }}
        >
          {/* Decorative corner marks */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 rounded-tl" style={{ borderColor: `${certConfig.color}40` }} />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 rounded-tr" style={{ borderColor: `${certConfig.color}40` }} />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 rounded-bl" style={{ borderColor: `${certConfig.color}40` }} />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 rounded-br" style={{ borderColor: `${certConfig.color}40` }} />

          {/* Seal */}
          <div
            className="w-20 h-20 rounded-full border-2 flex items-center justify-center mx-auto mb-6"
            style={{ borderColor: `${certConfig.color}40`, background: `${certConfig.color}08` }}
          >
            <Award size={36} style={{ color: certConfig.color }} />
          </div>

          <p className="text-xs uppercase tracking-[0.25em] text-[#6E5E34] mb-2">
            Operational Intelligence Institute™ — Nexum Suum Incorporated
          </p>
          <p className="text-sm text-[#4A3828] mb-6">
            This is to certify that
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#2C1F0E] mb-6">
            {holderName}
          </h2>

          <p className="text-sm text-[#4A3828] mb-3">has successfully earned</p>

          <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: certConfig.color }}>
            {certConfig.title}
          </h3>
          <p className="text-sm text-[#6E5E34] mb-6">{certConfig.subtitle}</p>

          <p className="text-sm text-[#4A3828] max-w-lg mx-auto leading-relaxed mb-8">
            {certConfig.description}
          </p>

          <div className="flex items-center justify-center gap-8 pt-6 border-t" style={{ borderColor: `${certConfig.color}15` }}>
            <div className="text-center">
              <div className="w-24 h-px bg-white/20 mx-auto mb-2" />
              <p className="text-xs text-[#6E5E34]">Date Issued</p>
              <p className="text-sm text-[#4A3828] mt-0.5">{issuedDate}</p>
            </div>
            <div
              className="w-12 h-12 rounded-full border flex items-center justify-center"
              style={{ borderColor: `${certConfig.color}30`, background: `${certConfig.color}08` }}
            >
              <CheckCircle size={20} style={{ color: certConfig.color }} />
            </div>
            <div className="text-center">
              <div className="w-24 h-px bg-white/20 mx-auto mb-2" />
              <p className="text-xs text-[#6E5E34]">Issued By</p>
              <p className="text-sm text-[#4A3828] mt-0.5">Operational Intelligence Institute™</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/[0.05] border border-white/10 text-[#2C1F0E] text-sm font-medium hover:bg-white/[0.08] transition-colors"
          >
            <Download size={15} /> Download / Print
          </button>
          <button
            onClick={() => navigator.clipboard?.writeText(window.location.href)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/[0.05] border border-white/10 text-[#2C1F0E] text-sm font-medium hover:bg-white/[0.08] transition-colors"
          >
            <Share2 size={15} /> Copy Share Link
          </button>
        </div>

        {/* Next step */}
        {certType !== 'practitioner' && (
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5 text-center">
            <p className="text-[#4A3828] text-sm mb-3">
              Continue the CTS™ certification track to earn the full Practitioner credential.
            </p>
            <Link
              to="/institute/courses"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#c9a96e] text-black font-bold text-sm"
            >
              <Award size={14} /> Continue to Next Course
            </Link>
          </div>
        )}

        {certType === 'practitioner' && (
          <div className="bg-[#c9a96e]/[0.04] border border-[#c9a96e]/15 rounded-xl p-5 text-center">
            <p className="text-[#c9a96e] font-semibold text-sm mb-1">CTS™ Certified Practitioner™</p>
            <p className="text-[#6E5E34] text-sm">
              Present this credential to your organization, clients, or employer as formal evidence of CTS™ methodology proficiency — evaluated and issued by Operational Intelligence Institute™, Nexum Suum Incorporated.
            </p>
          </div>
        )}

        <div className="text-center mt-6">
          <Link to="/institute/dashboard" className="text-[#6E5E34] text-sm hover:text-[#00C2A8] transition-colors">
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
