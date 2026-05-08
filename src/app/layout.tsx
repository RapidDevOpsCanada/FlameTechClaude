import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ChatBubble from "@/components/ChatBubble";

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

const SITE_URL = "https://flametechplumbing.ca";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "FlameTech Plumbing & Heating — Trusted Calgary Plumbers",
    template: "%s | FlameTech Plumbing & Heating",
  },
  description:
    "Calgary's licensed plumbing & heating experts. Boilers, furnaces, drain cleaning, PolyB, hot water tanks, AC. Insured & bonded. Call 587-834-3668.",
  applicationName: "FlameTech Plumbing & Heating",
  authors: [{ name: "FlameTech Plumbing & Heating Ltd." }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "FlameTech Plumbing & Heating",
    locale: "en_CA",
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/images/FTVAN.jpg`,
        width: 800,
        height: 486,
        alt: "FlameTech Plumbing & Heating service van",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `${SITE_URL}/images/FTVAN.jpg`,
        width: 800,
        height: 486,
        alt: "FlameTech Plumbing & Heating service van",
      },
    ],
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
        image: `${SITE_URL}/images/FTVAN.jpg`,
        logo: `${SITE_URL}/images/FT-LOGO-DARK8.png`,
        url: SITE_URL,
        telephone: "+1-587-834-3668",
        email: "info@flametechplumbing.ca",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Woodbine Blvd",
          addressLocality: "Calgary",
          addressRegion: "AB",
          addressCountry: "CA",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 50.945,
          longitude: -114.118,
        },
        hasMap:
          "https://www.google.com/maps/search/?api=1&query=FlameTech+Plumbing+Heating+Calgary",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "08:00",
            closes: "18:00",
          },
        ],
        areaServed: [
          { "@type": "City", name: "Calgary" },
          { "@type": "City", name: "Airdrie" },
          { "@type": "City", name: "Chestermere" },
          { "@type": "City", name: "Cochrane" },
          { "@type": "City", name: "Okotoks" },
          { "@type": "City", name: "Carstairs" },
        ],
        sameAs: [
          "https://www.facebook.com/profile.php?id=61574205860979",
          "https://www.instagram.com/flametechplumbingandheating/",
          "https://www.bbb.org/ca/ab/calgary/profile/plumbing-and-heating/flametech-plumbing-heating-ltd-0017-267350",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          bestRating: "5",
          reviewCount: "30",
        },
      },
    ],
  };

  return (
    <html lang="en-CA" className={manrope.variable}>
      <body
        className="font-body text-cream-50 bg-ink-900 antialiased"
        style={{ width: "100%", position: "relative" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
        />
        {children}
        <ChatBubble />
      </body>
    </html>
  );
}
