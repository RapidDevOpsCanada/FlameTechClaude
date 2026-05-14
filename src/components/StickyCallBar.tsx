"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/Icon";

/**
 * Mobile-only sticky call-to-call bar. Slides in once the user has
 * scrolled past the hero (configurable via SHOW_AT_SCROLL_Y) so it
 * doesn't compete with the always-visible utility-bar phone link in
 * the nav. Dismissable per-session; remains hidden for the rest of
 * the tab's lifetime once closed.
 */
const SHOW_AT_SCROLL_Y = 800;

export default function StickyCallBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) {
      setVisible(false);
      return;
    }
    let raf = 0;
    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setVisible(window.scrollY > SHOW_AT_SCROLL_Y);
      });
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed bottom-3 left-3 right-3 z-40 md:hidden transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "translate-y-[150%]"
      }`}
    >
      <div className="flex items-center gap-2 rounded-full bg-ink-900 border border-line-dark shadow-2xl pl-2 pr-1 py-1">
        <a
          href="tel:+15878343668"
          aria-label="Call FlameTech at 587-834-3668"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-emergency text-cream-50 font-extrabold uppercase tracking-tight px-4 py-3 text-[13px] hover:bg-emergency-deep transition-colors"
        >
          <Icon name="call" className="text-base" />
          Call 587-834-3668
        </a>
        <button
          type="button"
          aria-label="Dismiss"
          onClick={() => setDismissed(true)}
          className="w-9 h-9 rounded-full flex items-center justify-center text-cream-50/75 hover:text-cream-50"
        >
          <Icon name="close" className="text-lg" />
        </button>
      </div>
    </div>
  );
}
