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
    ];
  },
};

export default nextConfig;
