import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import PageHeader from "@/components/PageHeader";
import CategoryFilter from "@/components/CategoryFilter";
import ArticleCard from "@/components/ArticleCard";
import StickyCallBar from "@/components/StickyCallBar";
import { getAllArticles, getCategories } from "@/lib/articles";
import Icon from "@/components/Icon";
import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL = "https://flametechplumbing.ca";
const PAGE_SIZE = 9;

export const dynamic = "force-dynamic";

function parsePage(raw: string | string[] | undefined): number {
  const v = Array.isArray(raw) ? raw[0] : raw;
  const n = Number.parseInt(v ?? "1", 10);
  return Number.isFinite(n) && n >= 1 ? n : 1;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}): Promise<Metadata> {
  const { page: rawPage } = await searchParams;
  const page = parsePage(rawPage);
  // Page 1 is the canonical /blog (no ?page=1 in URL); pages 2+ are
  // self-canonical so each is independently indexable.
  const canonical =
    page === 1 ? `${SITE_URL}/blog` : `${SITE_URL}/blog?page=${page}`;
  const titleSuffix = page === 1 ? "" : ` — Page ${page}`;
  return {
    title: `Blog & Guides${titleSuffix} | FlameTech Plumbing & Heating`,
    description:
      "Field-tested plumbing, heating, and HVAC guides from Calgary's FlameTech team. Maintenance tips, troubleshooting walk-throughs, and seasonal advice.",
    alternates: { canonical },
    // Don't index pages past page 1 if they end up empty; otherwise let
    // them in. The render path will notFound() on out-of-range pages.
    openGraph: {
      type: "website",
      url: canonical,
      title: `Blog & Guides${titleSuffix} | FlameTech Plumbing & Heating`,
      description:
        "Practical plumbing and HVAC guides from FlameTech's Calgary technicians.",
    },
    twitter: {
      card: "summary_large_image",
      title: `Blog & Guides${titleSuffix} | FlameTech Plumbing & Heating`,
      description:
        "Practical plumbing and HVAC guides from FlameTech's Calgary technicians.",
    },
  };
}

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: rawPage } = await searchParams;
  const page = parsePage(rawPage);

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

  const totalPages = Math.max(1, Math.ceil(articles.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PAGE_SIZE;
  const pageArticles = articles.slice(start, start + PAGE_SIZE);

  return (
    <>
      <Nav />
      <PageHeader
        eyebrow="Blog"
        title="Practical advice from Calgary's trusted plumbers."
        description="Field-tested tips, seasonal maintenance guides, and plain-language explainers from the FlameTech team."
      />
      <main className="bg-cream-50 text-ink-900 py-20 light-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <CategoryFilter categories={categories} />
          {errored || articles.length === 0 ? (
            <EmptyState />
          ) : (
            <>
              <div className="grid grid-cols-12 gap-6">
                {pageArticles.map((a) => (
                  <ArticleCard key={a.id} article={a} />
                ))}
              </div>
              {totalPages > 1 && (
                <Pagination
                  page={safePage}
                  totalPages={totalPages}
                />
              )}
            </>
          )}
        </div>
      </main>
      <FinalCTA />
      <Footer />
      <StickyCallBar />
    </>
  );
}

function Pagination({
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
}) {
  const hrefFor = (n: number) => (n === 1 ? "/blog" : `/blog?page=${n}`);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <nav
      aria-label="Pagination"
      className="mt-16 flex items-center justify-center gap-2"
    >
      <Link
        href={hrefFor(Math.max(1, page - 1))}
        aria-disabled={page === 1}
        className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold border transition-colors ${
          page === 1
            ? "border-line-light text-ink-500 pointer-events-none opacity-50"
            : "border-line-light text-ink-900 hover:border-emergency hover:text-emergency-deep"
        }`}
      >
        <Icon name="arrow_back" className="text-base" />
        Prev
      </Link>
      {pages.map((n) => (
        <Link
          key={n}
          href={hrefFor(n)}
          aria-current={n === page ? "page" : undefined}
          className={`inline-flex items-center justify-center min-w-9 px-3 py-2 rounded-full text-sm font-bold border transition-colors ${
            n === page
              ? "bg-ink-900 text-cream-50 border-ink-900"
              : "border-line-light text-ink-700 hover:border-emergency hover:text-emergency-deep"
          }`}
        >
          {n}
        </Link>
      ))}
      <Link
        href={hrefFor(Math.min(totalPages, page + 1))}
        aria-disabled={page === totalPages}
        className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold border transition-colors ${
          page === totalPages
            ? "border-line-light text-ink-500 pointer-events-none opacity-50"
            : "border-line-light text-ink-900 hover:border-emergency hover:text-emergency-deep"
        }`}
      >
        Next
        <Icon name="arrow_forward" className="text-base" />
      </Link>
    </nav>
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
