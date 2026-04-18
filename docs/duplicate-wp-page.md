# Duplicating a WordPress Page — Playbook

We're migrating ~50 WordPress pages from flametechplumbing.ca into this Next.js
site. This doc captures the repeatable process so each page takes ~10 minutes
instead of 30.

The goal for every page: **content verbatim from the WP database**, images
pulled locally, Yoast SEO meta preserved, JSON-LD schema emitted, and the new
page mounted at `/{slug}` (matching the live URL structure).

---

## One-time setup (already done, reference only)

1. The `.wpress` export lives at `~/Downloads/flametechplumbing-ca-…wpress`.
2. It was extracted to `~/Downloads/flametech-extracted/` with:

   ```bash
   npx --yes wpress-extract <file>.wpress -o ~/Downloads/flametech-extracted
   ```

   This produced `database.sql` (46 MB) and `uploads/` (130 MB).

3. `scripts/extract-post.mjs` parses the All-in-One WP Migration SQL dump and
   prints any page's `post_title`, `post_content`, `post_excerpt`, and
   metadata to stdout given its slug.

4. Bulk `uploads/` folders stay **out of the repo** — `.gitignore` excludes
   `/public/images/2022/`, `2023/`, `2025/`, `2026/`. Only images actually used
   by a committed page get force-added.

---

## Per-page workflow

Pick the next page from the backlog (e.g. `boiler-installation`). Then:

### 1. Extract the post from the DB

```bash
node scripts/extract-post.mjs <slug> > /tmp/post.txt
```

Inspect `/tmp/post.txt`. Each page usually has one real row (the published
page) and sometimes a duplicate draft — use the one with full HTML in
`post_content`.

### 2. Pull the Yoast SEO meta

Run (replace `<POST_ID>` with the ID printed by the extract script):

```bash
grep -oE "\([0-9]+,<POST_ID>,'_yoast_wpseo_(title|metadesc|focuskw)'[^)]*" \
  ~/Downloads/flametech-extracted/database.sql
```

You'll get three fields to copy into the service entry:

- `_yoast_wpseo_title` → `seoTitle` (replace `%%title%%` with the post_title
  if it contains that template token)
- `_yoast_wpseo_metadesc` → `seoDescription`
- `_yoast_wpseo_focuskw` → goes into `seoKeywords`

### 3. Identify the images

```bash
grep -oE 'src="https://flametechplumbing.ca/wp-content/uploads/[^"]+"' /tmp/post.txt \
  | sort -u
```

For each unique URL, translate to the local path:

```
https://flametechplumbing.ca/wp-content/uploads/2025/12/air-ease-ac.png
->  /images/2025/12/air-ease-ac.png
```

WP auto-resized variants (`-1024x531.jpg`, `-768x398.jpg`, etc.) have the same
original filename without the `-WxH`; always reference the **original**:

```
.../2023/03/main-slider-2-2-1024x531.jpg  →  /images/2023/03/main-slider-2-2.jpg
```

### 4. Copy the referenced images into public/

```bash
# For each image referenced by this page:
mkdir -p public/images/<year>/<month>
cp ~/Downloads/flametech-extracted/uploads/<year>/<month>/<file>.<ext> \
   public/images/<year>/<month>/<file>.<ext>
```

Only copy files that are actually referenced. Don't bulk-copy whole month
folders — they drag in dozens of unused images.

**⚠️ Always `git add -f` the new images.** `.gitignore` blocks
`/public/images/{2022,2023,2025,2026}/`, so a plain `git add -A` will
silently skip them. Either:

```bash
git add -f public/images/2026/04/new-file.webp
```

or stage each explicitly by filename.

### 5. Update `src/lib/services.ts`

Find the placeholder entry for the slug and replace it. Fields to fill in:

