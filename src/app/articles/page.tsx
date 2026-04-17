import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CategoryFilter from "@/components/CategoryFilter";
import ArticleCard from "@/components/ArticleCard";
import { getAllArticles, getCategories } from "@/lib/articles";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function ArticlesPage() {
  let articles: Awaited<ReturnType<typeof getAllArticles>> = [];
  let categories: Awaited<ReturnType<typeof getCategories>> = [];
  let errored = false;

  try {
    [articles, categories] = await Promise.all([
      getAllArticles(),
      getCategories(),
    ]);
  } catch {
    errored = true;
  }

  return (
    <>
      <Nav />
      <PageHeader
        eyebrow="Knowledge Base: BLUEPRINT"
        title="TECHNICAL BULLETINS."
        description="Field-tested protocols, diagnostic case studies, and engineering commentary from the FlameTech deployment unit."
      />
      <main className="py-20 bg-white border-b border-blueprint-grid">
        <div className="max-w-7xl mx-auto px-8">
          <CategoryFilter categories={categories} />
          {errored || articles.length === 0 ? (
            <EmptyState />
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

function EmptyState() {
  return (
    <div className="border border-dashed border-blueprint-grid p-16 text-center">
      <span className="mono-label text-primary mb-4 block">
        NO DATA IN PIPELINE
      </span>
      <h3 className="text-3xl font-headline font-bold tracking-tight mb-4">
        Database not seeded.
      </h3>
      <p className="text-technical-label max-w-xl mx-auto mb-8">
        Hit{" "}
        <Link href="/api/seed" className="text-primary font-technical">
          /api/seed
        </Link>{" "}
        to populate the bulletin archive with sample deployment documents.
      </p>
    </div>
  );
}
