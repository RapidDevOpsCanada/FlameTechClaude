import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CategoryFilter from "@/components/CategoryFilter";
import ArticleCard from "@/components/ArticleCard";
import StickyCallBar from "@/components/StickyCallBar";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticlesByCategory, getCategories } from "@/lib/articles";
import Icon from "@/components/Icon";

export const dynamic = "force-dynamic";

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

  return (
    <>
      <Nav />
      <PageHeader
        eyebrow={`Category · ${category.name}`}
        title={`${category.name} — articles and guides.`}
        description={`Filtered articles tagged under ${category.name}. Practical guides and walk-throughs from the FlameTech team.`}
      />
      <main className="bg-cream-50 text-ink-900 py-20">
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
      <Footer />
      <StickyCallBar />
    </>
  );
}
