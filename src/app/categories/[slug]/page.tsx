import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CategoryFilter from "@/components/CategoryFilter";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticlesByCategory, getCategories } from "@/lib/articles";

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
        eyebrow={`Category Index: ${slug.toUpperCase()}`}
        title={category.name.toUpperCase() + "."}
        description={`Filtered bulletins tagged under ${category.name}. Precision protocols and diagnostic walk-throughs from the deployment archive.`}
      />
      <main className="py-20 bg-white border-b border-blueprint-grid">
        <div className="max-w-7xl mx-auto px-8">
          <CategoryFilter categories={categories} active={slug} />
          {articles.length === 0 ? (
            <div className="border border-dashed border-blueprint-grid p-16 text-center">
              <span className="mono-label text-primary mb-4 block">
                EMPTY CHANNEL
              </span>
              <h3 className="text-3xl font-headline font-bold tracking-tight mb-4">
                No bulletins in this category.
              </h3>
              <Link
                href="/articles"
                className="mono-label text-primary font-bold inline-flex items-center gap-2"
              >
                BROWSE ALL PROTOCOLS{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_right_alt
                </span>
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
    </>
  );
}
