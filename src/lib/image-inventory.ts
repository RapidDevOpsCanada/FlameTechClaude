import manifest from "./generated/image-manifest.json";

/**
 * The /grizzly image library, read from a manifest generated at build
 * time by scripts/build-image-manifest.mjs (wired to the `prebuild` npm
 * script).
 *
 * This is deliberately NOT a runtime filesystem scan. On Vercel the
 * serverless runtime cannot read /public — it is served by the CDN, not
 * bundled into the function — nor is the source tree reliably present.
 * A runtime scan looks fine locally and returns an empty library in
 * production. Generating during the build, where the whole repo exists,
 * is both correct and instant to render.
 *
 * Consequence worth knowing: the library reflects the last deploy. An
 * uploaded image appears here once the site rebuilds.
 */

export type ImageAsset = {
  /** Web path, e.g. /images/2026/04/Boiler.webp */
  src: string;
  name: string;
  /** Folder under /public/images, e.g. "2026/04" or "team" */
  folder: string;
  category: string;
  bytes: number;
  /** ISO date, file mtime */
  modified: string;
  /** Source files that reference this image */
  usedIn: string[];
};

export type ImageCategory = {
  name: string;
  count: number;
  bytes: number;
  images: ImageAsset[];
};

export type ImageManifest = {
  generatedAt: string;
  totals: { count: number; bytes: number; unused: number };
  categories: ImageCategory[];
};

export function getImageInventory(): ImageManifest {
  return manifest as ImageManifest;
}

export function formatBytes(n: number): string {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${Math.round(n / 1024)} KB`;
  return `${(n / (1024 * 1024)).toFixed(1)} MB`;
}
