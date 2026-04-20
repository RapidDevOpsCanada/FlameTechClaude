"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";

export type PortfolioItem = {
  src: string;
  alt: string;
  caption?: string;
};

export default function PortfolioCarousel({
  items,
  eyebrow = "Our work",
  heading = "A few of our recent installs",
  intro,
}: {
  items: PortfolioItem[];
  eyebrow?: string;
  heading?: string;
  intro?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const slideWidth = useCallback(() => {
    const el = trackRef.current;
    if (!el) return 0;
    const first = el.querySelector<HTMLElement>("[data-slide]");
    return first?.offsetWidth ?? el.clientWidth;
  }, []);

  const scrollBy = useCallback(
    (dir: 1 | -1) => {
      const el = trackRef.current;
      if (!el) return;
      el.scrollBy({ left: slideWidth() * dir, behavior: "smooth" });
    },
    [slideWidth],
  );

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const w = slideWidth();
        if (!w) return;
        const i = Math.round(el.scrollLeft / w);
        setActive(Math.min(items.length - 1, Math.max(0, i)));
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", onScroll);
    };
  }, [items.length, slideWidth]);

  const jumpTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: slideWidth() * i, behavior: "smooth" });
  };

  return (
    <section className="bg-ink-900 text-cream-50 py-16 md:py-20 border-t border-line-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-4 block">
              {eyebrow}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-[-0.015em] leading-[1.08]">
              {heading}
            </h2>
            {intro && (
              <p className="text-cream-50/70 leading-relaxed mt-4 text-[17px]">
                {intro}
              </p>
            )}
          </div>
          <div className="flex items-center gap-4">
            <span className="font-display tabular-nums text-sm text-cream-50/60">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(items.length).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous install"
                onClick={() => scrollBy(-1)}
                disabled={active === 0}
                className="w-11 h-11 rounded-full border border-cream-50/25 flex items-center justify-center hover:border-emergency hover:text-emergency transition-colors disabled:opacity-30 disabled:hover:border-cream-50/25 disabled:hover:text-cream-50"
              >
                <Icon name="chevron_left" className="text-xl" />
              </button>
              <button
                type="button"
                aria-label="Next install"
                onClick={() => scrollBy(1)}
                disabled={active >= items.length - 1}
                className="w-11 h-11 rounded-full border border-cream-50/25 flex items-center justify-center hover:border-emergency hover:text-emergency transition-colors disabled:opacity-30 disabled:hover:border-cream-50/25 disabled:hover:text-cream-50"
              >
                <Icon name="chevron_right" className="text-xl" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-5 -mx-6 md:mx-0 px-6 md:px-0 pb-4 scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {items.map((item, i) => (
            <figure
              key={item.src}
              data-slide
              className="shrink-0 snap-start w-[85%] sm:w-[55%] md:w-[calc((100%-2.5rem)/3)] rounded-2xl overflow-hidden bg-ink-800 border border-line-dark"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading={i < 3 ? "eager" : "lazy"}
                  className="w-full h-full object-cover"
                />
              </div>
              {item.caption && (
                <figcaption className="px-5 py-4 text-sm text-cream-50/75 leading-snug">
                  {item.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to install ${i + 1}`}
              onClick={() => jumpTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === active
                  ? "w-8 bg-primary"
                  : "w-2 bg-cream-50/25 hover:bg-cream-50/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
