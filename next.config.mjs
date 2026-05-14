/** @type {import('next').NextConfig} */
const nextConfig = {
  // Canonical URLs have no trailing slash. /foo/ 308-redirects to /foo.
  trailingSlash: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/services/:slug",
        destination: "/:slug",
        permanent: true,
      },
      // Blog moved from /articles → /blog
      { source: "/articles", destination: "/blog", permanent: true },
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
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/garage-heaters-calgary-2",
        destination: "/garage-heaters-calgary",
        permanent: true,
      },
      // WP shipped this slug with a typo (missing the second 'r'). The
      // new build uses the correctly-spelled /evergreen-plumbers-calgary
      // — preserve the existing inbound link equity from the typo URL.
      {
        source: "/evergeen-plumbers-calgary",
        destination: "/evergreen-plumbers-calgary",
        permanent: true,
      },
      // WP appended -2 to this blog slug; new build uses the canonical
      // slug. Inbound links from the WP version still resolve.
      {
        source: "/blog/furnace-fuse-keeps-blowing-2",
        destination: "/blog/furnace-fuse-keeps-blowing",
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
      // of 404'ing.
      {
        source: "/author/:slug",
        destination: "/about",
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
