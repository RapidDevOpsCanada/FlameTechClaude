#!/usr/bin/env node
/**
 * Image optimization pipeline. Two jobs:
 *   1. Convert source JPGs/PNGs over OPTIMIZE_THRESHOLD bytes to WebP
 *      and codemod every reference in MDX/TS/TSX/CSS to point at the
 *      new file. Original is deleted once the WebP is smaller.
 *   2. Refresh src/lib/featured-image-dimensions.ts with width/height
 *      for every raster image under public/images/. Replaces the old
 *      hand-curated map.
 *
 * Usage:
 *   node scripts/optimize-images.mjs              # operate on every
 *                                                 # raster file under
 *                                                 # public/images/
 *   node scripts/optimize-images.mjs <files...>   # only process the
 *                                                 # files passed (used
 *                                                 # by the pre-commit
 *                                                 # hook with staged
 *                                                 # files)
 *
 * Set DRY_RUN=1 to print actions without writing.
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const imagesRoot = path.join(repoRoot, "public", "images");
const dimensionsFile = path.join(
  repoRoot,
  "src",
  "lib",
  "featured-image-dimensions.ts",
);

const OPTIMIZE_THRESHOLD = 60 * 1024; // bytes
const WEBP_QUALITY = 85;
const DRY_RUN = process.env.DRY_RUN === "1";

const RASTER_EXT = new Set([".jpg", ".jpeg", ".png"]);
const ALL_DIM_EXT = new Set([".jpg", ".jpeg", ".png", ".webp"]);

/** Walk a directory tree and yield every regular file path. */
async function* walk(dir) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.isFile()) yield p;
  }
}

/** Collect every raster file under public/images/. */
async function collectAllRasters() {
  const out = [];
  for await (const p of walk(imagesRoot)) {
    if (RASTER_EXT.has(path.extname(p).toLowerCase())) out.push(p);
  }
  return out;
}

/** Resolve CLI arg paths to absolute paths. Filters to images under
 *  public/images/. Files that don't exist are silently skipped (a
 *  stage commit can include deletions). */
async function resolveCliTargets(args) {
  const out = [];
  for (const arg of args) {
    const abs = path.isAbsolute(arg) ? arg : path.join(repoRoot, arg);
    const ext = path.extname(abs).toLowerCase();
    if (!RASTER_EXT.has(ext)) continue;
    if (!abs.startsWith(imagesRoot + path.sep) && abs !== imagesRoot) continue;
    try {
      const stat = await fs.stat(abs);
      if (stat.isFile()) out.push(abs);
    } catch {
      // file removed/renamed since stage; skip.
    }
  }
  return out;
}

/** Convert a single raster file to .webp at the same basename.
 *  Returns { ok, action, before, after, source, target } where action
 *  is "kept" | "converted" | "skipped". */
async function maybeConvert(file) {
  const stat = await fs.stat(file);
  if (stat.size <= OPTIMIZE_THRESHOLD) {
    return { ok: true, action: "skipped", before: stat.size, source: file };
  }
  const target = file.replace(/\.(jpe?g|png)$/i, ".webp");
  if (target === file) {
    return { ok: false, action: "skipped", source: file };
  }
  // If a webp with that exact name already exists and is fresher,
  // assume it's the optimised version — just delete the source.
  let alreadyWebp = false;
  try {
    const ws = await fs.stat(target);
    alreadyWebp = ws.mtimeMs >= stat.mtimeMs;
  } catch {
    /* no existing webp */
  }
  if (alreadyWebp) {
    if (!DRY_RUN) await fs.unlink(file);
    return {
      ok: true,
      action: "converted",
      before: stat.size,
      after: (await fs.stat(target)).size,
      source: file,
      target,
    };
  }

  if (DRY_RUN) {
    return {
      ok: true,
      action: "would-convert",
      before: stat.size,
      source: file,
      target,
    };
  }

  await sharp(file)
    .webp({ quality: WEBP_QUALITY, effort: 4 })
    .toFile(target);

  const newStat = await fs.stat(target);
  // Only commit to the swap if we actually saved bytes. Otherwise keep
  // the original and remove the inferior webp.
  if (newStat.size >= stat.size) {
    await fs.unlink(target);
    return {
      ok: true,
      action: "kept",
      before: stat.size,
      after: newStat.size,
      source: file,
    };
  }
  await fs.unlink(file);
  return {
    ok: true,
    action: "converted",
    before: stat.size,
    after: newStat.size,
    source: file,
    target,
  };
}

/** Replace every reference to the old basename inside mdx/ts/tsx/yaml/css
 *  files with the new basename. Scoped narrowly: we only swap the exact
 *  full path so a stray ".jpg" elsewhere can't be hit. */
