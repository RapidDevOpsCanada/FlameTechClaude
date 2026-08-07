import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grizzly Admin",
  // Belt and braces alongside the robots.txt disallow and the
  // X-Robots-Tag set in src/proxy.ts.
  robots: { index: false, follow: false, nocache: true },
};

export default function GrizzlyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-ink-900 text-cream-50">{children}</div>;
}
