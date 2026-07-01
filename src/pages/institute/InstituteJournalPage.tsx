import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowRight, BookOpen, Bell } from 'lucide-react';

const C = { cream:'#FAF9F1', beige:'#F3F0EA', darkBrown:'#4C3D21', brown:'#6E5E34', gold:'#D4AF57', teal:'#00C2A8', tealDark:'#005677', muted:'#4A3828', border:'#E2D8CC' };

const CATEGORIES = [
  'Industry News', 'Research Summaries', 'Government Updates', 'Infrastructure Developments',
  'Energy News', 'Facility Management', 'Operational Intelligence Insights', 'Decision Science',
  'Professional Interviews', 'Standards Updates',
];

const PLACEHOLDERS = [
  { category: 'Research', title: 'The Hidden Cost of Undocumented Decisions', date: 'Coming Q3 2026', desc: 'An analysis of how undocumented operational decisions create long-term organizational risk and erode institutional trust.' },
  { category: 'Industry', title: 'Operational Intelligence™ in Government Facilities', date: 'Coming Q3 2026', desc: 'How public sector facility managers are applying OI principles to meet accountability and transparency requirements.' },
  { category: 'Standards', title: 'CTS-STD-002: The OI Framework — What Practitioners Need to Know', date: 'Coming Q4 2026', desc: 'A practitioner guide to the second Institute standard — covering assessment, documentation, and certification requirements.' },
  { category: 'Interview', title: 'Building a Culture of Operational Intelligence™', date: 'Coming Q4 2026', desc: 'Leadership perspectives on embedding OI practices into organizational culture at scale.' },
];

export default function InstituteJournalPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ background: C.cream, color: C.darkBrown }}>
      <section className="py-20 border-b" style={{ borderColor: C.border }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-4" style={{ color: C.teal }}>News & Journal</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            Operational Intelligence<br /><span style={{ color: C.teal }}>Journal™</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: C.muted }}>
            Industry news, research summaries, government updates, and thought leadership from the Operational Intelligence Institute™. The authoritative voice of the OI profession.
          </p>
        </div>
      </section>

      <section className="py-16 border-b" style={{ background: C.beige, borderColor: C.border }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-2xl border p-10 text-center" style={{ background: C.cream, borderColor: C.border }}>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: `${C.gold}18`, border: `1px solid ${C.gold}30` }}>
              <BookOpen className="h-8 w-8" style={{ color: C.gold }} />
            </div>
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Journal Launching 2026</h2>
            <p className="text-base leading-relaxed mb-8 max-w-xl mx-auto" style={{ color: C.muted }}>
              The OI Journal™ is currently being developed. Subscribe to be notified when the first issue publishes — including original articles, research summaries, and professional interviews.
            </p>
            {!submitted ? (
              <form onSubmit={e => { e.preventDefault(); if (email) setSubmitted(true); }} className="flex gap-2 max-w-sm mx-auto">
                <input type="email" required placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm border focus:outline-none" style={{ background: C.beige, borderColor: C.border, color: C.darkBrown }} />
                <button type="submit" className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-bold text-[#2C1F0E] transition-all hover:opacity-90" style={{ background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})` }}>
                  <Bell className="h-4 w-4" /> Notify Me
                </button>
              </form>
            ) : (
              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[13px] font-medium" style={{ background: `${C.teal}15`, color: C.teal }}>
                <Bell className="h-4 w-4" /> You're subscribed — we'll notify you at launch.
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 border-b" style={{ borderColor: C.border }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>Upcoming Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PLACEHOLDERS.map(p => (
              <div key={p.title} className="p-6 rounded-xl border" style={{ background: C.beige, borderColor: C.border }}>
                <p className="text-[10px] uppercase tracking-widest font-bold mb-2" style={{ color: C.teal }}>{p.category}</p>
                <h3 className="text-[15px] font-bold mb-2" style={{ color: C.darkBrown }}>{p.title}</h3>
                <p className="text-[13px] leading-relaxed mb-3" style={{ color: C.muted }}>{p.desc}</p>
                <p className="text-[11px] font-semibold" style={{ color: C.gold }}>{p.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: C.beige, borderColor: C.border }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Journal Coverage</h2>
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map(c => (
              <span key={c} className="px-4 py-2 rounded-full text-[13px] font-medium border" style={{ borderColor: C.border, background: C.cream, color: C.brown }}>{c}</span>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/institute/publications" className="inline-flex items-center gap-2 text-[13px] font-semibold" style={{ color: C.teal }}>
              Browse Published Research & White Papers <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
