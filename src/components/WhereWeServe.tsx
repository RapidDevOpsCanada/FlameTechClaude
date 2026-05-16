import Link from "next/link";
import Icon from "@/components/Icon";

/**
 * "Where we serve" block rendered on every trade-service page (boiler
 * repair, drain cleaning, AC, etc.) so the high-authority trade pages
 * push link equity down to the neighbourhood landings.
 *
 * Pre-fix: trade pages typically linked to ZERO neighbourhood pages,
 * leaving 30+ neighbourhood landings starved of internal-link juice
 * even though every neighbourhood page links back UP to the trades.
 *
 * The featured list is a curated geographic spread (SE/SW/NW + central
 * + Airdrie) chosen to surface a variety of high-intent landings; the
 * "all areas" CTA catches users whose specific neighbourhood isn't
 * listed.
 */
const FEATURED_AREAS: { name: string; href: string }[] = [
  { name: "Aspen Woods", href: "/aspen-woods-plumbers-calgary/" },
  { name: "Auburn Bay", href: "/auburn-bay-plumber-calgary/" },
  { name: "Mahogany", href: "/mahogany-plumbers-calgary/" },
  { name: "Mount Royal", href: "/mount-royal-plumbers-calgary/" },
  { name: "Evergreen", href: "/evergreen-plumbers-calgary/" },
  { name: "Tuscany", href: "/tuscany-plumbers-calgary/" },
  { name: "Varsity", href: "/varsity-plumbers-calgary/" },
  { name: "McKenzie Towne", href: "/mckenzie-towne-plumbers-calgary/" },
  { name: "Signal Hill", href: "/signal-hill-plumbers-calgary/" },
  { name: "Airdrie", href: "/airdrie-plumbers/" },
];

/**
 * Detect neighbourhood-style slugs so we don't render this block on
 * pages that ARE neighbourhood landings (those already have their own
 * Calgary-wide cross-links pointing back at the trades). Matches:
 *   altadore-plumbers-calgary, calgary-plumbers-nw, airdrie-plumbers,
 *   coopers-crossing-plumbers, woodbine-plumber, etc.
 * Does NOT match trade slugs like bathroom-plumbing-calgary or
 * polyb-plumbing-calgary (those have "plumbing", not "plumber").
 */
export function isNeighbourhoodSlug(slug: string): boolean {
  return /(?:^|-)plumbers?(?:-|$)/.test(slug);
}

export default function WhereWeServe({ serviceTitle }: { serviceTitle: string }) {
  return (
    <section className="bg-ink-900 text-cream-50 py-16 md:py-20 border-t border-line-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="col-span-12 md:col-span-4">
            <span className="eyebrow mb-4">Service Area</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-[-0.02em] mt-4 mb-4 leading-[1.05]">
              Where we cover {serviceTitle.toLowerCase()}.
            </h2>
            <p className="text-cream-50/80 leading-relaxed">
              Same-day dispatch across Calgary and Airdrie. Find your
              neighbourhood for area-specific notes on common
              builds, hard-water patterns, and the systems we see most.
            </p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {FEATURED_AREAS.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="rounded-xl bg-ink-800 border border-line-dark px-4 py-3 flex items-center gap-2 lift hover:border-emergency transition-colors group"
                >
                  <Icon
                    name="location_on"
                    className="text-primary text-base group-hover:text-emergency transition-colors"
                  />
                  <span className="text-sm font-semibold group-hover:text-cream-50 transition-colors">
                    {a.name}
                  </span>
                </Link>
              ))}
            </div>
            <p className="mt-5 text-sm text-cream-50/70">
              Also serving <Link href="/chestermere-plumbers/" className="underline decoration-primary/40 underline-offset-4 hover:decoration-primary hover:text-primary transition-colors">Chestermere</Link>, <Link href="/cochrane-plumbers/" className="underline decoration-primary/40 underline-offset-4 hover:decoration-primary hover:text-primary transition-colors">Cochrane</Link>, <Link href="/okotoks-plumbers/" className="underline decoration-primary/40 underline-offset-4 hover:decoration-primary hover:text-primary transition-colors">Okotoks</Link>, and <Link href="/carstairs-plumbers/" className="underline decoration-primary/40 underline-offset-4 hover:decoration-primary hover:text-primary transition-colors">Carstairs</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
