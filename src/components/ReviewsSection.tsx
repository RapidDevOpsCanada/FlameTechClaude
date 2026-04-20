import { getReviews } from "@/lib/reviews";
import type { Review } from "@/lib/db";
import Icon from "@/components/Icon";

// Placeholder used when DB is empty / not yet seeded.
const fallback: Review[] = [
  {
    id: 0,
    author: "Jennifer M.",
    initials: "JM",
    area: "Calgary SW",
    rating: 5,
    relative_date: "2 weeks ago",
    quote:
      "Called FlameTech for a burst pipe. A technician was at our door within the hour, shut the water off, and had the leak fixed before midnight. Fair price, clean work, genuinely kind people.",
    featured: true,
    sort_order: 1,
    created_at: new Date().toISOString(),
  },
];

export default async function ReviewsSection() {
  const fromDb = await getReviews();
  const all = fromDb.length > 0 ? fromDb : fallback;
  const featured = all.find((r) => r.featured) ?? all[0];
  const rest = all.filter((r) => r.id !== featured.id).slice(0, 4);

  return (
    <section className="bg-cream-50 text-ink-900 py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="eyebrow-light mb-4">Google Reviews</span>
            <h2 className="font-display text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-[-0.025em] max-w-2xl mt-4 leading-[1.02]">
              What Calgary homeowners say.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-3 rounded-full bg-white border border-line-light px-5 py-3">
              <span className="text-primary text-lg">★★★★★</span>
              <span className="font-bold">5.0</span>
              <span className="text-sm text-ink-500">· hundreds of reviews</span>
            </div>
            <a
              href="https://www.google.com/search?q=FlameTech+Plumbing+%26+Heating+Calgary+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-emergency-deep hover:text-emergency transition-colors"
            >
              See all reviews
              <Icon name="open_in_new" className="text-base" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Featured */}
          <div className="col-span-12 lg:col-span-5 rounded-3xl bg-ink-900 text-cream-50 p-10 md:p-12 flex flex-col lift">
            <div className="flex items-center justify-between mb-8">
              <div className="rounded-full bg-cream-50 text-ink-900 text-xs font-bold px-3 py-1.5 flex items-center gap-2">
                <Icon name="verified" className="text-sm" />
                via Google
              </div>
              <div className="text-primary text-xl tracking-wider">
                ★★★★★
              </div>
            </div>
            <p className="font-display text-2xl md:text-3xl font-semibold tracking-[-0.015em] leading-[1.25] mb-8 flex-grow">
              &ldquo;{featured.quote}&rdquo;
            </p>
            <div className="flex items-center gap-4 pt-6 border-t border-line-dark">
              <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center font-bold text-primary text-base">
                {featured.initials}
              </div>
              <div>
                <p className="font-bold">{featured.author}</p>
                <p className="text-xs text-cream-50/60">
                  {featured.area} · {featured.relative_date}
                </p>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((r) => (
              <div
                key={r.id}
                className="rounded-2xl bg-white border border-line-light p-6 flex flex-col lift"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-primary text-sm tracking-wider">
                    ★★★★★
                  </div>
                  <span className="text-xs text-ink-500">
                    {r.relative_date}
                  </span>
                </div>
                <p className="text-sm text-ink-700 leading-relaxed mb-6 flex-grow">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-line-light">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xs">
                    {r.initials}
                  </div>
                  <div>
                    <p className="font-bold text-sm leading-tight">
                      {r.author}
                    </p>
                    <p className="text-xs text-ink-500">{r.area}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
