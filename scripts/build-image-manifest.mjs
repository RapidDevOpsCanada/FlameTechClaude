#!/usr/bin/env node
/**
 * Generates src/lib/generated/image-manifest.json — the data behind the
 * /grizzly image library.
 *
 * Why build time rather than request time: on Vercel the serverless
 * runtime cannot read /public (served by the CDN, not bundled) or the
 * source tree, so scanning the filesystem inside the page would return
 * an empty library in production while looking fine locally. Doing it
 * during the build, where the whole repo is present, is both correct and
 * faster — the panel then just renders a static import.
 *
 * Runs automatically via the `prebuild` npm script.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, "public");
const IMAGES_DIR = path.join(PUBLIC_DIR, "images");
const OUT = path.join(ROOT, "src", "lib", "generated", "image-manifest.json");
const EXT = /\.(jpe?g|png|webp|gif|avif|svg)$/i;

const RULES = [
  ["Team & About", /\/team\/|shaun|jason|ben-|driedger|mounsey|kristoff/],
  ["Reviews & Badges", /\/reviews\/|review|badge|bbb|google|star/],
  ["Vehicles & Branding", /ftvan|van|logo|brand|financeit|flametech/],
  ["Boilers & Hydronics", /boiler|hydronic|radiant|manifold/],
  ["Furnaces", /furnace|air-?ease/],
  ["Water Heaters & Tankless", /water-?heater|hot-?water|tank|bradford|tankless/],
  ["Water Treatment", /softener|reverse-?osmosis|filtration/],
  ["Air Conditioning & Heat Pumps", /air-?condition|ac-|heat-?pump|humidifier|condenser/],
  ["Plumbing & Fixtures", /plumb|shower|bathroom|toilet|faucet|sink|drain|sump|pipe|poly-?b/],
  ["Before & After", /before|after/],
];

const categorise = (src) => {
  const s = src.toLowerCase();
  for (const [name, test] of RULES) if (test.test(s)) return name;
  return "Uncategorised";
};

function walk(dir, out = []) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    if (e.name.startsWith(".")) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, out);
    else if (EXT.test(e.name)) out.push(full);
  }
  return out;
}

// Everything that can reference an image. Regenerate the list with:
//   grep -rl "/images/" src content
const SOURCE_FILES = [
  "src/lib/services.ts",
  "src/lib/authors.ts",
  "src/lib/featured-image-dimensions.ts",
  "src/lib/reviews-schema.ts",
  "src/app/page.tsx",
  "src/app/layout.tsx",
  "src/app/[slug]/page.tsx",
  "src/app/about/page.tsx",
  "src/app/blog/[slug]/page.tsx",
  "src/app/contact/page.tsx",
  "src/app/financing/page.tsx",
  "src/components/Footer.tsx",
  "src/components/NavClient.tsx",
  "content/reviews.yaml",
];

const haystack = [];
for (const rel of SOURCE_FILES) {
  const full = path.join(ROOT, rel);
  if (fs.existsSync(full)) {
    haystack.push({ label: rel.split("/").pop(), text: fs.readFileSync(full, "utf8") });
  }
}
const blogDir = path.join(ROOT, "content", "blog");
if (fs.existsSync(blogDir)) {
  for (const f of fs.readdirSync(blogDir).filter((f) => /\.mdx?$/i.test(f))) {
    haystack.push({
      label: `blog/${f.replace(/\.mdx?$/i, "")}`,
      text: fs.readFileSync(path.join(blogDir, f), "utf8"),
    });
  }
}

const assets = walk(IMAGES_DIR).map((full) => {
  const src = "/" + path.relative(PUBLIC_DIR, full).split(path.sep).join("/");
  const stat = fs.statSync(full);
  const name = path.basename(full);
  return {
    src,
    name,
    folder:
      path.relative(IMAGES_DIR, path.dirname(full)).split(path.sep).join("/") || "root",
    category: categorise(src),
    bytes: stat.size,
    modified: stat.mtime.toISOString().slice(0, 10),
    usedIn: haystack.filter((h) => h.text.includes(name)).map((h) => h.label),
  };
});

const byCategory = new Map();
for (const a of assets) {
  byCategory.set(a.category, [...(byCategory.get(a.category) ?? []), a]);
}

const manifest = {
  generatedAt: new Date().toISOString(),
  totals: {
    count: assets.length,
    bytes: assets.reduce((n, a) => n + a.bytes, 0),
    unused: assets.filter((a) => a.usedIn.length === 0).length,
  },
  categories: [...byCategory.entries()]
    .map(([name, images]) => ({
      name,
      count: images.length,
      bytes: images.reduce((n, i) => n + i.bytes, 0),
      images: images.sort((a, b) => b.modified.localeCompare(a.modified)),
    }))
    .sort((a, b) => b.count - a.count),
};

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(manifest, null, 2) + "\n");
console.log(
  `image manifest: ${manifest.totals.count} images, ${manifest.categories.length} categories, ${manifest.totals.unused} unused`
);
