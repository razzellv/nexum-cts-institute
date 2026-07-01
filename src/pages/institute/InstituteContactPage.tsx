import { useState } from 'react';
import { Mail, MessageSquare, BookOpen, Users } from 'lucide-react';

const C = { cream:'#FAF9F1', beige:'#F3F0EA', darkBrown:'#4C3D21', brown:'#6E5E34', gold:'#D4AF57', teal:'#00C2A8', tealDark:'#005677', muted:'#4A3828', border:'#E2D8CC' };

const CONTACTS = [
  { icon: <Mail className="h-5 w-5" />, label: 'General Inquiries', value: 'institute@nexumsuum.com', href: 'mailto:institute@nexumsuum.com' },
  { icon: <BookOpen className="h-5 w-5" />, label: 'Membership & Education', value: 'membership@nexumsuum.com', href: 'mailto:membership@nexumsuum.com' },
  { icon: <Users className="h-5 w-5" />, label: 'Partnerships & Chapters', value: 'partners@nexumsuum.com', href: 'mailto:partners@nexumsuum.com' },
  { icon: <MessageSquare className="h-5 w-5" />, label: 'Media & Press', value: 'press@nexumsuum.com', href: 'mailto:press@nexumsuum.com' },
];

const TOPICS = [
  'General inquiry', 'Membership question', 'Partnership proposal',
  'Research collaboration', 'Chapter inquiry', 'Media / press',
  'Standards feedback', 'Other',
];

export default function InstituteContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const formData = new URLSearchParams({
      'form-name': 'contact',
      name, email, topic, message,
    });
    await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: formData.toString() }).catch(() => {});
    setSubmitted(true);
  }

  return (
    <div style={{ background: C.cream, color: C.darkBrown }}>
      <section className="py-20 border-b" style={{ borderColor: C.border }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-4" style={{ color: C.teal }}>Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            Get in Touch with<br /><span style={{ color: C.teal }}>the Institute</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: C.muted }}>
            Whether you have a question about membership, a research collaboration to propose, or are interested in forming a Professional Chapter — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact form */}
            <div>
              <h2 className="text-xl font-bold mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>Send a Message</h2>
              {submitted ? (
                <div className="p-8 rounded-2xl border text-center" style={{ background: C.beige, borderColor: C.border }}>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: `${C.teal}18`, color: C.teal }}>
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: C.darkBrown }}>Message Received</h3>
                  <p className="text-[14px]" style={{ color: C.muted }}>Thank you for reaching out. We'll be in touch within 2 business days.</p>
                </div>
              ) : (
                <form name="contact" data-netlify="true" onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] uppercase tracking-widest font-bold block mb-1.5" style={{ color: C.muted }}>Name</label>
                      <input required name="name" value={name} onChange={e => setName(e.target.value)} placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border text-[14px] focus:outline-none focus:border-[#00C2A8]" style={{ background: C.beige, borderColor: C.border, color: C.darkBrown }} />
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-widest font-bold block mb-1.5" style={{ color: C.muted }}>Email</label>
                      <input required name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border text-[14px] focus:outline-none focus:border-[#00C2A8]" style={{ background: C.beige, borderColor: C.border, color: C.darkBrown }} />
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-widest font-bold block mb-1.5" style={{ color: C.muted }}>Topic</label>
                    <select name="topic" value={topic} onChange={e => setTopic(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border text-[14px] focus:outline-none focus:border-[#00C2A8] appearance-none" style={{ background: C.beige, borderColor: C.border, color: topic ? C.darkBrown : C.muted }}>
                      <option value="">Select a topic…</option>
                      {TOPICS.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-widest font-bold block mb-1.5" style={{ color: C.muted }}>Message</label>
                    <textarea required name="message" rows={5} value={message} onChange={e => setMessage(e.target.value)} placeholder="How can we help?"
                      className="w-full px-4 py-3 rounded-xl border text-[14px] focus:outline-none focus:border-[#00C2A8] resize-none" style={{ background: C.beige, borderColor: C.border, color: C.darkBrown }} />
                  </div>
                  <button type="submit" className="self-start px-7 py-3 rounded-xl text-[14px] font-bold text-[#2C1F0E] transition-all hover:opacity-90" style={{ background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})` }}>
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div>
              <h2 className="text-xl font-bold mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>Contact Information</h2>
              <div className="flex flex-col gap-4 mb-10">
                {CONTACTS.map(c => (
                  <a key={c.label} href={c.href} className="flex items-center gap-4 p-5 rounded-xl border transition-all hover:shadow-sm" style={{ background: C.beige, borderColor: C.border }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${C.teal}15`, color: C.teal }}>{c.icon}</div>
                    <div>
                      <p className="text-[11px] uppercase tracking-widest font-bold mb-0.5" style={{ color: C.muted }}>{c.label}</p>
                      <p className="text-[14px] font-semibold" style={{ color: C.teal }}>{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>
              <div className="p-6 rounded-xl border" style={{ background: C.beige, borderColor: C.border }}>
                <h3 className="font-bold mb-2" style={{ color: C.darkBrown }}>Response Times</h3>
                <ul className="space-y-2 text-[13px]" style={{ color: C.muted }}>
                  <li>General inquiries: 2–3 business days</li>
                  <li>Membership questions: 1–2 business days</li>
                  <li>Partnership proposals: 3–5 business days</li>
                  <li>Media inquiries: 1 business day</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
