"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Icon from "@/components/Icon";
import { searchEntries, type SearchEntry } from "@/lib/search-index";

export default function SiteSearch({
  variant = "inline",
  placeholder = "Search services, neighbourhoods, articles…",
}: {
  /**
   * `"inline"` renders a full-width search field (used on the 404 page).
   * `"compact"` renders an icon button that opens a popover (used in Nav).
   */
  variant?: "inline" | "compact";
  placeholder?: string;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(variant === "inline");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = query.trim() ? searchEntries(query) : [];

  // Close compact popover when clicking outside
  useEffect(() => {
    if (variant === "inline") return;
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open, variant]);

  // Focus input when popover opens
  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  // Reset active highlight when results change
  useEffect(() => {
    setActive(0);
  }, [query]);

  function go(entry: SearchEntry) {
    router.push(entry.href);
    setOpen(variant === "inline");
    setQuery("");
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(results.length - 1, a + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(0, a - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results[active]) go(results[active]);
    } else if (e.key === "Escape") {
      setOpen(variant === "inline");
      setQuery("");
    }
  }

  const inputCls =
    variant === "inline"
      ? "w-full rounded-full bg-white border border-line-light pl-12 pr-4 py-4 text-base text-ink-900 placeholder:text-ink-500 focus:outline-none focus:border-emergency transition-colors"
      : "w-full rounded-full bg-cream-50 border border-line-light pl-11 pr-4 py-3 text-sm text-ink-900 placeholder:text-ink-500 focus:outline-none focus:border-emergency transition-colors";

  return (
    <div ref={wrapRef} className="relative">
      {variant === "compact" && !open && (
        <button
          type="button"
          aria-label="Open search"
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-line-dark text-cream-50 hover:border-emergency hover:text-emergency transition-colors"
        >
          <SearchIcon />
        </button>
      )}

      {(open || variant === "inline") && (
        <div className={variant === "compact" ? "relative w-72 md:w-80" : ""}>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-500 pointer-events-none">
              <SearchIcon />
            </span>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder={placeholder}
              aria-label="Search the site"
              className={inputCls}
            />
            {variant === "compact" && (
              <button
                type="button"
                aria-label="Close search"
                onClick={() => {
                  setOpen(false);
                  setQuery("");
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full hover:bg-cream-100 transition-colors flex items-center justify-center text-ink-500"
              >
                <Icon name="close" className="text-base" />
              </button>
            )}
          </div>

          {query.trim() && (
            <div
              className={
                variant === "compact"
                  ? "absolute left-0 right-0 top-full mt-2 rounded-2xl bg-white border border-line-light shadow-2xl overflow-hidden z-50"
                  : "mt-3 rounded-2xl bg-white border border-line-light overflow-hidden"
              }
            >
              {results.length === 0 ? (
                <div className="px-5 py-6 text-center">
                  <p className="text-sm text-ink-500">
                    No matches for{" "}
                    <span className="text-ink-900 font-semibold">
                      &quot;{query}&quot;
                    </span>
                  </p>
                  <p className="text-xs text-ink-500 mt-2">
                    Try a service like &quot;boiler&quot; or a neighbourhood
                    like &quot;Mount Royal&quot;.
                  </p>
                </div>
              ) : (
                <ul className="max-h-80 overflow-y-auto">
                  {results.map((r, i) => (
                    <li key={r.href}>
                      <Link
                        href={r.href}
                        onClick={() => {
                          setOpen(variant === "inline");
                          setQuery("");
                        }}
                        onMouseEnter={() => setActive(i)}
                        className={`flex items-center gap-3 px-4 py-3 border-b border-line-light/60 last:border-0 transition-colors ${
                          i === active ? "bg-cream-50" : "hover:bg-cream-50"
                        }`}
                      >
                        <span className="shrink-0 w-9 h-9 rounded-lg bg-primary/15 text-primary-deep flex items-center justify-center">
                          <Icon
                            name={
                              r.kind === "Service"
                                ? "build"
                                : r.kind === "Resource"
                                ? "request_quote"
                                : "verified"
                            }
                            className="text-base"
                          />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-semibold text-[14px] md:text-[15px] text-ink-900 truncate">
                            {r.title}
                          </span>
                          <span className="block text-[12px] text-ink-500 truncate">
                            {r.meta}
                          </span>
                        </span>
                        <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.14em] text-primary px-2 py-1 rounded-full bg-primary/10">
                          {r.kind}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
}
