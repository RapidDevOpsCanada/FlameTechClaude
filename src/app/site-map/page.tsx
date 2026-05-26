import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { services, type ServicePage } from "@/lib/services";
import { isNeighbourhoodSlug } from "@/components/WhereWeServe";
import { getAllArticles, getCategories } from "@/lib/articles";
import { getAllTags, tagSlug } from "@/lib/article-tags";
import type { Metadata } from "next";

const SITE_URL = "https://flametechplumbing.ca";

export const metadata: Metadata = {
  title: "Site Map | FlameTech Plumbing & Heating",
  description:
    "Internal visual map of every page on flametechplumbing.ca — services, neighbourhoods, blog, and static pages.",
  alternates: { canonical: `${SITE_URL}/site-map/` },
  // index:false keeps this page out of Google's index (so it can't compete
  // with the real homepage or rank for "FlameTech sitemap" queries).
  // follow:true lets Googlebot still crawl through the outgoing links —
  // gives the crawler extra paths to orphan content without risking the
  // page itself appearing in SERPs.
  robots: { index: false, follow: true },
};

// Hub pages get their own section — they're trade services but act as
// umbrella landings for related specifics.
const HUB_SLUGS = new Set(["boilers", "furnaces", "hot-water-tanks"]);

// Surrounding-area town landings (not Calgary neighbourhoods, not Airdrie).
const SURROUNDING_SLUGS = new Set([
  "chestermere-plumbers",
  "cochrane-plumbers",
  "okotoks-plumbers",
  "carstairs-plumbers",
]);

function isAirdriePage(s: ServicePage): boolean {
  return s.location === "Airdrie" || /-airdrie\b|^airdrie-/.test(s.slug);
}

function partition(svcs: ServicePage[]) {
  const hubs: ServicePage[] = [];
  const trades: Record<string, ServicePage[]> = {
    Plumbing: [],
    Heating: [],
    Air: [],
    Water: [],
  };
  const calgaryNeighbourhoods: ServicePage[] = [];
  const airdrie: ServicePage[] = [];
  const surrounding: ServicePage[] = [];

  for (const s of svcs) {
    if (HUB_SLUGS.has(s.slug)) {
      hubs.push(s);
    } else if (SURROUNDING_SLUGS.has(s.slug)) {
      surrounding.push(s);
    } else if (isAirdriePage(s)) {
      airdrie.push(s);
    } else if (isNeighbourhoodSlug(s.slug)) {
      calgaryNeighbourhoods.push(s);
    } else {
      trades[s.category]?.push(s);
    }
  }

  // Stable alphabetical sort within each bucket
  const byTitle = (a: ServicePage, b: ServicePage) =>
    cleanTitle(a).localeCompare(cleanTitle(b));
  hubs.sort(byTitle);
  for (const k of Object.keys(trades)) trades[k].sort(byTitle);
  calgaryNeighbourhoods.sort(byTitle);
  airdrie.sort(byTitle);
  surrounding.sort(byTitle);

  return { hubs, trades, calgaryNeighbourhoods, airdrie, surrounding };
}

function cleanTitle(s: ServicePage): string {
  return s.title.replace(/\s*[—|].*$/, "").trim();
}

