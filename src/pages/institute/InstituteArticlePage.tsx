import { useParams, Link } from 'react-router-dom';
import { ARTICLES } from '@/data/articles';

const CATEGORY_COLORS: Record<string, string> = {
  'Operational Risk': '#e07b54',
  'Facility Intelligence': '#c9a96e',
};

export default function InstituteArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <p className="text-white/40 text-sm mb-4">Article not found</p>
        <Link to="/institute/publications" className="text-[#c9a96e] text-sm underline underline-offset-4">← Back to Publications</Link>
      </div>
    );
  }

  const accent = CATEGORY_COLORS[article.category] ?? '#c9a96e';

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-16">
      {/* Back link */}
      <Link to="/institute/publications" className="inline-flex items-center gap-1.5 text-xs text-white/35 hover:text-white/60 transition-colors mb-10">
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
        Back to Publications
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-5 flex-wrap">
          <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-lg border" style={{ color: accent, borderColor: `${accent}30`, backgroundColor: `${accent}10` }}>
            {article.category}
          </span>
          <span className="text-[11px] text-white/30">{article.publishedAt}</span>
          <span className="text-white/15">·</span>
          <span className="text-[11px] text-white/30">{article.readingTime} min read</span>
          <span className="text-white/15">·</span>
          <span className="text-[11px] text-white/30">{article.author}</span>
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">{article.title}</h1>
        <p className="text-base text-white/50 leading-relaxed mb-6">{article.subtitle}</p>

        <blockquote className="border-l-2 pl-5 py-1 italic text-base leading-relaxed" style={{ borderColor: accent, color: `${accent}cc` }}>
          "{article.featuredQuote}"
        </blockquote>
      </div>

      {/* Article body */}
      <div className="space-y-6">
        {article.sections.map((section, i) => {
          switch (section.type) {
            case 'heading':
              return (
                <h2 key={i} className="text-xl md:text-2xl font-bold text-white pt-6 pb-1 border-b border-white/[0.07]">
                  {section.content}
                </h2>
              );

            case 'subheading':
              return (
                <h3 key={i} className="text-base font-semibold pt-2" style={{ color: accent }}>
                  {section.content}
                </h3>
              );

            case 'paragraph':
              return (
                <p key={i} className="text-sm text-white/65 leading-[1.9]">
                  {section.content}
                </p>
              );

            case 'quote':
              return (
                <blockquote key={i} className="border-l-2 pl-5 my-6 italic text-base leading-relaxed" style={{ borderColor: accent, color: `${accent}cc` }}>
                  "{section.content}"
                </blockquote>
              );

            case 'callout':
              return (
                <div key={i} className="rounded-2xl border p-6 my-6" style={{ borderColor: `${accent}25`, backgroundColor: `${accent}08` }}>
                  {section.label && (
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: accent }}>{section.label}</p>
                  )}
                  <div className="text-sm text-white/60 leading-[1.9] whitespace-pre-line">{section.content}</div>
                </div>
              );

            case 'framework':
              return (
                <div key={i} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 my-6">
                  {section.label && (
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4">{section.label}</p>
                  )}
                  <div className="text-sm text-white/60 leading-[1.9] whitespace-pre-line font-mono">{section.content}</div>
                </div>
              );

            case 'list':
              return (
                <ul key={i} className="space-y-3 pl-1">
                  {section.items?.map((item, j) => (
                    <li key={j} className="flex gap-3 text-sm text-white/60 leading-[1.8]">
                      <span className="mt-2 shrink-0 w-1 h-1 rounded-full" style={{ backgroundColor: accent }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );

            case 'checklist':
              return (
                <div key={i} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 my-4">
                  {section.label && (
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: accent }}>{section.label}</p>
                  )}
                  <ul className="space-y-3">
                    {section.items?.map((item, j) => (
                      <li key={j} className="flex gap-3 text-sm text-white/60 leading-[1.8]">
                        <span className="mt-0.5 shrink-0 w-4 h-4 rounded border border-white/20 flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );

            case 'table':
              return (
                <div key={i} className="overflow-x-auto my-6">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-white/10">
                        {section.headers?.map((h, j) => (
                          <th key={j} className="text-left py-3 px-4 font-semibold text-white/50 uppercase tracking-wider text-[10px] whitespace-nowrap">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.rows?.map((row, j) => (
                        <tr key={j} className="border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors">
                          {row.map((cell, k) => (
                            <td key={k} className="py-3 px-4 text-white/50 leading-relaxed align-top">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );

            case 'divider':
              return <hr key={i} className="border-white/[0.07] my-4" />;

            default:
              return null;
          }
        })}
      </div>

      {/* Tags */}
      <div className="mt-12 pt-8 border-t border-white/[0.07]">
        <p className="text-[10px] uppercase tracking-widest text-white/25 mb-3">Topics</p>
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span key={tag} className="text-[10px] px-2.5 py-1 rounded-lg border text-white/35 border-white/10 bg-white/[0.03]">{tag}</span>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-12 rounded-2xl border p-8 text-center" style={{ borderColor: `${accent}25`, backgroundColor: `${accent}08` }}>
        <p className="text-[10px] uppercase tracking-widest font-bold mb-2" style={{ color: accent }}>CTS Institute™</p>
        <h3 className="text-lg font-bold text-white mb-3">Continue the education</h3>
        <p className="text-sm text-white/45 mb-6 leading-relaxed">Access the full CTS Institute™ library, certification courses, and professional community.</p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link to="/institute/publications" className="text-sm text-white/50 hover:text-white transition-colors">← All Publications</Link>
          <Link to="/institute/membership" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-black transition-all" style={{ backgroundColor: accent }}>
            Become a Member
          </Link>
        </div>
      </div>
    </div>
  );
}
