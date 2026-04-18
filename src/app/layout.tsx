import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#17C3B0",
};

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const SITE_URL = "https://flame-tech-claude-xd6r.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "FlameTech Plumbing & Heating — Trusted Calgary Plumbers",
    template: "%s | FlameTech Plumbing & Heating",
  },
  description:
    "Calgary's licensed, insured, and bonded residential plumbing and heating experts. Fast emergency response. Boilers, furnaces, drain cleaning, PolyB replacement, hot water tanks, and more. Call 587-834-3668.",
  applicationName: "FlameTech Plumbing & Heating",
  authors: [{ name: "FlameTech Plumbing & Heating Ltd." }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "FlameTech Plumbing & Heating",
    locale: "en_CA",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/images/FT-LOGO-DARK8.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        url: SITE_URL,
        name: "FlameTech Plumbing & Heating",
        inLanguage: "en-CA",
        publisher: { "@id": `${SITE_URL}#business` },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}#business`,
        name: "FlameTech Plumbing & Heating Ltd.",
        image: `${SITE_URL}/images/FT-LOGO-DARK8.png`,
        url: SITE_URL,
        telephone: "+1-587-834-3668",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Calgary",
          addressRegion: "AB",
          addressCountry: "CA",
        },
        areaServed: [
          "Calgary",
          "Airdrie",
          "Chestermere",
          "Cochrane",
          "Okotoks",
          "Carstairs",
        ],
        sameAs: [
          "https://www.facebook.com/p/FlameTech-Plumbing-and-Heating-61574205860979/",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "30",
        },
      },
    ],
  };

  return (
    <html lang="en" className={manrope.variable}>
      <body
        className="font-body text-cream-50 bg-ink-900 antialiased"
        style={{ overflowX: "hidden", width: "100%", position: "relative" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
        />
        <div
          style={{
            width: "100%",
            maxWidth: "100vw",
            overflowX: "hidden",
            position: "relative",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
