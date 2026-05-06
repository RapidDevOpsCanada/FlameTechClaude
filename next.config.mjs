/** @type {import('next').NextConfig} */
const nextConfig = {
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
    ];
  },
};

export default nextConfig;
