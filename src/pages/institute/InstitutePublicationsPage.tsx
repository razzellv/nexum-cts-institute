export default function PublicationsPage() {
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
            Research & Publications
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Publications
          </h1>
          <p className="text-lg text-white/60 mb-10 leading-relaxed">
            Research papers, white papers, technical briefs, and industry reports advancing the body of knowledge around Operational Intelligence™ and defensible decision-making.
          </p>
          <div className="inline-flex items-center gap-3 bg-[#c9a96e]/10 border border-[#c9a96e]/20 rounded-xl px-6 py-4">
            <span className="text-[#c9a96e] text-2xl">✦</span>
            <div className="text-left">
              <p className="text-[#c9a96e] font-bold text-sm">Coming Soon</p>
              <p className="text-white/50 text-xs mt-0.5">
                The Publications library is being prepared. Join as a member to be notified at launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#020509] border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {['Research Papers', 'White Papers', 'Technical Briefs'].map((type) => (
            <div
              key={type}
              className="bg-white/[0.025] border border-white/[0.07] rounded-xl p-6 text-center"
            >
              <p className="text-white font-bold mb-2">{type}</p>
              <p className="text-white/40 text-sm">Planned for release in the Publications library.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
