"use client";

import { useMemo, useState } from "react";
import type { ImageCategory } from "@/lib/image-inventory";

function bytes(n: number) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${Math.round(n / 1024)} KB`;
  return `${(n / (1024 * 1024)).toFixed(1)} MB`;
}

export default function ImageBrowser({
  categories,
}: {
  categories: ImageCategory[];
}) {
  const [active, setActive] = useState<string>("All");
  const [query, setQuery] = useState("");
  const [unusedOnly, setUnusedOnly] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const images = useMemo(() => {
    const all = categories.flatMap((c) => c.images);
    const q = query.trim().toLowerCase();
    return all.filter((i) => {
      if (active !== "All" && i.category !== active) return false;
      if (unusedOnly && i.usedIn.length > 0) return false;
      if (q && !i.name.toLowerCase().includes(q) && !i.folder.includes(q))
        return false;
      return true;
    });
  }, [categories, active, query, unusedOnly]);

  const copy = (src: string) => {
    navigator.clipboard?.writeText(src);
    setCopied(src);
    setTimeout(() => setCopied((c) => (c === src ? null : c)), 1400);
  };

  const totalCount = categories.reduce((n, c) => n + c.count, 0);

  return (
    <>
      <section className="mb-8">
        <UploadPanel />
      </section>

      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setActive("All")}
          className={`rounded-full px-3.5 py-1.5 text-xs font-bold border transition-colors ${
            active === "All"
              ? "bg-cream-50 text-ink-900 border-cream-50"
              : "border-line-dark text-cream-50/70 hover:border-cream-50/50"
          }`}
        >
          All · {totalCount}
        </button>
        {categories.map((c) => (
          <button
            key={c.name}
            onClick={() => setActive(c.name)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-bold border transition-colors ${
              active === c.name
                ? "bg-cream-50 text-ink-900 border-cream-50"
                : "border-line-dark text-cream-50/70 hover:border-cream-50/50"
            }`}
          >
            {c.name} · {c.count}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-7">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search filename or folder…"
          className="flex-1 min-w-[220px] rounded-lg bg-ink-800 border border-line-dark px-4 py-2.5 text-sm outline-none focus:border-primary"
        />
        <label className="flex items-center gap-2 text-xs font-bold text-cream-50/70 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={unusedOnly}
            onChange={(e) => setUnusedOnly(e.target.checked)}
            className="accent-primary w-4 h-4"
          />
          Unused only
        </label>
        <span className="text-xs text-cream-50/40 tabular-nums">
          {images.length} shown
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {images.map((img) => (
          <figure
            key={img.src}
            className="rounded-xl border border-line-dark bg-ink-800 overflow-hidden flex flex-col"
          >
            <div className="relative aspect-[4/3] bg-ink-900 flex items-center justify-center overflow-hidden">
              {/* Plain img: these are arbitrary user-managed assets, not
                  layout-critical hero imagery, so next/image optimisation
                  buys nothing here and complicates the upload flow. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.name}
                loading="lazy"
                className="w-full h-full object-contain"
              />
              {img.usedIn.length === 0 && (
                <span className="absolute top-2 left-2 rounded-full bg-primary text-ink-900 text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5">
                  Unused
                </span>
              )}
            </div>
            <figcaption className="p-3 flex-1 flex flex-col gap-1.5">
              <p className="text-[12px] font-bold leading-snug break-all">
                {img.name}
              </p>
              <p className="text-[11px] text-cream-50/40 tabular-nums">
                {img.folder} · {bytes(img.bytes)} · {img.modified}
              </p>
              {img.usedIn.length > 0 && (
                <p className="text-[11px] text-cream-50/55 leading-snug">
                  Used in{" "}
                  <span className="text-emergency font-semibold">
                    {img.usedIn.length}
                  </span>
                  {img.usedIn.length <= 3 && (
                    <span className="text-cream-50/40">
                      {" "}
                      — {img.usedIn.join(", ")}
                    </span>
                  )}
                </p>
              )}
              <button
                onClick={() => copy(img.src)}
                className="mt-auto rounded-md border border-line-dark hover:border-cream-50/50 transition-colors text-[11px] font-bold py-1.5"
              >
                {copied === img.src ? "Copied" : "Copy path"}
              </button>
            </figcaption>
          </figure>
        ))}
      </div>

      {images.length === 0 && (
        <p className="text-cream-50/40 text-sm py-16 text-center">
          Nothing matches those filters.
        </p>
      )}
    </>
  );
}

function UploadPanel() {
  const [state, setState] = useState<{
    status: "idle" | "busy" | "done" | "error";
    message?: string;
    url?: string;
  }>({ status: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setState({ status: "busy" });
    try {
      const res = await fetch("/grizzly/api/upload/", {
        method: "POST",
        body: form,
      });
      const json = await res.json();
      if (!res.ok) {
        setState({ status: "error", message: json.error ?? "Upload failed" });
        return;
      }
      setState({ status: "done", message: json.message, url: json.url });
    } catch {
      setState({ status: "error", message: "Network error" });
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-line-dark bg-ink-800 p-6"
    >
      <h2 className="font-display text-lg font-extrabold mb-1">Upload</h2>
      <p className="text-cream-50/45 text-xs mb-4 leading-relaxed">
        JPG, PNG or WebP, up to 5 MB. Uploaded files land in the library and
        can be referenced anywhere on the site by their path.
      </p>
      <div className="flex flex-wrap gap-3 items-center">
        <input
          type="file"
          name="file"
          accept="image/jpeg,image/png,image/webp"
          required
          className="text-xs file:mr-3 file:rounded-full file:border-0 file:bg-cream-50 file:text-ink-900 file:font-bold file:px-4 file:py-2 file:text-xs"
        />
        <select
          name="folder"
          className="rounded-lg bg-ink-900 border border-line-dark px-3 py-2 text-xs outline-none focus:border-primary"
          defaultValue="uploads"
        >
          <option value="uploads">uploads</option>
          <option value="team">team</option>
          <option value="reviews">reviews</option>
          <option value="portfolio">portfolio</option>
        </select>
        <button
          type="submit"
          disabled={state.status === "busy"}
          className="rounded-full bg-emergency hover:bg-emergency-deep disabled:opacity-50 transition-colors font-extrabold text-xs px-5 py-2.5"
        >
          {state.status === "busy" ? "Uploading…" : "Upload"}
        </button>
      </div>

      {state.status === "error" && (
        <p className="mt-4 text-xs text-cream-50 bg-emergency/15 border border-emergency/40 rounded-lg px-3 py-2.5 leading-relaxed">
          {state.message}
        </p>
      )}
      {state.status === "done" && (
        <p className="mt-4 text-xs text-cream-50 bg-primary/15 border border-primary/40 rounded-lg px-3 py-2.5 leading-relaxed break-all">
          {state.message}
          {state.url && (
            <>
              {" "}
              <code className="text-primary">{state.url}</code>
            </>
          )}
        </p>
      )}
    </form>
  );
}