| Field                | Source                                                |
| -------------------- | ----------------------------------------------------- |
| `title`              | The page's visible `<h1>` (not `post_title`)          |
| `lead`               | First paragraph of the hero                           |
| `heroBody[]`         | Remaining hero paragraphs                             |
| `heroSubhead`        | Any H6 between the hero and the first H2 (optional)   |
| `heroBadgeImage`     | Secondary hero image (e.g. REVIEWS1) if present       |
| `heroImage`          | Primary hero product/feature image                    |
| `seoTitle`           | Yoast `_wpseo_title` (resolved template)              |
| `seoDescription`     | Yoast `_wpseo_metadesc`                               |
| `seoKeywords`        | Yoast focus keyword + a handful of related terms      |
| `richContent.sections` | Each H2 becomes a section; H3/H5 items nest below  |
| `richContent.promo`  | Any warranty / special-offer block                    |
| `richContent.faq`    | FAQ section (preserve intro paragraph as first item)  |
| `sectionImages`      | Standalone image inside a section (not tied to item)  |
| `sidebar`            | `{ title, subtitle, bullets[] }` for the per-service sticky sidebar. Omit for generic copy |
| `stats`              | 4 `{ number, label, icon? }` for the strip under the hero. Omit for a generic trust set. `icon` is optional and maps to the shared Icon component name set. |
| `quoteFormLabel`     | Short noun used in the quote-form heading ("AC", "boiler", "drain"). Omit to use a category-based default ("plumbing" / "heating" / "AC" / "water-systems"). |
| `financing`          | `{ detail? }` — **only** for bigger-ticket services (AC install, furnaces, boilers, heat pumps, PolyB, tankless, water softeners, hot water tanks). When present, the hero renders a "Financing Available" badge with the Financeit logo. `detail` is an optional micro-line underneath. Leave undefined for service calls, repairs, humidifiers, drain cleaning, faucet fixes, etc. |
| `timeline`           | Optional service-specific process steps (`{ heading?, intro?, steps: [{icon, title, body}] }`). Omit to use the generic 4-step timeline (Call → Quote → Schedule → Service). |
| `quoteFormPlaceholder` | Optional textarea placeholder for the service's quote form (e.g. AC page: "AC blowing warm air, outside unit making noise…"). Falls back to a generic placeholder. |

Keep paragraphs **verbatim** from the DB — including the slightly awkward
phrasing. The user prefers accuracy over polish.

**About the optional customization fields** (`sidebar`, `stats`,
`quoteFormLabel`, `financing`): every service page inherits sensible
defaults if you skip them. Only fill them in when you have
service-specific content worth showing:

- `sidebar.title` / `sidebar.subtitle` / `sidebar.bullets` — write them
  as if the user has just landed and you're pitching this service
  specifically in ~50 words total
- `stats` — 4 punchy number+label pairs relevant to the service (e.g.
  "12-YR AirEase warranty", "5.0★ Google rated", "FREE estimates",
  "ANY make or model"). Add an `icon` to each for visual scanability.
