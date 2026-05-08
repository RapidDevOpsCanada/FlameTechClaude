"use client";

import { useEffect } from "react";
import { sendGTMEvent } from "@next/third-parties/google";

// Global delegated click listener for any anchor whose href starts with
// "tel:". Fires a phone_call_initiated GTM event once per click so Google
// Ads / GA4 can attribute the lead. Single listener on document keeps the
// individual <a href="tel:..."> elements unchanged across the site.
export default function TelClickTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest("a[href^='tel:']") as HTMLAnchorElement | null;
      if (!anchor) return;
      const number = anchor.getAttribute("href")?.replace(/^tel:/, "") ?? "";
      sendGTMEvent({ event: "phone_call_initiated", phone_number: number });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