async function rewriteReferences(swaps) {
  if (swaps.length === 0) return [];
  const SOURCE_EXTS = new Set([
    ".tsx",
    ".ts",
    ".mdx",
    ".md",
    ".yaml",
    ".yml",
    ".css",
    ".json",
    ".html",
  ]);
  const SCAN_ROOTS = [
    path.join(repoRoot, "src"),
    path.join(repoRoot, "content"),
    path.join(repoRoot, "app"),
  ];

  const touched = new Set();
  for (const root of SCAN_ROOTS) {
    for await (const file of walk(root)) {
      if (!SOURCE_EXTS.has(path.extname(file))) continue;
      let body;
      try {
        body = await fs.readFile(file, "utf8");
      } catch {
        continue;
      }
      let updated = body;
      for (const swap of swaps) {
        if (updated.includes(swap.from)) {
          updated = updated.split(swap.from).join(swap.to);
        }
      }
      if (updated !== body) {
        if (!DRY_RUN) await fs.writeFile(file, updated, "utf8");
        touched.add(file);
      }
    }
  }
  return [...touched];
}

/** Read width/height for every raster + webp under public/images/. */
async function collectDimensions() {
  const map = new Map();
  for await (const file of walk(imagesRoot)) {
    const ext = path.extname(file).toLowerCase();
    if (!ALL_DIM_EXT.has(ext)) continue;
    try {
      const meta = await sharp(file).metadata();
      if (meta.width && meta.height) {
        const rel = "/" + path.relative(path.join(repoRoot, "public"), file).split(path.sep).join("/");
        map.set(rel, { w: meta.width, h: meta.height });
      }
    } catch {
      /* unreadable; skip */
    }
  }
  return new Map([...map.entries()].sort());
}

function renderDimensionsModule(map) {
  const lines = [
    "// AUTO-GENERATED by scripts/optimize-images.mjs.",
    "// Re-run that script (or the pre-commit hook) after dropping a new",
    "// image into public/images/. Hand edits will be overwritten.",
    "",
    "export const featuredImageDimensions: Record<string, { w: number; h: number }> = {",
  ];
  for (const [p, { w, h }] of map) {
    lines.push(`  ${JSON.stringify(p)}: { w: ${w}, h: ${h} },`);
  }
  lines.push(
    "};",
    "",
    "export function getFeaturedImageDimensions(",
    "  path: string | null | undefined,",
    "): { w: number; h: number } | null {",
    "  if (!path) return null;",
    "  return featuredImageDimensions[path] ?? null;",
    "}",
    "",
  );
  return lines.join("\n");
}

function fmtKb(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

async function main() {
  const cliArgs = process.argv.slice(2).filter((a) => a && !a.startsWith("-"));
  const targets =
    cliArgs.length > 0 ? await resolveCliTargets(cliArgs) : await collectAllRasters();

  const swaps = [];
  let bytesIn = 0;
  let bytesOut = 0;

  for (const file of targets) {
    const r = await maybeConvert(file);
    if (!r.ok) continue;
    if (r.action === "skipped") continue;
    if (r.action === "kept") {
      console.log(
        `  kept   ${path.relative(repoRoot, r.source)}  (${fmtKb(
          r.before,
        )} → ${fmtKb(r.after)} not smaller)`,
      );
      continue;
    }
    if (r.action === "would-convert") {
      console.log(
        `  would  ${path.relative(repoRoot, r.source)}  (${fmtKb(r.before)})`,
      );
      continue;
    }
    if (r.action === "converted") {
      bytesIn += r.before;
      bytesOut += r.after;
      const fromRel =
        "/" + path.relative(path.join(repoRoot, "public"), r.source).split(path.sep).join("/");
      const toRel =
        "/" + path.relative(path.join(repoRoot, "public"), r.target).split(path.sep).join("/");
      swaps.push({ from: fromRel, to: toRel });
      console.log(
        `  webp   ${path.relative(repoRoot, r.source)} → ${path.relative(
          repoRoot,
          r.target,
        )}  (${fmtKb(r.before)} → ${fmtKb(r.after)})`,
      );
    }
  }

  if (swaps.length > 0) {
    const touched = await rewriteReferences(swaps);
    if (touched.length > 0) {
      console.log(
        `  links  rewrote references in ${touched.length} file(s):`,
      );
      for (const t of touched) console.log(`           ${path.relative(repoRoot, t)}`);
    }
  }

  // Always refresh the dimensions map — covers fresh additions even
  // when nothing was converted this run.
  const map = await collectDimensions();
  const next = renderDimensionsModule(map);
  let prev = "";
  try {
    prev = await fs.readFile(dimensionsFile, "utf8");
  } catch {
    /* first run */
  }
  if (prev !== next) {
    if (!DRY_RUN) await fs.writeFile(dimensionsFile, next, "utf8");
    console.log(
      `  dims   refreshed ${path.relative(
        repoRoot,
        dimensionsFile,
      )} (${map.size} entries)`,
    );
  }

  if (swaps.length > 0) {
    const saved = bytesIn - bytesOut;
    console.log(
      `\n  saved  ${fmtKb(bytesIn)} → ${fmtKb(bytesOut)} (${fmtKb(saved)} smaller)`,
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
