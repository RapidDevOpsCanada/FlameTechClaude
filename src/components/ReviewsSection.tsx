import Image from "next/image";
import { getReviews, getReviewsSummary } from "@/lib/reviews";
import Icon from "@/components/Icon";

export default async function ReviewsSection() {
  const all = await getReviews();
  if (all.length === 0) return null;
  const summary = getReviewsSummary();
  const featured = all.find((r) => r.featured) ?? all[0];
  const rest = all.filter((r) => r.id !== featured.id).slice(0, 4);

  return (
    <section className="bg-cream-50 text-ink-900 py-24 light-surface">
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
              <span className="font-bold">{summary.average.toFixed(1)}</span>
              <span className="text-sm text-ink-500">
                · {summary.total} Google reviews
              </span>
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

        <div className="grid grid-cols-12 gap-8">
          {/* Featured */}
          <div className="col-span-12 lg:col-span-5 rounded-3xl bg-ink-900 text-cream-50 p-10 md:p-12 flex flex-col gap-8 lift">
            <div className="flex items-center justify-between">
              <a
                href="https://share.google/aOJFMcBNwTcPsAZxK"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read all FlameTech reviews on Google"
                className="rounded-full bg-cream-50 text-ink-900 text-xs font-bold px-3 py-1.5 flex items-center gap-2 hover:bg-cream-100 transition-colors"
              >
                <Icon name="verified" className="text-sm" />
                via Google
              </a>
              <div className="text-primary text-xl tracking-wider" aria-hidden>
                ★★★★★
              </div>
            </div>
            <Quote
              text={featured.quote}
              wrap
              className="font-display text-2xl md:text-3xl font-semibold tracking-[-0.015em] leading-[1.25] flex-grow space-y-4"
            />
            <div className="flex items-center gap-4 pt-6 border-t border-line-dark">
              {featured.avatar ? (
                <Image
                  src={featured.avatar}
                  alt=""
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover border border-line-dark shrink-0"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center font-bold text-primary text-base shrink-0">
                  {featured.initials}
                </div>
              )}
              <div>
                <p className="font-bold">{featured.author}</p>
                <p className="text-xs text-cream-50/75">
                  {featured.area} · {featured.relative_date}
                </p>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
            {rest.map((r) => (
              <div
                key={r.id}
                className="rounded-2xl bg-white border border-line-light p-6 flex flex-col gap-5 lift"
              >
                <div className="flex items-center justify-between">
                  <div className="text-primary text-sm tracking-wider">
                    ★★★★★
                  </div>
                  <span className="text-xs text-ink-500">
                    {r.relative_date}
                  </span>
                </div>
                <Quote
                  text={r.quote}
                  wrap
                  className="text-sm text-ink-700 leading-relaxed flex-grow space-y-3"
                />
                <div className="flex items-center gap-3 pt-4 border-t border-line-light">
                  {r.avatar ? (
                    <Image
                      src={r.avatar}
                      alt=""
                      width={36}
                      height={36}
                      className="w-9 h-9 rounded-full object-cover border border-line-light shrink-0"
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xs shrink-0">
                      {r.initials}
                    </div>
                  )}
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

/**
 * Render a review quote that may contain multiple paragraphs (split on
 * \n\n). Each paragraph is its own <p> so prose breathes instead of
 * becoming a wall of text. With `wrap`, the first paragraph gets a
 * leading curly quote and the last gets a trailing one.
 */
function Quote({
  text,
  className,
  wrap = false,
}: {
  text: string;
  className?: string;
  wrap?: boolean;
}) {
  const paragraphs = text
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);
  if (paragraphs.length === 0) return null;
  return (
    <div className={className}>
      {paragraphs.map((p, i) => (
        <p key={i}>
          {wrap && i === 0 ? "“" : ""}
          {p}
          {wrap && i === paragraphs.length - 1 ? "”" : ""}
        </p>
      ))}
    </div>
  );
}
