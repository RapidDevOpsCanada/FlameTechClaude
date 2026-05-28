import type { MetadataRoute } from "next";

const SITE_URL = "https://flametechplumbing.ca";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    // Both URLs serve the same XML (see next.config.mjs rewrites).
    // /sitemap_index.xml is the URL Google Search Console has had
    // registered for years from the WP/Yoast install — keeping it
    // listed means GSC continues to discover the sitemap at its
    // existing URL after the DNS flip with no manual resubmission.
    // /sitemap.xml is the Next.js convention going forward.
    sitemap: [`${SITE_URL}/sitemap.xml`, `${SITE_URL}/sitemap_index.xml`],
    host: SITE_URL,
  };
}
