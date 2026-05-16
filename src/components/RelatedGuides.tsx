import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import type { Article } from "@/lib/articles";
import { getFeaturedImageDimensions } from "@/lib/featured-image-dimensions";

/**
 * "Related guides" block — surfaces 2-3 blog articles related to the
 * current service page. Closes the audit-flagged gap where service
 * pages linked to ZERO blog articles, leaving 8 of 12 articles as
 * full orphans.
 *
 * Articles are passed in pre-resolved (the service page knows which
 * blog slugs are relevant via SERVICE_TO_ARTICLES; this component
 * just renders them). If `articles` is empty the block renders
 * nothing — service pages without a curated mapping are a no-op.
 */
export default function RelatedGuides({
  articles,
}: {
  articles: Article[];
}) {
  if (articles.length === 0) return null;

  return (
    <section className="bg-cream-50 text-ink-900 py-16 md:py-20 light-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow mb-4">Related Guides</span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-[-0.02em] mt-4 mb-3 leading-[1.05]">
            Field-tested troubleshooting from our team.
          </h2>
          <p className="text-ink-500 leading-relaxed">
            Quick reads on the issues we see most — written by the same
            technicians who do the work.
          </p>
        </div>
        <div
          className={`grid grid-cols-1 ${
            articles.length === 1
              ? "md:grid-cols-1"
              : articles.length === 2
              ? "md:grid-cols-2"
              : "md:grid-cols-3"
          } gap-6`}
        >
          {articles.map((a) => {
            const dims = getFeaturedImageDimensions(a.featured_image);
            return (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}/`}
                className="rounded-2xl bg-white border border-line-light overflow-hidden flex flex-col lift hover:border-emergency transition-colors group"
              >
                {a.featured_image && dims ? (
                  <div className="aspect-[16/10] relative bg-cream-100">
                    <Image
                      src={a.featured_image}
                      alt={a.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-[16/10] bg-gradient-to-br from-cream-50 to-cream-100 flex items-center justify-center">
                    <Icon
                      name="menu_book"
                      className="text-5xl text-primary/40"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary mb-3">
                    {a.category}
                  </span>
                  <h3 className="font-display text-xl font-extrabold tracking-tight mb-3 leading-snug group-hover:text-emergency transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-sm text-ink-500 leading-relaxed mb-4 flex-grow">
                    {a.excerpt.slice(0, 130)}
                    {a.excerpt.length > 130 ? "…" : ""}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-emergency">
                    Read guide
                    <Icon name="arrow_right_alt" className="text-base" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
