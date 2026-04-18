import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import QuoteForm from "@/components/QuoteForm";
import FinalCTA from "@/components/FinalCTA";
import Icon from "@/components/Icon";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getService,
  getRelatedServices,
  services,
  type ServicePage,
} from "@/lib/services";
import { getReviews } from "@/lib/reviews";
import type { Review } from "@/lib/db";
import type { Metadata } from "next";

const SITE_URL = "https://flame-tech-claude-xd6r.vercel.app";
const BUSINESS = {
  name: "FlameTech Plumbing & Heating Ltd.",
  phone: "+1-587-834-3668",
  address: "Calgary, AB, Canada",
};

const DEFAULT_TRUST_PILLS = [
  "Red Seal Certified",
  "Licensed & Insured",
  "BBB Accredited",
];
const DEFAULT_STATS: ServicePage["stats"] = [
  { number: "5.0★", label: "Google rated" },
  { number: "45+", label: "Years combined" },
  { number: "FREE", label: "Estimates" },
  { number: "BBB", label: "Accredited" },
];

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };

  const title =
    service.seoTitle || `${service.title} | FlameTech Plumbing & Heating`;
  const description = service.seoDescription || service.intro;
  const url = `${SITE_URL}/${service.slug}`;
  const heroImg = service.heroImage?.src;

  return {
    title,
    description,
    keywords: service.seoKeywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      siteName: "FlameTech Plumbing & Heating",
      locale: "en_CA",
      images: heroImg
        ? [{ url: `${SITE_URL}${heroImg}`, alt: service.heroImage?.alt }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: heroImg ? [`${SITE_URL}${heroImg}`] : undefined,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = getRelatedServices(slug);
  const hasRich = !!service.richContent;
  const schemaJson = buildSchemaJsonLd(service);
  const trustPills = service.trustPills ?? DEFAULT_TRUST_PILLS;
  const stats = service.stats ?? DEFAULT_STATS;
  const inlineReview = await pickInlineReview(service.slug);

  const firstSectionHeading = service.richContent?.sections?.[0]?.heading;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      <Nav />
      <main className="bg-ink-900 text-cream-50">
        {/* HERO */}
        <section className="relative border-b border-line-dark overflow-hidden">
          <div className="absolute inset-0 dotgrid opacity-50 pointer-events-none"></div>
          <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-emergency/20 blur-3xl pointer-events-none"></div>
          <div className="absolute top-1/2 -left-32 w-[380px] h-[380px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

          <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 md:py-20 relative">
            <div className="flex flex-wrap items-center gap-2 mb-6 text-xs uppercase tracking-[0.14em] font-semibold text-cream-50/55">
              <Link href="/" className="hover:text-emergency">
                Home
              </Link>
              <span className="text-cream-50/30">/</span>
              <span className="text-primary">{service.category}</span>
            </div>
            <div className="grid grid-cols-12 gap-10 items-center">
              <div className="col-span-12 lg:col-span-7">
                {/* Mobile hero image — collapsed, above headline */}
                {service.heroImage && (
                  <div className="lg:hidden mb-7">
                    <div className="relative rounded-2xl bg-gradient-to-br from-cream-50 to-cream-100 border border-line-dark p-6 flex items-center justify-center aspect-[5/3] soft-shadow overflow-hidden">
                      <img
                        src={service.heroImage.src}
                        alt={service.heroImage.alt}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                )}

                <h1 className="font-display text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.04] tracking-[-0.025em] mb-6">
                  {service.title}
                </h1>
                <p className="text-lg md:text-xl font-bold text-cream-50 max-w-xl leading-snug mb-4">
                  {service.lead}
                </p>
                {service.heroBody?.map((p, i) => (
                  <p
                    key={i}
                    className="text-base md:text-lg text-cream-50/75 max-w-xl leading-relaxed mb-4"
                  >
                    {p}
                  </p>
                ))}

                {service.heroSubhead && (
                  <div className="mt-6 mb-8 flex flex-wrap items-center gap-5 pt-6 border-t border-line-dark">
                    <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">
                      {service.heroSubhead}
                    </span>
                    {service.heroBadgeImage && (
                      <img
                        src={service.heroBadgeImage.src}
                        alt={service.heroBadgeImage.alt}
                        className="h-10 md:h-12 object-contain"
                      />
                    )}
                  </div>
                )}

                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:5878343668"
                    className="inline-flex items-center gap-2 rounded-full bg-emergency text-cream-50 font-extrabold uppercase tracking-tight px-6 py-3.5 text-[13px] hover:bg-emergency-deep transition-colors"
                  >
                    <Icon name="call" className="text-base" />
                    Call 587-834-3668
                  </a>
                  <a
                    href="#quote"
                    className="inline-flex items-center gap-2 rounded-full border border-cream-50/25 text-cream-50 font-bold uppercase tracking-tight px-6 py-3.5 text-[13px] hover:border-emergency hover:text-emergency transition-colors"
                  >
                    Free estimate
                    <Icon name="arrow_right_alt" className="text-base" />
                  </a>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5 hidden lg:block">
                {service.heroImage ? (
                  <div className="relative">
                    <div className="absolute -inset-3 bg-primary/10 rounded-[28px] blur-2xl pointer-events-none" />

                    {/* Floating trust pills */}
                    <div className="absolute -top-3 left-6 z-10 rounded-full bg-ink-900 border border-line-dark px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-cream-50 flex items-center gap-1.5 soft-shadow">
                      <Icon name="verified" className="text-primary text-base" />
                      {trustPills[0]}
                    </div>
                    {trustPills[1] && (
                      <div className="absolute top-10 -right-3 z-10 rounded-full bg-ink-900 border border-line-dark px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-cream-50 flex items-center gap-1.5 soft-shadow">
                        <Icon name="check_circle" className="text-primary text-base" />
                        {trustPills[1]}
                      </div>
                    )}
                    {trustPills[2] && (
                      <div className="absolute -bottom-3 left-10 z-10 rounded-full bg-emergency text-cream-50 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] flex items-center gap-1.5 soft-shadow">
                        <Icon name="workspace_premium" className="text-base" />
                        {trustPills[2]}
                      </div>
                    )}

                    <div className="relative rounded-3xl bg-gradient-to-br from-cream-50 to-cream-100 border border-line-dark p-8 flex items-center justify-center aspect-[5/4] soft-shadow overflow-hidden">
                      <img
                        src={service.heroImage.src}
                        alt={service.heroImage.alt}
                        className="max-h-full max-w-full object-contain drop-shadow-[0_20px_30px_rgba(8,14,28,0.18)]"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="rounded-3xl bg-ink-800 border border-line-dark p-8 flex flex-col items-center justify-center aspect-square soft-shadow">
                    <div className="w-20 h-20 rounded-2xl bg-primary/15 text-primary-deep flex items-center justify-center mb-6">
                      <Icon name={service.icon} className="text-4xl" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-2">
                      Service
                    </span>
                    <p className="text-center text-cream-50 font-display font-extrabold text-2xl leading-tight">
                      {service.category}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="bg-ink-800 border-b border-line-dark">
          <div className="max-w-6xl mx-auto px-6 md:px-10 py-6 md:py-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {stats?.slice(0, 4).map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl md:text-3xl font-extrabold tracking-[-0.02em] text-cream-50">
                  {s.number}
                </div>
                <div className="text-[11px] uppercase tracking-[0.16em] text-cream-50/60 font-semibold mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BODY */}
        <section className="bg-cream-50 text-ink-900 py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-12 gap-8 lg:gap-10">
            <div className="col-span-12 lg:col-span-9">
              {!hasRich && (
                <>
                  <p className="text-lg text-ink-700 leading-relaxed mb-10">
                    {service.intro}
                  </p>
                  <h2 className="font-display text-3xl font-extrabold tracking-tight mb-6">
                    What&apos;s included
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 rounded-xl bg-white border border-line-light p-4"
                      >
                        <Icon
                          name="check_circle"
                          className="text-primary text-lg mt-0.5"
                        />
                        <span className="text-sm font-semibold text-ink-900">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-6 mb-12">
                    {service.bullets.map((b) => (
                      <div
                        key={b.t}
                        className="rounded-2xl bg-white border border-line-light p-6 flex gap-4"
                      >
                        <Icon
                          name="check_circle"
                          className="text-primary text-2xl mt-1"
                        />
                        <div>
                          <h3 className="font-display font-bold text-lg mb-1">
                            {b.t}
                          </h3>
                          <p className="text-sm text-ink-500 leading-relaxed">
                            {b.d}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {service.callout && (
                <div className="rounded-2xl bg-gradient-to-br from-emergency to-emergency-deep text-cream-50 p-6 md:p-8 mb-12">
                  <div className="flex items-start gap-4">
                    <Icon
                      name="contact_emergency"
                      className="text-2xl shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="font-display text-xl font-extrabold leading-snug mb-2">
                        {service.callout}
                      </p>
                      <a
                        href="tel:5878343668"
                        className="inline-flex items-center gap-2 rounded-full bg-ink-900 text-cream-50 font-bold px-5 py-2.5 text-sm mt-2"
                      >
                        <Icon name="call" className="text-base" />
                        Call 587-834-3668
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* RICH CONTENT — sections */}
              {service.richContent?.sections?.map((section, sIdx) => {
                const sectionImage = service.sectionImages?.[section.heading];
                const showInlineReview =
                  inlineReview && section.heading === firstSectionHeading;

                return (
                  <div key={section.heading}>
                    {showInlineReview && (
                      <InlineReviewBlock review={inlineReview} />
                    )}
                    <div className="mb-14">
                      <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-primary mb-3">
                        <span className="block w-6 h-px bg-primary" />
                        Section {String(sIdx + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-[-0.015em] mb-4 leading-[1.08]">
                        {section.heading}
                      </h2>
                      {section.intro && (
                        <p className="text-ink-700 leading-relaxed mb-8 max-w-2xl">
                          {section.intro}
                        </p>
                      )}
                      <div className="space-y-5">
                        {section.items.map((item, i) => {
                          const flip = i % 2 === 1;
                          return (
                            <div
                              key={`${section.heading}-${i}`}
                              className={`rounded-2xl bg-white border border-line-light overflow-hidden ${
                                item.image
                                  ? "grid grid-cols-1 md:grid-cols-5 items-stretch"
                                  : "p-6 md:p-7"
                              } hover:border-primary transition-colors`}
                            >
                              {item.image && !flip && (
                                <div className="md:col-span-2 relative">
                                  <img
                                    src={item.image.src}
                                    alt={item.image.alt}
                                    className="w-full h-52 md:h-full object-cover"
                                  />
                                </div>
                              )}
                              <div
                                className={
                                  item.image
                                    ? "md:col-span-3 p-6 md:p-8 flex flex-col justify-center"
                                    : ""
                                }
                              >
                                {item.heading && (
                                  <h3 className="font-display font-extrabold text-xl md:text-2xl tracking-tight mb-2 leading-tight">
                                    {item.heading}
                                  </h3>
                                )}
                                <p className="text-[15px] text-ink-700 leading-relaxed">
                                  {item.body}
                                </p>
                              </div>
                              {item.image && flip && (
                                <div className="md:col-span-2 relative order-first md:order-last">
                                  <img
                                    src={item.image.src}
                                    alt={item.image.alt}
                                    className="w-full h-52 md:h-full object-cover"
                                  />
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                      {sectionImage && (
                        <figure className="mt-8 rounded-2xl overflow-hidden border border-line-light">
                          <img
                            src={sectionImage.src}
                            alt={sectionImage.alt}
                            className="w-full h-auto object-cover"
                          />
                        </figure>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* RICH CONTENT — promo */}
              {service.richContent?.promo && (
                <div className="mb-14 rounded-3xl bg-ink-900 text-cream-50 overflow-hidden border border-line-dark soft-shadow">
                  <div className="grid grid-cols-1 md:grid-cols-5 items-stretch">
                    <div className="md:col-span-2 bg-gradient-to-br from-cream-50 to-cream-100 flex items-center justify-center p-8 md:p-10">
                      <img
                        src={service.richContent.promo.image.src}
                        alt={service.richContent.promo.image.alt}
                        className="max-h-52 md:max-h-64 w-auto object-contain"
                      />
                    </div>
                    <div className="md:col-span-3 p-8 md:p-10">
                      <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 text-primary border border-primary/30 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] mb-5">
                        Special offer
                      </span>
                      <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-[-0.015em] leading-tight mb-6">
                        {service.richContent.promo.heading}
                      </h3>
                      <div className="space-y-5">
                        {service.richContent.promo.groups.map((g) => (
                          <div key={g.heading}>
                            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-primary mb-2">
                              {g.heading}
                            </h4>
                            <ul className="space-y-1.5">
                              {g.items.map((li, idx) => (
                                <li
                                  key={idx}
                                  className="text-sm text-cream-50/80 flex items-start gap-2"
                                >
                                  <Icon
                                    name="check_circle"
                                    className="text-primary text-base mt-0.5 shrink-0"
                                  />
                                  <span>{li}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 mt-7">
                        <a
                          href="#quote"
                          className="inline-flex items-center gap-2 rounded-full bg-emergency text-cream-50 font-extrabold uppercase tracking-tight px-5 py-2.5 text-[12px] hover:bg-emergency-deep transition-colors"
                        >
                          Ask about this offer
                          <Icon name="arrow_right_alt" className="text-base" />
                        </a>
                        {service.richContent.promo.disclaimer && (
                          <p className="text-[11px] italic text-cream-50/50">
                            *{service.richContent.promo.disclaimer}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* RICH CONTENT — FAQ */}
              {service.richContent?.faq && (
                <div className="mb-4">
                  <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-primary mb-3">
                    <span className="block w-6 h-px bg-primary" />
                    FAQ
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-[-0.015em] mb-6 leading-[1.08]">
                    {service.richContent.faq.heading}
                  </h2>
                  <div className="space-y-3">
                    {service.richContent.faq.items.map((f) => (
                      <details
                        key={f.q}
                        className="group rounded-2xl bg-white border border-line-light open:border-primary transition-colors"
                      >
                        <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between gap-4 font-semibold text-base md:text-lg">
                          {f.q}
                          <Icon
                            name="add"
                            className="text-primary text-xl transition-transform group-open:rotate-45 shrink-0"
                          />
                        </summary>
                        <p className="px-6 pb-6 text-ink-500 leading-relaxed">
                          {f.a}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <aside className="col-span-12 lg:col-span-3">
              <div className="sticky top-28 rounded-2xl bg-ink-900 text-cream-50 p-6 overflow-hidden">
                <span className="eyebrow mb-3">
                  {service.sidebar?.subtitle ? "Get a quote" : "Get started"}
                </span>
                <h3 className="font-display text-xl font-extrabold tracking-tight mt-3 mb-3 leading-tight">
                  {service.sidebar?.title ?? "Ready for a free quote?"}
                </h3>
                <p className="text-[13px] text-cream-50/70 leading-relaxed mb-5">
                  {service.sidebar?.subtitle ??
                    "Tell us about your job and we'll follow up with pricing and availability."}
                </p>

                {service.sidebar?.bullets && (
                  <ul className="space-y-2 mb-5">
                    {service.sidebar.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-[12.5px] text-cream-50/85 leading-snug"
                      >
                        <Icon
                          name="check_circle"
                          className="text-primary text-base mt-0.5 shrink-0"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="space-y-2.5 mb-5">
                  <a
                    href="tel:5878343668"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-emergency text-cream-50 font-extrabold uppercase tracking-tight px-4 py-3 text-[12px] hover:bg-emergency-deep transition-colors"
                  >
                    <Icon name="call" className="text-base" />
                    587-834-3668
                  </a>
                  <a
                    href="#quote"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-cream-50/25 text-cream-50 font-bold uppercase tracking-tight px-4 py-3 text-[12px] hover:border-emergency hover:text-emergency transition-colors"
                  >
                    Request a quote
                  </a>
                </div>

                {/* Trust badges */}
                <div className="pt-5 border-t border-line-dark">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-cream-50/55 mb-3">
                    Trusted By Calgary
                  </p>
                  <div className="flex flex-col gap-3">
                    <img
                      src="/images/REVIEWS1.png"
                      alt="5-star Google rated"
                      className="h-10 w-auto object-contain object-left"
                    />
                    <div className="flex items-center gap-3">
                      <img
                        src="/images/blue-ceip-225x300.png"
                        alt="BBB Accredited"
                        className="h-12 w-auto object-contain"
                      />
                      <img
                        src="/images/financeit.png"
                        alt="Financing via Financeit"
                        className="h-5 w-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* RELATED — with hero thumbnails */}
        {related.length > 0 && (
          <section className="bg-cream-100 text-ink-900 py-16 md:py-20 border-t border-line-light">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
              <div className="flex items-end justify-between gap-6 mb-10">
                <div>
                  <span className="eyebrow-light mb-4">
                    Related {service.category} services
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight mt-4">
                    Also under {service.category}
                  </h2>
                </div>
                <Link
                  href="/#services"
                  className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-emergency-deep"
                >
                  All services
                  <Icon name="arrow_right_alt" className="text-base" />
                </Link>
              </div>
              <div className="grid grid-cols-12 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/${r.slug}`}
                    className="group col-span-12 md:col-span-4 rounded-2xl bg-white border border-line-light overflow-hidden hover:border-emergency transition-colors"
                  >
                    <div className="relative aspect-[16/9] bg-gradient-to-br from-cream-50 to-cream-100 flex items-center justify-center overflow-hidden">
                      {r.heroImage ? (
                        <img
                          src={r.heroImage.src}
                          alt={r.heroImage.alt}
                          className="max-h-[85%] max-w-[85%] object-contain drop-shadow-[0_10px_20px_rgba(8,14,28,0.15)] group-hover:scale-105 transition-transform"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-xl bg-primary/15 text-primary-deep flex items-center justify-center">
                          <Icon name={r.icon} className="text-3xl" />
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-lg font-extrabold tracking-tight group-hover:text-emergency-deep transition-colors mb-2">
                        {r.title}
                      </h3>
                      <p className="text-sm text-ink-500 leading-relaxed line-clamp-3">
                        {r.lead}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* QUOTE FORM */}
        <section
          id="quote"
          className="relative bg-ink-900 text-cream-50 py-20 overflow-hidden"
        >
          <div className="absolute inset-0 dotgrid opacity-30 pointer-events-none"></div>
          <div className="absolute top-10 -right-40 w-[520px] h-[520px] rounded-full bg-emergency/20 blur-3xl pointer-events-none"></div>
          <div className="max-w-6xl mx-auto px-6 md:px-10 relative">
            <div className="grid grid-cols-12 gap-10">
              <div className="col-span-12 md:col-span-5">
                <span className="eyebrow mb-4">Request Service</span>
                <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-[-0.025em] mt-4 mb-6 leading-[1.02]">
                  Get a free estimate.
                </h2>
                <p className="text-cream-50/70 leading-relaxed">
                  Tell us what&apos;s going on and our dispatch team will call
                  you back with pricing and availability.
                </p>
              </div>
              <div className="col-span-12 md:col-span-7 rounded-3xl bg-cream-50 text-ink-900 p-8 md:p-10 border border-line-dark">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}

/** Inline testimonial block, rendered between body sections. */
function InlineReviewBlock({ review }: { review: Review }) {
  return (
    <div className="mb-14 rounded-3xl bg-ink-900 text-cream-50 p-8 md:p-10 relative overflow-hidden">
      <div className="absolute -top-4 right-6 text-primary/20 text-[140px] font-display font-extrabold leading-none select-none pointer-events-none">
        &ldquo;
      </div>
      <div className="relative">
        <div className="flex items-center justify-between mb-5">
          <div className="rounded-full bg-cream-50 text-ink-900 text-xs font-bold px-3 py-1.5 flex items-center gap-2">
            <Icon name="verified" className="text-sm" />
            via Google
          </div>
          <div className="text-primary text-lg tracking-wider">★★★★★</div>
        </div>
        <p className="font-display text-xl md:text-2xl font-semibold leading-snug tracking-[-0.01em] mb-6">
          &ldquo;{review.quote}&rdquo;
        </p>
        <div className="flex items-center gap-3 pt-5 border-t border-line-dark">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-sm">
            {review.initials}
          </div>
          <div>
            <p className="font-bold text-sm leading-tight">{review.author}</p>
            <p className="text-xs text-cream-50/60">
              {review.area} · {review.relative_date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Pick a non-featured review to drop inline. Falls back to null if the DB is empty. */
async function pickInlineReview(slug: string): Promise<Review | null> {
  const reviews = await getReviews();
  if (!reviews.length) return null;
  const nonFeatured = reviews.filter((r) => !r.featured);
  const pool = nonFeatured.length ? nonFeatured : reviews;
  // Stable-but-varying pick: hash the slug to an index.
  const idx = [...slug].reduce((a, c) => a + c.charCodeAt(0), 0) % pool.length;
  return pool[idx];
}

function buildSchemaJsonLd(service: ServicePage) {
  const url = `${SITE_URL}/${service.slug}`;
  const heroImg = service.heroImage?.src
    ? `${SITE_URL}${service.heroImage.src}`
    : undefined;

  const graph: Record<string, unknown>[] = [];

  graph.push({
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.title,
    description: service.seoDescription || service.intro,
    serviceType: service.category,
    image: heroImg,
    url,
    areaServed: {
      "@type": "City",
      name: "Calgary",
      address: {
        "@type": "PostalAddress",
        addressRegion: "AB",
        addressCountry: "CA",
      },
    },
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}#business`,
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Calgary",
        addressRegion: "AB",
        addressCountry: "CA",
      },
      priceRange: "$$",
      url: SITE_URL,
    },
  });

  graph.push({
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: service.category,
        item: `${SITE_URL}/#services`,
      },
      { "@type": "ListItem", position: 3, name: service.title, item: url },
    ],
  });

  if (service.richContent?.faq?.items?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: service.richContent.faq.items.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  graph.push({
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: service.seoTitle || service.title,
    description: service.seoDescription || service.intro,
    isPartOf: { "@id": `${SITE_URL}#website` },
    primaryImageOfPage: heroImg
      ? { "@type": "ImageObject", url: heroImg }
      : undefined,
    breadcrumb: { "@id": `${url}#breadcrumb` },
  });

  return { "@context": "https://schema.org", "@graph": graph };
}
