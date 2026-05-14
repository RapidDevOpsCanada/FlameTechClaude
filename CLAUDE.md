# CLAUDE.md — FlameTech Plumbing site

Next.js 16 site for FlameTech Plumbing & Heating, a residential plumbing and heating business in Calgary, Alberta. Replaces an older WordPress site at flametechplumbing.ca. Owners: Shaun Kristoff (25+ years in the trade) and Jason Mounsey (20+ years, hydronics focus).

## Project layout

- Service and neighbourhood pages: `src/lib/services.ts` → rendered by `src/app/[slug]/page.tsx`.
- Blog articles: one MDX file per article at `content/blog/<slug>.mdx`. Read from the filesystem at build time. Not in the database.
- Lead form: `src/app/api/lead/route.ts` writes to Postgres `leads` table.
- Reviews: one YAML file at `content/reviews.yaml`. Read from the filesystem at build time. Not in the database.
- Components: `src/components/`. Tailwind 3.

## Publishing a blog article

Create one file at `content/blog/<slug>.mdx`. The slug is the filename: `content/blog/calgary-frozen-pipes.mdx` becomes `/blog/calgary-frozen-pipes`. Use lowercase, hyphens, no stop words.

### Required frontmatter

```yaml
---
title: "Plain-English title under 70 characters"
excerpt: "One or two sentences. Shown on the blog index and used as the meta description. Under 160 characters."
category: "Plumbing"           # Plumbing, Heating, Air Conditioning, Water Heaters, Boilers, Furnaces, or Maintenance
category_slug: "plumbing"      # lowercase, hyphenated
author: "Shaun Kristoff"       # or "Jason Mounsey", or "FlameTech Team"
read_time: 5                   # integer minutes, rounded honestly
published_at: "2026-05-13"     # YYYY-MM-DD
featured_image: "/images/2026/05/article-slug.jpg"   # optional
share_count: 0                 # optional, defaults to 0
---
```

The Zod schema in `src/lib/articles-schema.ts` is the source of truth. If `next build` rejects an article, fix the frontmatter — don't loosen the schema.

## Voice

Write like an experienced tradesperson explaining a problem to a homeowner. Not a content-marketing agency, not a thought-leader, not a chatbot.

- Plain English. Short sentences when they're enough.
- Specific over general. "We replaced more hot water tanks in Chaparral last winter than in any other SE Calgary community" beats "we have lots of experience".
- Local detail when it earns its place: Calgary's hard water, chinooks, clay soil, the 2004–2008 SE Calgary build wave, Poly-B prevalence in 80s/90s homes, condensate freezing in extreme cold, etc.
- Honest. If a repair won't fix the underlying issue, say so. Don't recommend services that aren't warranted.

## What not to do

- No emojis.
- No "Introduction" or "Conclusion" headings.
- No "In conclusion", "ultimately", "in summary", "let's dive in", "rest assured", "ever wondered", "look no further", "in today's fast-paced world".
- No raw HTML in MDX. Markdown only. No `<h2 class="wp-block-heading">` or other WP-era class names.
- No invented numbers. If you don't have a real statistic, don't write one.
- No keyword stuffing. The focus keyword belongs in the title, first paragraph, and maybe one H2. Stop there.
- No "Calgary's most trusted" or other empty superlatives. Specific claims only.

## Structure

- `##` for H2, `###` for H3. The frontmatter `title` renders as H1 — never use `#` in the body.
- Bullet lists with `-`. Numbered lists only when order matters.
- Bold sparingly, for scannable terms, not for emphasis-as-drama.
- Internal links to service pages using slugs from `src/lib/services.ts`. Example: `[hot water tank replacement](/hot-water-tank-replacement-calgary)`.
- Internal links to other articles where helpful: `[our guide on frozen pipes](/blog/calgary-frozen-pipes-guide)`.
- One CTA at the end max. The phone number is `587-834-3668`. Contact page is `/contact`. Don't pepper CTAs through the body.

## Length

- Quick fixes or Q&A posts: 400–700 words.
- How-to articles: 800–1500 words.
- Cornerstone guides: 1500–2500 words.

A tight 900 words beats a padded 1500. Cut filler.

## Images

- Path: `/public/images/<year>/<month>/<descriptive-name>.<ext>`.
- WebP or JPG. Originals under 500 KB.
- Alt text required: `![Frozen copper pipe in a Calgary basement](/images/2026/05/frozen-pipe.jpg)`.

## Before declaring an article done

Run `npm run build` locally. If frontmatter is invalid or an internal link points to a missing route, the build will tell you.

## Other repo rules

- Do not restore `src/app/api/seed/route.ts` under any name. It was a destructive public endpoint and was removed deliberately. Reviews live in `content/reviews.yaml` — read from the filesystem at build time.
- Do not use `localStorage` or `sessionStorage`. They are not used anywhere in this codebase.
- Tailwind 3 only. Don't introduce Tailwind 4 or unrelated UI libraries.
- The lead form notifies the owners via Resend (email) and Twilio (SMS) in addition to writing the row to Postgres. Wiring lives in `src/lib/lead-notifications.ts`. Both channels gate on env vars (`RESEND_API_KEY` + `LEAD_NOTIFY_EMAIL`; `TWILIO_ACCOUNT_SID` + `TWILIO_AUTH_TOKEN` + `TWILIO_FROM` + `TWILIO_TO`) and fail open — a missing key or flaky provider must never turn the form response red on a successful DB save.
- The `StickyCallBar` component currently returns `null` — it's a stub. Imports of it from pages should be left in place; the component will be implemented later.
