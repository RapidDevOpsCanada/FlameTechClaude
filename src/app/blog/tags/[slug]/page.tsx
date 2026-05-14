import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import PageHeader from "@/components/PageHeader";
import ArticleCard from "@/components/ArticleCard";
import StickyCallBar from "@/components/StickyCallBar";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticlesByTag } from "@/lib/articles";
import { tagFromSlug, getAllTags, tagSlug } from "@/lib/article-tags";
import Icon from "@/components/Icon";
import type { Metadata } from "next";

const SITE_URL = "https://flametechplumbing.ca";

export async function generateStaticParams() {
  return getAllTags().map((t) => ({ slug: tagSlug(t) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tag = tagFromSlug(slug);
  if (!tag) return { title: "Tag" };
  const url = `${SITE_URL}/blog/tags/${slug}`;
  const title = `${tag} — Articles | FlameTech Plumbing & Heating`;
  const description = `Plumbing and HVAC articles tagged ${tag.toLowerCase()} from FlameTech's Calgary technicians.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", url, title, description },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tag = tagFromSlug(slug);
  if (!tag) notFound();

  let articles: Awaited<ReturnType<typeof getArticlesByTag>> = [];
  try {
    articles = await getArticlesByTag(tag);
  } catch {
    notFound();
  }

  const url = `${SITE_URL}/blog/tags/${slug}`;
  const allTags = getAllTags();
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: `${tag} — FlameTech Articles`,
        description: `Articles tagged ${tag.toLowerCase()} from FlameTech Plumbing & Heating.`,
        breadcrumb: { "@id": `${url}#breadcrumb` },
        isPartOf: { "@id": `${SITE_URL}#website` },
        about: { "@type": "Thing", name: tag },
        numberOfItems: articles.length,
      },
      {
        "@type": "ItemList",
        "@id": `${url}#itemlist`,
        itemListElement: articles.map((a, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}/blog/${a.slug}`,
          name: a.title,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: tag, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Nav />
      <PageHeader
        eyebrow={`Tag · ${tag}`}
        title={`${tag} — articles and guides.`}
        description={`Every FlameTech article tagged ${tag.toLowerCase()}. Mix of troubleshooting, maintenance, and explainer guides.`}
      />
      <main className="bg-cream-50 text-ink-900 py-20 light-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Sibling tag chips so users can pivot to a related topic. */}
          {allTags.length > 1 && (
            <div className="mb-12 flex flex-wrap gap-2">
              {allTags.map((t) => {
                const s = tagSlug(t);
                const active = s === slug;
                return (
                  <Link
                    key={t}
                    href={`/blog/tags/${s}`}
                    className={`rounded-full px-4 py-2 text-[13px] font-bold uppercase tracking-wider border transition-colors ${
                      active
                        ? "bg-ink-900 text-cream-50 border-ink-900"
                        : "bg-white text-ink-700 border-line-light hover:border-emergency hover:text-emergency-deep"
                    }`}
                  >
                    {t}
                  </Link>
                );
              })}
            </div>
          )}
          {articles.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-line-light bg-white p-16 text-center">
              <span className="eyebrow justify-center mb-4 mx-auto">Empty</span>
              <h3 className="text-2xl font-extrabold tracking-tight mb-4 mt-3">
                No articles tagged {tag} yet.
              </h3>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-emergency-deep font-bold"
              >
                Browse all articles
                <Icon name="arrow_right_alt" className="text-base" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-12 gap-6">
              {articles.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
          )}
        </div>
      </main>
      <FinalCTA />
      <Footer />
      <StickyCallBar />
    </>
  );
}
