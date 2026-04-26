import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import PageHeader from "@/components/PageHeader";
import CategoryFilter from "@/components/CategoryFilter";
import ArticleCard from "@/components/ArticleCard";
import StickyCallBar from "@/components/StickyCallBar";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticlesByCategory, getCategories } from "@/lib/articles";
import Icon from "@/components/Icon";
import type { Metadata } from "next";

const SITE_URL = "https://flame-tech-claude-xd6r.vercel.app";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  let categories: Awaited<ReturnType<typeof getCategories>> = [];
  try {
    categories = await getCategories();
  } catch {
    return { title: "Category" };
  }
  const category = categories.find((c) => c.slug === slug);
  if (!category) return { title: "Category" };
  const url = `${SITE_URL}/categories/${slug}`;
  const title = `${category.name} Guides | FlameTech Plumbing & Heating`;
  const description = `Articles tagged ${category.name.toLowerCase()}. Practical plumbing and HVAC guides from FlameTech's Calgary technicians.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      images: [`${SITE_URL}/articles/opengraph-image`],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/articles/opengraph-image`],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let articles: Awaited<ReturnType<typeof getArticlesByCategory>> = [];
  let categories: Awaited<ReturnType<typeof getCategories>> = [];
  try {
    [articles, categories] = await Promise.all([
      getArticlesByCategory(slug),
      getCategories(),
    ]);
  } catch {
    notFound();
  }

  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const url = `${SITE_URL}/categories/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: `${category.name} — FlameTech Guides`,
        description: `Articles tagged ${category.name.toLowerCase()} from FlameTech Plumbing & Heating.`,
        breadcrumb: { "@id": `${url}#breadcrumb` },
        isPartOf: { "@id": `${SITE_URL}#website` },
        about: { "@type": "Thing", name: category.name },
        numberOfItems: articles.length,
      },
      {
        "@type": "ItemList",
        "@id": `${url}#itemlist`,
        itemListElement: articles.map((a, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}/articles/${a.slug}`,
          name: a.title,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Resources",
            item: `${SITE_URL}/articles`,
          },
          { "@type": "ListItem", position: 3, name: category.name, item: url },
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
        eyebrow={`Category · ${category.name}`}
        title={`${category.name} — articles and guides.`}
        description={`Filtered articles tagged under ${category.name}. Practical guides and walk-throughs from the FlameTech team.`}
      />
      <main className="bg-cream-50 text-ink-900 py-20 light-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <CategoryFilter categories={categories} active={slug} />
          {articles.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-line-light bg-white p-16 text-center">
              <span className="eyebrow justify-center mb-4 mx-auto">
                Empty
              </span>
              <h3 className="text-2xl font-extrabold tracking-tight mb-4 mt-3">
                No articles in this category yet.
              </h3>
              <Link
                href="/articles"
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
