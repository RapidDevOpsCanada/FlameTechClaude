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
   * `"inline"` renders a full-width search field in place (used on the
   * 404 page and the mobile drawer).
   * `"compact"` renders a small icon button that opens a full-screen
   * modal overlay (used in the desktop Nav).
   */
  variant?: "inline" | "compact";
  placeholder?: string;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(variant === "inline");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = query.trim() ? searchEntries(query, 10) : [];

  // Focus input + lock body scroll when the compact overlay opens
  useEffect(() => {
    if (variant !== "compact") return;
    if (!open) return;
    requestAnimationFrame(() => inputRef.current?.focus());
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open, variant]);

  // Close compact overlay on Escape (anywhere on the page)
  useEffect(() => {
    if (variant !== "compact") return;
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, variant]);

  // Reset highlight when results change
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

  // ───────── COMPACT (icon button → full-screen overlay) ─────────
  if (variant === "compact") {
    return (
      <>
        <button
          type="button"
          aria-label="Open search"
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-line-dark text-cream-50 hover:border-emergency hover:text-emergency transition-colors"
        >
          <SearchIcon />
        </button>

        {open && (
          <div
            className="fixed inset-0 z-[100] bg-ink-900/85 backdrop-blur-md flex items-start justify-center pt-[12vh] px-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setOpen(false);
                setQuery("");
              }
            }}
          >
            <div className="w-full max-w-2xl">
              {/* Input */}
              <div className="relative">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-ink-500 pointer-events-none">
                  <SearchIcon size={22} />
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder={placeholder}
                  aria-label="Search the site"
                  className="w-full rounded-2xl bg-white border border-line-light pl-14 pr-14 py-5 text-lg text-ink-900 placeholder:text-ink-500 focus:outline-none focus:border-emergency transition-colors shadow-2xl"
                />
                <button
                  type="button"
                  aria-label="Close search"
                  onClick={() => {
                    setOpen(false);
                    setQuery("");
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full hover:bg-cream-100 transition-colors flex items-center justify-center text-ink-500"
                >
                  <Icon name="close" className="text-lg" />
                </button>
              </div>

              {/* Results */}
              {query.trim() && (
                <div className="mt-3 rounded-2xl bg-white border border-line-light overflow-hidden shadow-2xl">
                  {results.length === 0 ? (
                    <div className="px-6 py-10 text-center">
                      <p className="text-base text-ink-700">
                        No matches for{" "}
                        <span className="text-ink-900 font-semibold">
                          &quot;{query}&quot;
                        </span>
                      </p>
                      <p className="text-sm text-ink-500 mt-2">
                        Try a service like &quot;boiler&quot; or a
                        neighbourhood like &quot;Mount Royal&quot;.
                      </p>
                    </div>
                  ) : (
                    <ul className="max-h-[60vh] overflow-y-auto">
                      {results.map((r, i) => (
                        <li key={r.href}>
                          <Link
                            href={r.href}
                            onClick={() => {
                              setOpen(false);
                              setQuery("");
                            }}
                            onMouseEnter={() => setActive(i)}
                            className={`flex items-center gap-4 px-5 py-4 border-b border-line-light/60 last:border-0 transition-colors ${
                              i === active ? "bg-cream-50" : "hover:bg-cream-50"
                            }`}
                          >
                            <span className="shrink-0 w-10 h-10 rounded-lg bg-primary/15 text-primary-deep flex items-center justify-center">
                              <Icon
                                name={
                                  r.kind === "Service"
                                    ? "build"
                                    : r.kind === "Resource"
                                    ? "request_quote"
                                    : "verified"
                                }
                                className="text-lg"
                              />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block font-semibold text-[16px] text-ink-900 truncate">
                                {r.title}
                              </span>
                              <span className="block text-[13px] text-ink-500 truncate mt-0.5">
                                {r.meta}
                              </span>
                            </span>
                            <span className="shrink-0 text-[11px] font-bold uppercase tracking-[0.14em] text-primary px-2.5 py-1 rounded-full bg-primary/10">
                              {r.kind}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {/* Hint footer */}
              {!query.trim() && (
                <p className="text-center text-cream-50/60 text-sm mt-5">
                  Try{" "}
                  <span className="text-cream-50 font-semibold">
                    boiler
                  </span>
                  ,{" "}
                  <span className="text-cream-50 font-semibold">
                    drain cleaning
                  </span>
                  , or{" "}
                  <span className="text-cream-50 font-semibold">
                    Mount Royal
                  </span>
                  . Press{" "}
                  <kbd className="px-1.5 py-0.5 rounded bg-cream-50/15 text-[12px] font-semibold">
                    Esc
                  </kbd>{" "}
                  to close.
                </p>
              )}
            </div>
          </div>
        )}
      </>
    );
  }

  // ───────── INLINE (full-width field in place) ─────────
  return (
    <div className="relative">
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
          className="w-full rounded-full bg-white border border-line-light pl-12 pr-4 py-4 text-base text-ink-900 placeholder:text-ink-500 focus:outline-none focus:border-emergency transition-colors"
        />
      </div>

      {query.trim() && (
        <div className="mt-3 rounded-2xl bg-white border border-line-light overflow-hidden">
          {results.length === 0 ? (
            <div className="px-5 py-6 text-center">
              <p className="text-sm text-ink-500">
                No matches for{" "}
                <span className="text-ink-900 font-semibold">
                  &quot;{query}&quot;
                </span>
              </p>
            </div>
          ) : (
            <ul className="max-h-80 overflow-y-auto">
              {results.map((r, i) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    onClick={() => setQuery("")}
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
  );
}

function SearchIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
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
