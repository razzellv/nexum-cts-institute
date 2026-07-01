import { Link } from 'react-router-dom'
import Button from '@/components/InstituteUI'

export default function AboutPage() {
  return (
    <div className="w-full">
      <section className="relative py-32 px-4 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(201,169,110,0.07) 0%, transparent 70%)',
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#c9a96e] font-bold mb-4">
            About
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-[#2C1F0E] mb-6">
            Operational Intelligence Institute™
          </h1>
          <p className="text-lg text-[#4A3828] mb-6 leading-relaxed">
            Operational Intelligence Institute™ is the professional home for Operational Intelligence™ — a Nexum Suum Inc. initiative dedicated to helping professionals, organizations, and facility leaders make better operational decisions.
          </p>
          <p className="text-base text-[#4A3828] leading-relaxed mb-10 max-w-2xl mx-auto">
            We develop and publish the CTS™ governing standards, support a community of operational intelligence practitioners, and advance the body of knowledge around defensible, evidence-based decision-making in complex operational environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/institute/signup">
              <Button variant="primary" size="lg">Join the Institute</Button>
            </Link>
            <Link to="/institute/standards">
              <Button variant="outline" size="lg">View Standards</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#020509] border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#c9a96e] font-bold text-center mb-8">Our Mission</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Raise the Standard',
                desc: 'Develop and maintain professional standards for Operational Intelligence™ that any practitioner can apply, regardless of domain or organization size.',
              },
              {
                title: 'Build Community',
                desc: 'Foster a practitioner-led community where real operational challenges are discussed openly, and institutional knowledge is shared responsibly.',
              },
              {
                title: 'Advance the Discipline',
                desc: 'Publish research, develop certification, and continuously improve the CTS™ methodology based on practitioner input and real-world outcomes.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/[0.025] border border-white/[0.07] rounded-xl p-6"
              >
                <p className="text-[#2C1F0E] font-bold mb-2">{item.title}</p>
                <p className="text-[#4A3828] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#c9a96e] font-bold mb-4">Contact</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#2C1F0E] mb-4">Get in Touch</h2>
          <p className="text-[#4A3828] text-sm mb-6 leading-relaxed">
            For inquiries about membership, standards licensing, partnerships, or media, contact the Operational Intelligence Institute™ team.
          </p>
          <a
            href="mailto:institute@nexumsuum.com"
            className="text-[#00FFE1] font-medium hover:underline"
          >
            institute@nexumsuum.com
          </a>
        </div>
      </section>
    </div>
  )
}
