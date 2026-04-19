import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllArticles } from "@/lib/articles";
import Icon from "@/components/Icon";

export const dynamic = "force-dynamic";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let article;
  try {
    article = await getArticleBySlug(slug);
  } catch {
    notFound();
  }
  if (!article) notFound();

  let related: Awaited<ReturnType<typeof getAllArticles>> = [];
  try {
    const all = await getAllArticles();
    related = all.filter((a) => a.slug !== article!.slug).slice(0, 3);
  } catch {
    related = [];
  }

  return (
    <>
      <Nav />
      <section className="relative bg-ink-900 text-cream-50 py-24 border-b border-line-dark overflow-hidden">
        <div className="absolute inset-0 dotgrid opacity-40 pointer-events-none"></div>
        <div className="hidden md:block absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-emergency/15 blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 md:px-10 w-full relative">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Link
              href={`/categories/${article.category_slug}`}
              className="rounded-full bg-emergency/15 text-emergency px-4 py-1.5 text-xs font-bold uppercase tracking-wider hover:bg-emergency hover:text-ink-900 transition-colors"
            >
              {article.category}
            </Link>
            <span className="text-xs font-semibold text-cream-50/60 uppercase tracking-wider">
              {article.read_time} min read
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6">
            {article.title}
          </h1>
          <p className="text-lg text-cream-50/70 max-w-3xl leading-relaxed mb-10">
            {article.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-line-dark">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emergency/20 flex items-center justify-center font-bold text-emergency text-sm">
                {initials(article.author)}
              </div>
              <div>
                <p className="font-bold text-sm">{article.author}</p>
                <p className="text-xs text-cream-50/60">
                  {new Date(article.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div className="h-8 w-px bg-line-dark hidden md:block" />
            <div className="flex items-center gap-2">
              <Icon name="share" className="text-emergency text-base" />
              <span className="text-sm font-semibold">
                {article.share_count.toLocaleString()} shares
              </span>
            </div>
          </div>
        </div>
      </section>

      {article.featured_image && (
        <div className="bg-ink-900">
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
              <img
                src={article.featured_image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}

      <main className="bg-cream-50 text-ink-900 py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <article
            className="prose-article"
            dangerouslySetInnerHTML={{ __html: article.body }}
          />
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .prose-article p { font-size: 1.0625rem; line-height: 1.85; color: #334155; margin-bottom: 1.5rem; }
              .prose-article h2 { font-weight: 800; letter-spacing: -0.02em; font-size: 1.875rem; margin: 2.75rem 0 1.25rem; color: #0B1220; }
              .prose-article h3 { font-weight: 700; letter-spacing: -0.01em; font-size: 1.375rem; margin: 2.25rem 0 1rem; color: #0B1220; }
              .prose-article ul { margin: 1rem 0 1.5rem; padding-left: 1.25rem; list-style: disc; color: #334155; }
              .prose-article ol { margin: 1rem 0 1.5rem; padding-left: 1.5rem; list-style: decimal; color: #334155; }
              .prose-article li { margin-bottom: 0.5rem; line-height: 1.75; }
              .prose-article blockquote { border-left: 3px solid #FB923C; padding: 0.5rem 0 0.5rem 1.5rem; margin: 1.75rem 0; color: #0B1220; font-weight: 500; }
              .prose-article strong { color: #0B1220; font-weight: 700; }
              .prose-article code { background: #F1ECE3; padding: 0.1rem 0.35rem; font-size: 0.85em; border-radius: 6px; }
              .prose-article a { color: #167f86; text-decoration: underline; text-underline-offset: 3px; text-decoration-color: rgba(22, 127, 134, 0.4); }
              .prose-article a:hover { text-decoration-color: #167f86; }
              .prose-article img { border-radius: 0.75rem; margin: 2rem auto; display: block; max-width: 100%; height: auto; }
              .prose-article figure { margin: 2rem 0; }
              .prose-article figure img { margin: 0 auto; }
              .prose-article figcaption { text-align: center; font-size: 0.85rem; color: #64748b; margin-top: 0.5rem; }
              .prose-article table { border-collapse: collapse; width: 100%; margin: 1.75rem 0; font-size: 0.95rem; }
              .prose-article th, .prose-article td { border: 1px solid #E5E0D4; padding: 0.625rem 0.875rem; text-align: left; }
              .prose-article th { background: #F1ECE3; font-weight: 700; color: #0B1220; }
            `,
          }}
        />
      </main>

      {related.length > 0 && (
        <section className="bg-cream-100 text-ink-900 py-20 border-t border-line-light">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex items-end justify-between gap-8 mb-12">
              <div>
                <span className="eyebrow mb-4">Keep reading</span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-4">
                  Related articles
                </h2>
              </div>
              <Link
                href="/articles"
                className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-emergency-deep"
              >
                All articles
                <Icon name="arrow_right_alt" className="text-base" />
              </Link>
            </div>
            <div className="grid grid-cols-12 gap-6">
              {related.map((a) => (
                <Link
                  key={a.id}
                  href={`/articles/${a.slug}`}
                  className="group col-span-12 md:col-span-4 rounded-2xl bg-white border border-line-light p-7 hover:border-emergency transition-colors"
                >
                  <span className="rounded-full bg-emergency/10 text-emergency-deep px-3 py-1 text-xs font-bold uppercase tracking-wider inline-block mb-5">
                    {a.category}
                  </span>
                  <h3 className="text-lg font-extrabold tracking-tight group-hover:text-emergency-deep transition-colors">
                    {a.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <StickyCallBar />
    </>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
