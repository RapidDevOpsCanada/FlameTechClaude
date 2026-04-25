"use client";

import { useEffect, useRef, useState } from "react";

export type BeforeAfterPair = {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  caption?: string;
};

/**
 * Drag-to-reveal before/after image comparison. Renders both images
 * stacked, then masks the "after" image with a CSS clip-path tied to
 * the divider position. Pointer events (mouse + touch) drag the
 * divider; arrow keys move it 5% at a time when focused.
 */
export default function BeforeAfter({
  pair,
  initial = 50,
}: {
  pair: BeforeAfterPair;
  /** Initial divider position as a 0–100 percentage. */
  initial?: number;
}) {
  const [pct, setPct] = useState(clamp(initial));
  const wrapRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  useEffect(() => {
    function move(clientX: number) {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const next = ((clientX - rect.left) / rect.width) * 100;
      setPct(clamp(next));
    }
    function onPointerMove(e: PointerEvent) {
      if (!dragging.current) return;
      e.preventDefault();
      move(e.clientX);
    }
    function onPointerUp() {
      dragging.current = false;
    }
    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerup", onPointerUp);
    return () => {
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  function startDrag(e: React.PointerEvent) {
    dragging.current = true;
    const rect = wrapRef.current?.getBoundingClientRect();
    if (rect) {
      const next = ((e.clientX - rect.left) / rect.width) * 100;
      setPct(clamp(next));
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPct((p) => clamp(p - 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPct((p) => clamp(p + 5));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPct(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setPct(100);
    }
  }

  return (
    <figure className="relative">
      <div
        ref={wrapRef}
        onPointerDown={startDrag}
        onKeyDown={onKeyDown}
        role="slider"
        aria-label="Before and after comparison — drag to reveal"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pct)}
        tabIndex={0}
        className="relative aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden border border-line-light bg-cream-50 select-none cursor-ew-resize touch-none focus:outline-none focus:ring-2 focus:ring-emergency"
      >
        {/* Before — full image underneath */}
        <img
          src={pair.before.src}
          alt={pair.before.alt}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          draggable={false}
        />

        {/* After — clipped from the left edge to the divider position */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
        >
          <img
            src={pair.after.src}
            alt={pair.after.alt}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Corner labels */}
        <span className="absolute top-3 left-3 rounded-full bg-ink-900/85 backdrop-blur text-cream-50 text-[10px] font-extrabold uppercase tracking-[0.18em] px-3 py-1.5 pointer-events-none">
          Before
        </span>
        <span className="absolute top-3 right-3 rounded-full bg-emergency text-cream-50 text-[10px] font-extrabold uppercase tracking-[0.18em] px-3 py-1.5 pointer-events-none">
          After
        </span>

        {/* Divider line + handle */}
        <div
          className="absolute inset-y-0 w-[3px] bg-cream-50 pointer-events-none shadow-[0_0_18px_rgba(8,14,28,0.45)]"
          style={{ left: `calc(${pct}% - 1.5px)` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-cream-50 border-2 border-emergency shadow-lg flex items-center justify-center pointer-events-none"
          style={{ left: `${pct}%` }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-emergency"
            aria-hidden="true"
          >
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 18 15 12 9 6" transform="translate(8, 0)" />
          </svg>
        </div>
      </div>
      {pair.caption && (
        <figcaption className="mt-3 text-sm text-ink-500 text-center">
          {pair.caption}
        </figcaption>
      )}
    </figure>
  );
}

function clamp(v: number) {
  return Math.max(0, Math.min(100, v));
}
