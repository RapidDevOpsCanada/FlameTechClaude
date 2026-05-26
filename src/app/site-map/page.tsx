import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import IconBadge, { type IconTone } from "@/components/IconBadge";
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
  // index:false keeps this page out of Google's index (so it can't
  // compete with the real homepage or rank for "FlameTech sitemap"
  // queries). follow:true lets Googlebot still crawl through the
  // outgoing links.
  robots: { index: false, follow: true },
};

const HUB_SLUGS = new Set(["boilers", "furnaces", "hot-water-tanks"]);
const SURROUNDING_SLUGS = new Set([
  "chestermere-plumbers",
  "cochrane-plumbers",
  "okotoks-plumbers",
  "carstairs-plumbers",
]);

function isAirdriePage(s: ServicePage): boolean {
  return s.location === "Airdrie" || /-airdrie\b|^airdrie-/.test(s.slug);
}

function cleanTitle(s: ServicePage): string {
  return s.title.replace(/\s*[—|].*$/, "").trim();
}

const STATIC_PAGES: { label: string; href: string; icon: string }[] = [
  { label: "Homepage", href: "/", icon: "verified" },
  { label: "About", href: "/about/", icon: "handyman" },
  { label: "Contact", href: "/contact/", icon: "call" },
  { label: "Financing", href: "/financing/", icon: "dollar" },
  { label: "Privacy Policy", href: "/privacy/", icon: "check_circle" },
  { label: "Thank You", href: "/thank-you/", icon: "check_circle" },
  { label: "Blog Index", href: "/blog/", icon: "request_quote" },
];

// Map service category → IconBadge tone + display icon for the card
// header so each category reads instantly.
const CATEGORY_META: Record<
  ServicePage["category"],
  { icon: string; tone: IconTone }
> = {
  Plumbing: { icon: "plumbing", tone: "plumbing" },
  Heating: { icon: "local_fire_department", tone: "heating" },
  Air: { icon: "ac_unit", tone: "air" },
  Water: { icon: "water_drop", tone: "water" },
};

