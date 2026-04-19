import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import PageHeader from "@/components/PageHeader";
import CategoryFilter from "@/components/CategoryFilter";
import ArticleCard from "@/components/ArticleCard";
import StickyCallBar from "@/components/StickyCallBar";
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
        eyebrow="Resources"
        title="Practical advice from Calgary's trusted plumbers."
        description="Field-tested tips, seasonal maintenance guides, and plain-language explainers from the FlameTech team."
      />
      <main className="bg-cream-50 text-ink-900 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <CategoryFilter categories={categories} />
          {errored || articles.length === 0 ? <EmptyState /> : (
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

function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-line-light bg-white p-16 text-center">
      <span className="eyebrow justify-center mb-4 mx-auto">
        No articles yet
      </span>
      <h3 className="text-2xl font-extrabold tracking-tight mb-3 mt-3">
        Database not seeded.
      </h3>
      <p className="text-ink-500 max-w-xl mx-auto mb-6">
        Hit{" "}
        <Link href="/api/seed" className="text-emergency-deep font-bold">
          /api/seed
        </Link>{" "}
        to populate the archive with sample articles.
      </p>
    </div>
  );
}
