import type { MetadataRoute } from "next";

const SITE_URL = "https://flametechplumbing.ca";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    // The legacy /sitemap_index.xml URL is preserved by a rewrite in
    // next.config.mjs (serves the same XML), which is what handles GSC
    // continuity from the WP/Yoast install. The robots.txt Sitemap
    // directive is for *discovery* — listing one canonical URL is the
    // correct signal. Listing both would imply two distinct sitemaps.
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
