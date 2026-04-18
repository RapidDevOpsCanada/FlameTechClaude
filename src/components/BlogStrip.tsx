import Link from "next/link";
import Reveal from "@/components/Reveal";
import { getAllArticles } from "@/lib/articles";

export default async function BlogStrip() {
  let articles: Awaited<ReturnType<typeof getAllArticles>> = [];
  try {
    const all = await getAllArticles();
    articles = all.slice(0, 3);
  } catch {
    return null;
  }
  if (articles.length === 0) return null;

  return (
    <section className="bg-cream-100 text-ink-900 py-24 border-t border-line-light">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="eyebrow-light mb-4">From Our Blog</span>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-[-0.025em] mt-4 max-w-xl leading-[1.02]">
                Practical advice for Calgary homeowners.
              </h2>
            </div>
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 rounded-full border border-ink-900 text-ink-900 font-semibold px-5 py-2.5 text-sm hover:bg-ink-900 hover:text-cream-50 transition-colors self-start"
            >
              All articles
              <span className="material-symbols-outlined text-base">
                arrow_right_alt
              </span>
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-12 gap-6">
          {articles.map((a, i) => (
            <Reveal
              key={a.id}
              delay={i * 100}
              className="col-span-12 md:col-span-4"
            >
              <Link
                href={`/articles/${a.slug}`}
                className="group block rounded-2xl bg-white border border-line-light p-7 h-full lift"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="rounded-full bg-primary/15 text-primary-deep px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    {a.category}
                  </span>
                  <span className="text-xs text-ink-500 font-semibold">
                    {a.read_time} min
                  </span>
                </div>
                <h3 className="font-display text-xl font-extrabold tracking-tight mb-3 group-hover:text-emergency-deep transition-colors leading-snug">
                  {a.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed mb-6">
                  {a.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emergency-deep">
                  Read article
                  <span className="material-symbols-outlined text-base">
                    arrow_right_alt
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