const STATIC_PAGES: { label: string; href: string }[] = [
  { label: "Homepage", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
  { label: "Financing", href: "/financing/" },
  { label: "Privacy Policy", href: "/privacy/" },
  { label: "Thank You", href: "/thank-you/" },
  { label: "Blog Index", href: "/blog/" },
];

export default async function SiteMapPage() {
  const { hubs, trades, calgaryNeighbourhoods, airdrie, surrounding } =
    partition(services);

  const [articles, categories] = await Promise.all([
    getAllArticles(),
    getCategories(),
  ]);
  const tags = getAllTags();

  const total =
    STATIC_PAGES.length +
    services.length +
    articles.length +
    categories.length +
    tags.length;

  return (
    <>
      <Nav />
      <main id="main" className="bg-ink-900 text-cream-50 min-h-screen">
        {/* Hero — compact, marked as internal so it's obvious this isn't
            a marketing page. */}
        <section className="relative overflow-hidden py-12 md:py-16 border-b border-line-dark">
          <div className="absolute inset-0 dotgrid opacity-40 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
            <div className="flex items-center gap-3 mb-4">
              <span className="eyebrow">Internal</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-cream-50/50">
                Non-indexed
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-4 max-w-3xl">
              Site Map
            </h1>
            <p className="text-cream-50/75 max-w-2xl">
              Every page on flametechplumbing.ca, grouped by section.
              Hidden from search engines (noindex) but reachable for QA
              and walkthroughs. {total} pages total.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16 space-y-14">
          {/* Static + hub pages */}
          <SiteMapSection
            eyebrow="Top-level"
            heading="Static pages"
            count={STATIC_PAGES.length}
            items={STATIC_PAGES}
          />

          <SiteMapSection
            eyebrow="Hubs"
            heading="Category hub pages"
            count={hubs.length}
            items={hubs.map((s) => ({
              label: cleanTitle(s),
              href: `/${s.slug}/`,
            }))}
          />

          {/* Trade services grouped by category */}
          {(["Plumbing", "Heating", "Air", "Water"] as const).map((cat) => (
            <SiteMapSection
              key={cat}
              eyebrow={`Trade · ${cat}`}
              heading={`${cat} services`}
              count={trades[cat].length}
              items={trades[cat].map((s) => ({
                label: cleanTitle(s),
                href: `/${s.slug}/`,
              }))}
            />
          ))}

          <SiteMapSection
            eyebrow="Service area"
            heading="Calgary neighbourhood landings"
            count={calgaryNeighbourhoods.length}
            items={calgaryNeighbourhoods.map((s) => ({
              label: cleanTitle(s),
              href: `/${s.slug}/`,
            }))}
          />

          <SiteMapSection
            eyebrow="Service area"
            heading="Airdrie pages"
            count={airdrie.length}
            items={airdrie.map((s) => ({
              label: cleanTitle(s),
              href: `/${s.slug}/`,
            }))}
          />

          <SiteMapSection
            eyebrow="Service area"
            heading="Surrounding-area towns"
            count={surrounding.length}
            items={surrounding.map((s) => ({
              label: cleanTitle(s),
              href: `/${s.slug}/`,
            }))}
          />

          {/* Blog */}
          <SiteMapSection
            eyebrow="Blog"
            heading="Articles"
            count={articles.length}
            items={articles.map((a) => ({
              label: a.title,
              href: `/blog/${a.slug}/`,
              meta: a.category,
            }))}
          />

          <SiteMapSection
            eyebrow="Blog"
            heading="Category archives"
            count={categories.length}
            items={categories.map((c) => ({
              label: c.name,
              href: `/blog/categories/${c.slug}/`,
            }))}
          />

          <SiteMapSection
            eyebrow="Blog"
            heading="Tag archives"
            count={tags.length}
            items={tags.map((t) => ({
              label: t,
              href: `/blog/tags/${tagSlug(t)}/`,
            }))}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

function SiteMapSection({
  eyebrow,
  heading,
  count,
  items,
}: {
  eyebrow: string;
  heading: string;
  count: number;
  items: { label: string; href: string; meta?: string }[];
}) {
  if (items.length === 0) return null;
  return (
    <section>
      <div className="flex items-baseline justify-between mb-5 border-b border-line-dark pb-3">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="font-display text-xl md:text-2xl font-extrabold tracking-tight mt-2">
            {heading}
          </h2>
        </div>
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-cream-50/50">
          {count} page{count === 1 ? "" : "s"}
        </span>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
        {items.map((it) => (
          <li key={it.href}>
            <Link
              href={it.href}
              className="group flex items-baseline gap-2 py-1.5 text-sm hover:text-emergency transition-colors"
            >
              <span className="text-cream-50/40 font-mono text-[11px] shrink-0">
                {it.href}
              </span>
              <span className="text-cream-50/90 group-hover:text-emergency truncate">
                {it.label}
              </span>
              {it.meta && (
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary/70 shrink-0 ml-auto">
                  {it.meta}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
