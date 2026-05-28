/** @type {import('next').NextConfig} */
const nextConfig = {
  // Canonical URLs have a trailing slash to match the legacy WordPress
  // site at flametechplumbing.ca, where every page was indexed with a
  // trailing slash. Keeping the slash means existing GSC entries and
  // backlinks land directly with no redirect during the reindex window.
  // /foo 308-redirects to /foo/.
  trailingSlash: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
    // Next 16 rejects ?q= values not declared here. 70 is for the FTVAN
    // hero photos (visually indistinguishable from 75, ~10% smaller).
    qualities: [70, 75],
  },
  // Preserve the WP/Yoast sitemap URLs. Google Search Console has
  // /sitemap_index.xml (and the child sitemaps) registered for
  // flametechplumbing.ca and has been crawling them for years.
  // Rewrites (not redirects) serve our /sitemap.xml content at the
  // legacy URLs — Google sees a 200 at the same URL it knows about,
  // no crawler confusion from chained redirects on sitemap discovery.
  async rewrites() {
    return [
      { source: "/sitemap_index.xml", destination: "/sitemap.xml" },
      { source: "/post-sitemap.xml", destination: "/sitemap.xml" },
      { source: "/page-sitemap.xml", destination: "/sitemap.xml" },
      { source: "/category-sitemap.xml", destination: "/sitemap.xml" },
      { source: "/post_tag-sitemap.xml", destination: "/sitemap.xml" },
      { source: "/author-sitemap.xml", destination: "/sitemap.xml" },
    ];
  },
  async redirects() {
    return [
      {
        source: "/services/:slug",
        destination: "/:slug",
        permanent: true,
      },
      // Blog moved from /articles → /blog
      { source: "/articles", destination: "/blog/", permanent: true },
      { source: "/articles/:slug", destination: "/blog/:slug", permanent: true },
      // Category archives nested under /blog
      {
        source: "/categories/:slug",
        destination: "/blog/categories/:slug",
        permanent: true,
      },
      // WP legacy URLs that don't have a 1:1 page in the new build
      {
        source: "/chat",
        destination: "/contact/",
        permanent: true,
      },
      {
        source: "/garage-heaters-calgary-2",
        destination: "/garage-heaters-calgary/",
        permanent: true,
      },
      // WP shipped this slug with a typo (missing the second 'r'). The
      // new build uses the correctly-spelled /evergreen-plumbers-calgary
      // — preserve the existing inbound link equity from the typo URL.
      {
        source: "/evergeen-plumbers-calgary",
        destination: "/evergreen-plumbers-calgary/",
        permanent: true,
      },
      // /huntington-hills was an off-pattern slug — every other
      // neighbourhood page is <area>-plumbers-calgary. Renamed for
      // consistency + better keyword match; preserve any existing
      // inbound links via 301.
      {
        source: "/huntington-hills",
        destination: "/huntington-hills-plumbers-calgary/",
        permanent: true,
      },
      // WP appended -2 to this blog slug; new build uses the canonical
      // slug. Inbound links from the WP version still resolve.
      {
        source: "/blog/furnace-fuse-keeps-blowing-2",
        destination: "/blog/furnace-fuse-keeps-blowing/",
        permanent: true,
      },
      // WP used singular /category/ in addition to the plural we
      // already redirect. Cover both.
      {
        source: "/category/:slug",
        destination: "/blog/categories/:slug",
        permanent: true,
      },
      // WP author archive pages — collapse to /about so any bookmarked
      // /author/shaun-kristoff links land somewhere meaningful instead
      // of 404'ing. WP Yoast exposed authors at both /author/X/ and
      // /blog/author/X/ — cover both prefixes.
      {
        source: "/author/:slug",
        destination: "/about/",
        permanent: true,
      },
      {
        source: "/blog/author/:slug",
        destination: "/about/",
        permanent: true,
      },
      // WP blog category archives — Yoast emitted these at
      // /blog/category/X/ (singular). New build uses /blog/categories/X/
      // (plural) with a different category taxonomy (we collapsed
      // boilers + furnaces + heat-pumps into one "heating" category).
      // Slug mappings done individually because they're not 1:1.
      {
        source: "/blog/category/air-conditioning",
        destination: "/blog/categories/air-conditioning/",
        permanent: true,
      },
      {
        source: "/blog/category/boilers",
        destination: "/blog/categories/heating/",
        permanent: true,
      },
      {
        source: "/blog/category/furnace",
        destination: "/blog/categories/heating/",
        permanent: true,
      },
      {
        source: "/blog/category/heat-pumps",
        destination: "/blog/categories/heating/",
        permanent: true,
      },
      {
        source: "/blog/category/water-softeners",
        destination: "/blog/categories/water/",
        permanent: true,
      },
      // Generic WP category archives — no direct equivalent. Send to
      // the blog index rather than 404. Order matters: specific slug
      // redirects above must come first; this catch-all only fires
      // for the remaining /blog/category/* paths Next.js hasn't yet
      // matched.
      {
        source: "/blog/category/:slug",
        destination: "/blog/",
        permanent: true,
      },
      // WP blog tag archives — /blog/tag/X/ (singular) vs our
      // /blog/tags/X/ (plural). Only `maintenance` has an exact slug
      // match; the rest collapse to either the closest category or
      // the blog index.
      {
        source: "/blog/tag/maintenance",
        destination: "/blog/tags/maintenance/",
        permanent: true,
      },
      {
        source: "/blog/tag/heating",
        destination: "/blog/categories/heating/",
        permanent: true,
      },
      {
        source: "/blog/tag/:slug",
        destination: "/blog/",
        permanent: true,
      },
      // Defensive: bot probing of WP admin / login / content surfaces.
      // Send them all home so they stop showing up in 404 logs.
      {
        source: "/wp-admin/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-login.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-content/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