export default async function SiteMapPage() {
  // Bucket the services
  const hubs: ServicePage[] = [];
  const trades: Record<ServicePage["category"], ServicePage[]> = {
    Plumbing: [],
    Heating: [],
    Air: [],
    Water: [],
  };
  const calgaryNeighbourhoods: ServicePage[] = [];
  const airdrie: ServicePage[] = [];
  const surrounding: ServicePage[] = [];

  for (const s of services) {
    if (HUB_SLUGS.has(s.slug)) hubs.push(s);
    else if (SURROUNDING_SLUGS.has(s.slug)) surrounding.push(s);
    else if (isAirdriePage(s)) airdrie.push(s);
    else if (isNeighbourhoodSlug(s.slug)) calgaryNeighbourhoods.push(s);
    else trades[s.category].push(s);
  }

  const byTitle = (a: ServicePage, b: ServicePage) =>
    cleanTitle(a).localeCompare(cleanTitle(b));
  hubs.sort(byTitle);
  for (const k of Object.keys(trades) as ServicePage["category"][]) {
    trades[k].sort(byTitle);
  }
  calgaryNeighbourhoods.sort(byTitle);
  airdrie.sort(byTitle);
  surrounding.sort(byTitle);

  // Find the matching hub per category so each category card can
  // surface it prominently
  const hubBySlug = new Map(hubs.map((h) => [h.slug, h]));
  const categoryHub: Record<ServicePage["category"], ServicePage | undefined> = {
    Plumbing: undefined,
    Heating: hubBySlug.get("furnaces") || hubBySlug.get("boilers"),
    Air: undefined,
    Water: hubBySlug.get("hot-water-tanks"),
  };
  // Special: heating actually has two hubs (furnaces + boilers) — keep
  // boilers as a "secondary" headline below furnaces.
  const heatingSecondaryHub =
    categoryHub.Heating?.slug === "furnaces" ? hubBySlug.get("boilers") : undefined;

  const [articles, categories] = await Promise.all([
    getAllArticles(),
    getCategories(),
  ]);
  const tags = getAllTags();

  const totalPages =
    STATIC_PAGES.length +
    services.length +
    articles.length +
    categories.length +
    tags.length;

  return (
    <>
      <Nav />
      <main id="main" className="bg-cream-50 text-ink-900 min-h-screen light-surface">
        {/* Hero — internal banner */}
        <section className="relative overflow-hidden bg-ink-900 text-cream-50 py-12 md:py-16 border-b border-line-dark">
          <div className="absolute inset-0 dotgrid opacity-40 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
            <div className="flex items-center gap-3 mb-4">
              <span className="eyebrow">Internal</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-cream-50/50">
                Non-indexed · noindex,follow
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-4 max-w-3xl">
              Site Map
            </h1>
            <p className="text-cream-50/75 max-w-2xl mb-6">
              Every page on flametechplumbing.ca, grouped visually. Hidden
              from search engines but reachable for QA and walkthroughs.
            </p>
            <div className="flex flex-wrap gap-2">
              <SummaryChip n={totalPages} label="total pages" />
              <SummaryChip n={services.length} label="service pages" />
              <SummaryChip n={articles.length} label="blog articles" />
              <SummaryChip n={calgaryNeighbourhoods.length} label="Calgary neighbourhoods" />
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
          {/* Row 1 — four trade-service category cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <CategoryCard
              eyebrow="Heating services"
              icon={CATEGORY_META.Heating.icon}
              tone={CATEGORY_META.Heating.tone}
              hub={categoryHub.Heating}
              secondaryHub={heatingSecondaryHub}
              items={trades.Heating}
            />
            <CategoryCard
              eyebrow="Plumbing services"
              icon={CATEGORY_META.Plumbing.icon}
              tone={CATEGORY_META.Plumbing.tone}
              hub={categoryHub.Plumbing}
              items={trades.Plumbing}
            />
            <CategoryCard
              eyebrow="Water services"
              icon={CATEGORY_META.Water.icon}
              tone={CATEGORY_META.Water.tone}
              hub={categoryHub.Water}
              items={trades.Water}
            />
            <CategoryCard
              eyebrow="Air services"
              icon={CATEGORY_META.Air.icon}
              tone={CATEGORY_META.Air.tone}
              hub={categoryHub.Air}
              items={trades.Air}
            />
          </div>

          {/* Row 2 — service-area cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <AreaCard
              eyebrow="Service area"
              heading={`Calgary neighbourhoods (${calgaryNeighbourhoods.length})`}
              icon="location_on"
              items={calgaryNeighbourhoods.map((s) => ({
                label: cleanTitle(s).replace(/\s+Plumbers?\s+Calgary$/i, ""),
                href: `/${s.slug}/`,
              }))}
            />
            <AreaCard
              eyebrow="Service area"
              heading={`Airdrie (${airdrie.length})`}
              icon="location_on"
              items={airdrie.map((s) => ({
                label: cleanTitle(s),
                href: `/${s.slug}/`,
              }))}
            />
            <AreaCard
              eyebrow="Service area"
              heading={`Surrounding towns (${surrounding.length})`}
              icon="location_on"
              items={surrounding.map((s) => ({
                label: cleanTitle(s).replace(/\s+Plumbers?$/i, ""),
                href: `/${s.slug}/`,
              }))}
            />
          </div>

          {/* Row 3 — blog + static */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Blog articles span 2 cols on lg */}
            <div className="lg:col-span-2">
              <BlogCard
                articles={articles}
                categories={categories}
                tags={tags.map((t) => ({ name: t, slug: tagSlug(t) }))}
              />
            </div>
            <StaticCard pages={STATIC_PAGES} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function SummaryChip({ n, label }: { n: number; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-cream-50/10 border border-line-dark px-3 py-1.5 text-xs">
      <span className="font-extrabold text-cream-50">{n}</span>
      <span className="text-cream-50/70">{label}</span>
    </span>
  );
}

function CategoryCard({
  eyebrow,
  icon,
  tone,
  hub,
  secondaryHub,
  items,
}: {
  eyebrow: string;
  icon: string;
  tone: IconTone;
  hub?: ServicePage;
  secondaryHub?: ServicePage;
  items: ServicePage[];
}) {
  if (items.length === 0 && !hub) return null;
  const count = items.length + (hub ? 1 : 0) + (secondaryHub ? 1 : 0);
  return (
    <div className="rounded-3xl bg-white border border-line-light p-6 md:p-7 soft-shadow">
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="flex items-center gap-3">
          <IconBadge name={icon} tone={tone} size="lg" animate={false} />
          <div>
            <span className="eyebrow-light mb-1 block">{eyebrow}</span>
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink-500">
              {count} page{count === 1 ? "" : "s"}
            </span>
          </div>
        </div>
      </div>

      {hub && <HubLink hub={hub} primary />}
      {secondaryHub && <HubLink hub={secondaryHub} />}

      {items.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {items.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}/`}
              className="rounded-full bg-cream-50 border border-line-light px-3 py-1.5 text-xs font-semibold text-ink-700 hover:border-emergency hover:text-emergency transition-colors"
            >
              {cleanTitle(s)
                .replace(/\s+Calgary$/i, "")
                .replace(/\s+Specialists?$/i, "")}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function HubLink({ hub, primary }: { hub: ServicePage; primary?: boolean }) {
  return (
    <Link
      href={`/${hub.slug}/`}
      className={`group flex items-center gap-3 rounded-2xl p-4 mb-2 transition-colors ${
        primary
          ? "bg-ink-900 text-cream-50 hover:bg-ink-700"
          : "bg-cream-100 text-ink-900 hover:bg-cream-50 border border-line-light"
      }`}
    >
      <div className="flex-1 min-w-0">
        <span className="block text-[10px] font-bold uppercase tracking-[0.18em] opacity-70 mb-0.5">
          Hub
        </span>
        <span className="font-extrabold text-base md:text-lg tracking-tight truncate block">
          /{hub.slug}/
        </span>
      </div>
      <Icon
        name="arrow_right_alt"
        className="text-xl shrink-0 group-hover:translate-x-1 transition-transform"
      />
    </Link>
  );
}

function AreaCard({
  eyebrow,
  heading,
  icon,
  items,
}: {
  eyebrow: string;
  heading: string;
  icon: string;
  items: { label: string; href: string }[];
}) {
  if (items.length === 0) return null;
  return (
    <div className="rounded-3xl bg-white border border-line-light p-6 soft-shadow">
      <div className="flex items-center gap-3 mb-5">
        <IconBadge name={icon} tone="neutral" size="md" animate={false} />
        <div>
          <span className="eyebrow-light mb-1 block">{eyebrow}</span>
          <h3 className="font-display text-base font-extrabold tracking-tight">
            {heading}
          </h3>
        </div>
      </div>
      <ul className="space-y-1">
        {items.map((it) => (
          <li key={it.href}>
            <Link
              href={it.href}
              className="flex items-center gap-2 py-1 text-sm text-ink-700 hover:text-emergency transition-colors"
            >
              <Icon name="location_on" className="text-primary text-sm shrink-0" />
              <span className="truncate">{it.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BlogCard({
  articles,
  categories,
  tags,
}: {
  articles: Awaited<ReturnType<typeof getAllArticles>>;
  categories: { name: string; slug: string }[];
  tags: { name: string; slug: string }[];
}) {
  return (
    <div className="rounded-3xl bg-white border border-line-light p-6 md:p-7 soft-shadow h-full">
      <div className="flex items-center gap-3 mb-5">
        <IconBadge name="request_quote" tone="neutral" size="lg" animate={false} />
        <div>
          <span className="eyebrow-light mb-1 block">Blog</span>
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink-500">
            {articles.length} articles · {categories.length} categories ·{" "}
            {tags.length} tags
          </span>
        </div>
      </div>

      <h4 className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-ink-500 mt-2 mb-3">
        Articles
      </h4>
      <ul className="space-y-1 mb-5">
        {articles.map((a) => (
          <li key={a.slug}>
            <Link
              href={`/blog/${a.slug}/`}
              className="flex items-center gap-3 py-1 text-sm text-ink-700 hover:text-emergency transition-colors"
            >
              <span className="font-mono text-[10px] text-ink-500 shrink-0 w-3">
                ›
              </span>
              <span className="truncate">{a.title}</span>
              <span className="ml-auto shrink-0 rounded-full bg-primary/10 text-primary-deep text-[9px] font-bold uppercase tracking-[0.14em] px-2 py-0.5">
                {a.category}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5 border-t border-line-light">
        <div>
          <h4 className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-ink-500 mb-3">
            Categories
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/blog/categories/${c.slug}/`}
                className="rounded-full bg-cream-50 border border-line-light px-2.5 py-1 text-xs font-semibold text-ink-700 hover:border-emergency hover:text-emergency transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-ink-500 mb-3">
            Tags
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <Link
                key={t.slug}
                href={`/blog/tags/${t.slug}/`}
                className="rounded-full bg-cream-50 border border-line-light px-2.5 py-1 text-xs font-semibold text-ink-700 hover:border-emergency hover:text-emergency transition-colors"
              >
                {t.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StaticCard({
  pages,
}: {
  pages: { label: string; href: string; icon: string }[];
}) {
  return (
    <div className="rounded-3xl bg-white border border-line-light p-6 soft-shadow h-full">
      <div className="flex items-center gap-3 mb-5">
        <IconBadge name="verified" tone="neutral" size="lg" animate={false} />
        <div>
          <span className="eyebrow-light mb-1 block">Top-level</span>
          <h3 className="font-display text-base font-extrabold tracking-tight">
            Static pages ({pages.length})
          </h3>
        </div>
      </div>
      <ul className="space-y-1">
        {pages.map((p) => (
          <li key={p.href}>
            <Link
              href={p.href}
              className="flex items-center gap-3 py-1.5 text-sm text-ink-700 hover:text-emergency transition-colors group"
            >
              <Icon
                name={p.icon}
                className="text-primary text-sm shrink-0 group-hover:text-emergency transition-colors"
              />
              <span className="font-semibold">{p.label}</span>
              <span className="ml-auto font-mono text-[10px] text-ink-500/70 shrink-0">
                {p.href}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
