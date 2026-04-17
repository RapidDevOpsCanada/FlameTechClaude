import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllArticles } from "@/lib/articles";

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
    related = all
      .filter((a) => a.slug !== article!.slug)
      .slice(0, 3);
  } catch {
    related = [];
  }

  return (
    <>
      <Nav />
      <section className="relative border-b border-blueprint-grid py-24">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none grid-guide"></div>
        <div className="max-w-4xl mx-auto px-8 w-full relative">
          <div className="flex items-center gap-4 mb-8">
            <Link
              href={`/categories/${article.category_slug}`}
              className="mono-label text-primary bg-primary/5 px-2 py-1 hover:bg-primary hover:text-white transition-colors"
            >
              {article.category}
            </Link>
            <div className="h-[1px] flex-grow bg-blueprint-grid"></div>
            <span className="mono-label text-technical-label">
              {article.read_time} MIN READ
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-headline font-black tracking-tighter leading-none mb-8">
            {article.title}
          </h1>
          <p className="text-xl text-technical-label max-w-3xl font-normal leading-relaxed mb-10">
            {article.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-blueprint-grid">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/10 flex items-center justify-center font-technical font-bold text-primary">
                {initials(article.author)}
              </div>
              <div>
                <p className="font-bold font-headline uppercase text-xs">
                  {article.author}
                </p>
                <p className="mono-label text-technical-label">
                  {new Date(article.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div className="h-8 w-px bg-blueprint-grid hidden md:block" />
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-base">
                share
              </span>
              <span className="font-technical text-xs">
                {article.share_count.toLocaleString()} SHARES
              </span>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-white py-20 border-b border-blueprint-grid">
        <div className="max-w-3xl mx-auto px-8">
          <article
            className="prose-article"
            dangerouslySetInnerHTML={{ __html: article.body }}
          />
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .prose-article p { font-size: 1.0625rem; line-height: 1.85; color: #334155; margin-bottom: 1.5rem; }
              .prose-article h2 { font-family: var(--font-inter), Inter, sans-serif; font-weight: 800; letter-spacing: -0.02em; font-size: 1.875rem; margin: 2.75rem 0 1.25rem; color: #0F172A; }
              .prose-article h3 { font-family: var(--font-inter), Inter, sans-serif; font-weight: 700; letter-spacing: -0.01em; font-size: 1.375rem; margin: 2.25rem 0 1rem; color: #0F172A; }
              .prose-article ul { margin: 1rem 0 1.5rem; padding-left: 1.25rem; list-style: disc; color: #334155; }
              .prose-article li { margin-bottom: 0.5rem; line-height: 1.75; }
              .prose-article blockquote { border-left: 3px solid #0D9488; padding: 0.5rem 0 0.5rem 1.5rem; margin: 1.5rem 0; font-style: normal; color: #0F172A; font-weight: 500; }
              .prose-article strong { color: #0F172A; font-weight: 700; }
              .prose-article code { font-family: var(--font-jetbrains), JetBrains Mono, monospace; background: #F1F5F9; padding: 0.1rem 0.35rem; font-size: 0.85em; }
            `,
          }}
        />
      </main>

      {related.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-end justify-between gap-8 mb-12">
              <div>
                <span className="mono-label text-primary mb-4 block">
                  Related Transmissions
                </span>
                <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tighter">
                  CONTINUE READING
                </h2>
              </div>
              <Link
                href="/articles"
                className="mono-label text-primary font-bold hidden md:flex items-center gap-2"
              >
                ALL PROTOCOLS{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_right_alt
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-12 gap-6">
              {related.map((a) => (
                <Link
                  key={a.id}
                  href={`/articles/${a.slug}`}
                  className="group col-span-12 md:col-span-4 bg-white border border-blueprint-grid p-8 hover:border-primary transition-colors"
                >
                  <span className="mono-label text-primary bg-primary/5 px-2 py-1 inline-block mb-6">
                    {a.category}
                  </span>
                  <h3 className="text-xl font-headline font-bold tracking-tight group-hover:text-primary transition-colors">
                    {a.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
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
