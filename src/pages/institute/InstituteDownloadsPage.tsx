import { useState } from 'react'
import { Download, FileText, X, ArrowRight } from 'lucide-react'
import { Button, Badge } from '@/components/InstituteUI'

const downloads = [
  {
    title: 'Operational Intelligence™ Executive Guide',
    description: 'A comprehensive executive-level overview of Operational Intelligence™ — what it is, why it matters, and how organizations benefit from implementing it as a formal discipline.',
    size: '2.4 MB',
    pages: '24 pages',
    audience: 'Executives, Senior Leadership',
  },
  {
    title: 'CTS™ Executive Overview',
    description: 'A high-level introduction to the Critical Thinking System™ — the governing methodology, its 6-stage framework, and how it applies to operational decision environments.',
    size: '1.8 MB',
    pages: '18 pages',
    audience: 'Executives, Managers, Consultants',
  },
  {
    title: 'Decision Defensibility™ One-Pager',
    description: 'A concise single-page reference document defining Decision Defensibility™ — what makes a recommendation defensible, key evidence requirements, and documentation checklist.',
    size: '0.4 MB',
    pages: '1 page',
    audience: 'All Practitioners',
  },
  {
    title: 'Operational Trust™ Overview',
    description: 'Defines Operational Trust™ as a measurable organizational asset — how it is built through consistent, documented decisions and how its absence creates organizational risk.',
    size: '1.2 MB',
    pages: '12 pages',
    audience: 'Senior Leadership, Operations Directors',
  },
  {
    title: 'Facility Intelligence™ Overview',
    description: 'Introduces Facility Intelligence™ as the application of OI principles to built environment management — covering asset data, condition intelligence, and capital decision support.',
    size: '1.6 MB',
    pages: '16 pages',
    audience: 'Facility Managers, Operations Teams',
  },
  {
    title: 'Lower Cost of Ownership Framework',
    description: 'Explains how the CTS™ methodology positions Lower Cost of Ownership as a traceable outcome of operational intelligence — not just a budget target.',
    size: '1.1 MB',
    pages: '10 pages',
    audience: 'CFOs, Facility Directors, Capital Planners',
  },
  {
    title: 'CTS™ Methodology Poster',
    description: 'A full-size reference poster of the 6-stage CTS™ Methodology — suitable for printing and display in operational team environments. Digital and printable format.',
    size: '3.2 MB',
    pages: '1 poster',
    audience: 'All Practitioners',
  },
  {
    title: 'Operational Intelligence™ Lifecycle Poster',
    description: 'A full-size reference poster of the 8-stage Operational Intelligence™ Lifecycle — digital and printable format for team reference.',
    size: '2.9 MB',
    pages: '1 poster',
    audience: 'All Practitioners',
  },
]

export default function DownloadsPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedDownload, setSelectedDownload] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleDownloadClick(title: string) {
    setSelectedDownload(title)
    setModalOpen(true)
    setSubmitted(false)
    setEmail('')
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <div className="bg-[#04080f]">
      {/* Hero */}
      <section className="py-20 border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#c9a96e] font-bold mb-4">Free Resources</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Downloads <span className="text-[#c9a96e]">&amp; Resources</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Free practitioner resources, executive guides, and reference documents from the Operational Intelligence Institute™. All downloads are free — provide your email to receive your copy and stay informed on new releases.
          </p>
        </div>
      </section>

      {/* Downloads Grid */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {downloads.map((dl) => (
              <div
                key={dl.title}
                className="bg-white/[0.025] border border-white/[0.06] rounded-xl p-6 hover:border-white/[0.12] transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#c9a96e]/10 border border-[#c9a96e]/20 flex items-center justify-center shrink-0">
                    <FileText size={18} className="text-[#c9a96e]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-sm leading-snug">{dl.title}</h3>
                  </div>
                </div>

                <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">{dl.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="gray">PDF</Badge>
                  <Badge variant="gray">{dl.pages}</Badge>
                  <Badge variant="gray">{dl.size}</Badge>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="text-white/30 text-xs">{dl.audience}</span>
                  <Button size="sm" onClick={() => handleDownloadClick(dl.title)}>
                    <Download size={12} /> Download Free
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email capture modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          />
          <div className="relative bg-[#04080f] border border-white/[0.12] rounded-2xl p-8 w-full max-w-md shadow-2xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>

            {!submitted ? (
              <>
                <div className="w-12 h-12 rounded-xl bg-[#c9a96e]/10 border border-[#c9a96e]/20 flex items-center justify-center mb-5">
                  <Download size={20} className="text-[#c9a96e]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Download Free</h3>
                <p className="text-white/50 text-sm mb-1">{selectedDownload}</p>
                <p className="text-white/30 text-xs mb-6">
                  Enter your email to receive your download link and stay informed on new Operational Intelligence Institute™ resources.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#00FFE1]/40"
                  />
                  <Button type="submit" className="w-full">
                    Send Me the Download <ArrowRight size={14} />
                  </Button>
                </form>
                <p className="text-white/25 text-xs mt-4 text-center">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="w-16 h-16 rounded-full bg-[#00FFE1]/10 border border-[#00FFE1]/20 flex items-center justify-center mx-auto mb-5">
                  <Download size={28} className="text-[#00FFE1]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Check Your Inbox</h3>
                <p className="text-white/50 text-sm mb-1">Your download link has been sent to</p>
                <p className="text-[#00FFE1] font-medium text-sm mb-4">{email}</p>
                <p className="text-white/30 text-xs">
                  Can't find it? Check your spam folder or contact us at institute@nexumsuum.com
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