- `quoteFormLabel` — a short noun used in the quote-form heading ("Get a
  free **AC** quote.") Omit for a category-based default.
- `timeline` — override the 4-step "How we work" block when the
  service has a unique process (e.g. PolyB replacement's multi-day
  walkthrough). Otherwise let the template default kick in.
- `quoteFormPlaceholder` — write a placeholder that echoes the
  service's common pain points ("AC blowing warm air…", "no hot water,
  pilot won't light…"). Helps completion rates.
- `financing` — *bigger-ticket services only*. AC installs, furnaces,
  boilers, heat pumps, PolyB replacement, tankless heaters, hot water
  tanks, and water softeners all justify a "Financing Available" badge
  with the Financeit logo beside the social-proof row. Service calls,
  repairs, drain cleaning, faucet fixes, humidifier installs — leave
  it off.

An inline Google review is pulled automatically from the DB between the
first two body sections — no data entry required.

### 6. Verify the build

```bash
npx next build 2>&1 | tail -20
```

The slug should show up under `● /[slug]` in the build output, and TypeScript
should pass.

### 7. Smoke-test locally (optional)

```bash
npx next dev
# visit http://localhost:3000/<slug>
```

Check: hero renders all paragraphs, section images load, FAQ expands, OG tags
and JSON-LD are in the HTML source (`view-source:` and search for
"application/ld+json").

### 8. Commit + push

Stage only the images + code changes for this page. Example:

```bash
git add \
  public/images/<year>/<month>/<new-files> \
  src/lib/services.ts \
  src/app/\[slug\]/page.tsx   # only if the template changed
```

Commit with a focused message:

```
Duplicate /<slug> from WP DB + SEO

- Verbatim content sourced from wp_posts row <ID>
- Yoast meta preserved (title + description + focus keyword)
- N new images: <list>
- JSON-LD Service/Breadcrumb/FAQ/WebPage emitted

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
```

Then `git push origin main`.

---

## Standards to keep consistent across all 50+ pages

### URL

The page lives at `/{slug}` matching the WP slug exactly. No `/services/…`
prefix. The 301 redirect in `next.config.mjs` handles old URLs.

### Heading structure

- Page has **one `<h1>`** — `service.title`
- Section headings are `<h2>`
- Item headings inside a section are `<h3>` (rendered visually as larger
  bold text, but semantically h3)
- FAQ questions are `<summary>` inside `<details>`

### Images

- Always reference the **original**, never a WP-generated resize
- Alt text: use the image's alt from the WP block if set; otherwise write a
  short descriptive alt that mentions what's in the shot + Calgary where
  relevant (helps image search)
- File paths live under `/public/images/<year>/<month>/<file>` so the URL
  path mirrors WP's upload structure

### Hero image fit: `contain` vs `cover`

Every `heroImage` takes an optional `fit` field controlling how it fills
the hero frame:

- **`"contain"`** (default): for product renders / cutouts (e.g.
  `air-ease-ac.png`, `navine-boiler.png`). Shows the whole image centered
  on a cream gradient card — looks like a product display.
- **`"cover"`**: for lifestyle or real install photos (e.g.
  `Furnace-after-len.webp`). Fills the frame edge-to-edge by cropping.
  Use this whenever the source image is a portrait photo, site photo,
  or anything where `contain` leaves big empty cream borders.

Rule of thumb: if the image has a transparent/white product background
→ `contain`. If it's a real photo with a scene in it → `cover`.

### SEO

Every service page emits:

1. `generateMetadata` → title, description, canonical, OpenGraph, Twitter card
2. `<script type="application/ld+json">` with `@graph` containing:
   - `Service` (with `provider` LocalBusiness + `areaServed` Calgary)
   - `BreadcrumbList`
   - `FAQPage` (only if `richContent.faq` is set)
   - `WebPage`

The root layout additionally injects a baseline `WebSite` + `LocalBusiness`
schema so even non-service pages have brand context.

---

## Gotchas

- **Duplicate posts in the DB** — some slugs appear twice (old draft + the
  real page). Use the row with `post_status = 'publish'` AND full HTML in
  `post_content`. The extract script prints all matches so compare IDs.

- **Kadence block comments** — the `post_content` is wrapped in
  `<!-- wp:kadence/... -->` markers. Strip those visually when reading; the
  real HTML (h1/h2/p/figure) sits inside. Don't include the block comments
  in `services.ts`.

- **FAQ questions vs. answers** — in the Kadence accordion format, the DB
  often stores only the answers as free paragraphs. The questions come from
  a sibling accordion setting. If you can't find the question text in
  `post_content`, check `wp_options` or just re-scrape the live rendered
  page with WebFetch to grab the question labels:

  ```
  WebFetch: https://flametechplumbing.ca/<slug>/
  prompt: "List the FAQ question titles in order"
  ```

- **`%%title%%` Yoast tokens** — the stored `_yoast_wpseo_title` often looks
  like `%%title%% %%page%% - Promo!`. Resolve `%%title%%` to the `post_title`
  before saving.

- **Character encoding** — SQL escapes `'` as `\'`. The extract script
  already decodes these; just copy the output as-is.

- **Image URLs in HTML** — the src attribute usually points to the
  `-WxH.jpg` resized variant, not the original. Always strip the `-WxH`
  segment before mapping to the local path.

---

## Backlog status

**Done:**

- [x] `/air-conditioning`
- [x] `/boiler-service-calgary`
- [x] `/furnaces`
- [x] `/high-efficiency-furnaces-calgary`
- [x] `/boiler-installation-calgary`
- [x] `/boiler-repair-calgary`
- [x] `/heat-pumps-calgary`
- [x] `/drain-cleaning-calgary`
- [x] `/water-softener`
- [x] `/bathroom-plumbing-calgary`
- [x] `/shower-plumbing-calgary`
- [x] `/emergency-plumber-calgary`
- [x] `/polyb-plumbing-calgary`
- [x] `/tankless-water-heaters`
- [x] `/garage-heaters-calgary`
- [x] `/humidifiers-calgary`
- [x] `/hot-water-tanks`
- [x] `/hot-water-tank-replacement-calgary`

**Todo:** 🎉 All 18 service pages migrated from WP.

**Note on slug naming:** original WP URLs often include the city
("boiler-service-calgary", "furnace-calgary") and we're matching those
verbatim. Check the live URL before committing to a slug; rename the
placeholder in `services.ts` + Nav + Footer if needed.

Plus any non-service pages the user wants migrated (About, Service Areas,
Blog posts).
