const ARTICLES = [
  {
    slug: 'nuclear-plant-operational-intelligence-failure',
    category: 'Operational Risk',
    title: "The Nuclear Plant Didn't Fail Because Equipment Failed. It Failed Because Operational Intelligence Failed.",
    subtitle: 'Why industrial failures are rarely caused by equipment alone — and what Operational Intelligence™ reveals about the systems that produce them',
    summary: 'Operational failures in complex facilities rarely stem from equipment alone. They emerge from breakdowns in documentation, inspection governance, decision accountability, knowledge continuity, and leadership visibility — the invisible operational systems that precede every physical failure.',
    featuredQuote: 'Equipment rarely fails without warning. Organizations simply fail to recognize the operational signals in time.',
    author: 'Nexum Suum™',
    readingTime: 18,
    publishedAt: 'July 3, 2026',
    tags: ['Operational Intelligence', 'Decision Defensibility', 'Knowledge Continuity', 'Inspection Governance', 'Operational Risk'],
    url: 'https://nexumsuum.com/insights/nuclear-plant-operational-intelligence-failure',
  },
  {
    slug: 'the-inventory-problem-isnt-inventory',
    category: 'Facility Intelligence',
    title: "The Inventory Problem Isn't Inventory",
    subtitle: 'Why most operational problems trace back to record integrity, not systems',
    summary: "Most organizations think they have inventory, asset, or compliance problems. What they often have is a record integrity problem. Technology can't fix it first — discipline can.",
    featuredQuote: "Technology doesn't solve this first. Discipline does.",
    author: 'Nexum Suum™',
    readingTime: 2,
    publishedAt: 'June 9, 2026',
    tags: ['Record Integrity', 'Asset Management', 'Facility Intelligence', 'Decision Defensibility'],
    url: 'https://nexumsuum.com/insights/the-inventory-problem-isnt-inventory',
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  'Operational Risk': '#e07b54',
  'Facility Intelligence': '#c9a96e',
};

export default function PublicationsPage() {
  return (
    <div className="w-full">
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(201,169,110,0.07) 0%, transparent 70%)' }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#c9a96e] font-bold mb-4">Research &amp; Publications</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Publications</h1>
          <p className="text-base text-white/55 leading-relaxed max-w-2xl mx-auto">Research papers, executive briefs, and industry analysis advancing the body of knowledge around Operational Intelligence™ and defensible decision-making.</p>
          <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5 text-xs text-white/35">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
              {ARTICLES.length} Published
            </div>
            <div className="text-white/15">·</div>
            <p className="text-xs text-white/35">Free to read — no account required</p>
          </div>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          {ARTICLES.map((article) => {
            const accentColor = CATEGORY_COLORS[article.category] ?? '#c9a96e';
            return (
              <a key={article.slug} href={article.url} target="_blank" rel="noopener noreferrer" className="block group bg-white/[0.025] hover:bg-white/[0.04] border border-white/[0.07] hover:border-white/[0.12] rounded-2xl p-7 transition-all duration-200">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-lg border" style={{ color: accentColor, borderColor: `${accentColor}30`, backgroundColor: `${accentColor}10` }}>{article.category}</span>
                  <span className="text-[11px] text-white/30">{article.publishedAt}</span>
                  <span className="text-white/15">·</span>
                  <span className="text-[11px] text-white/30">{article.readingTime} min read</span>
                </div>
                <h2 className="text-lg font-bold text-white/90 leading-snug mb-2 group-hover:text-white transition-colors">{article.title}</h2>
                {article.subtitle && <p className="text-sm text-white/45 mb-4 leading-relaxed">{article.subtitle}</p>}
                <blockquote className="border-l-2 pl-4 mb-4 italic text-sm leading-relaxed" style={{ borderColor: accentColor, color: `${accentColor}cc` }}>"{article.featuredQuote}"</blockquote>
                <p className="text-sm text-white/50 leading-relaxed mb-5">{article.summary}</p>
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex flex-wrap gap-1.5">
                    {article.tags.slice(0, 4).map(tag => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded border text-white/35 border-white/10 bg-white/[0.03]">{tag}</span>
                    ))}
                  </div>
                  <span className="text-xs font-semibold flex items-center gap-1 shrink-0 group-hover:gap-2 transition-all" style={{ color: accentColor }}>
                    Read on nexumsuum.com
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
                <p className="text-[10px] text-white/25 mt-4">By {article.author}</p>
              </a>
            );
          })}
        </div>
      </section>

      <section className="py-16 px-4 bg-[#020509] border-t border-white/[0.06]">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-widest text-[#c9a96e] font-bold mb-3">Stay Current</p>
          <h3 className="text-xl font-bold text-white mb-3">New research published regularly</h3>
          <p className="text-sm text-white/45 mb-6 leading-relaxed">Members are notified when new articles, white papers, and technical briefs are published to the library.</p>
          <a href="/institute/membership" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-black transition-all" style={{ backgroundColor: '#c9a96e' }}>
            Become a Member
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </section>
    </div>
  );
}
