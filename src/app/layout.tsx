import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import ChatBubble from "@/components/ChatBubble";
import TelClickTracker from "@/components/TelClickTracker";
import { getReviewsSummary } from "@/lib/reviews";

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
  // Shared business fields. Spread into the Plumber, HVACBusiness, and
  // LocalBusiness nodes below so all three describe the same entity from
  // different schema-typed angles (mirrors the Aspen Mountain Plumbing
  // multi-block pattern that ranks well in Calgary local-pack results).
  const reviewsSummary = getReviewsSummary();
  const sharedBusinessFields = {
    name: "FlameTech Plumbing & Heating Ltd.",
    alternateName: "FlameTech",
    image: `${SITE_URL}/images/FTVAN.jpg`,
    logo: `${SITE_URL}/images/FT-LOGO-DARK8.png`,
    url: SITE_URL,
    telephone: "+1-587-834-3668",
    email: "info@flametechplumbing.ca",
    foundingDate: "2025",
    priceRange: "$$",
    currenciesAccepted: "CAD",
    paymentAccepted: [
      "Cash",
      "Credit Card",
      "Debit Card",
      "Financing",
      "E-Transfer",
    ],
    slogan: "Red Seal journeyperson plumbers serving Calgary homes.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Woodbine Blvd",
      addressLocality: "Calgary",
      addressRegion: "AB",
      postalCode: "T2W 3K8",
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
      // Greater Calgary metro — incorporated municipalities.
      { "@type": "City", name: "Calgary" },
      { "@type": "City", name: "Airdrie" },
      { "@type": "City", name: "Chestermere" },
      { "@type": "City", name: "Cochrane" },
      { "@type": "City", name: "Okotoks" },
      { "@type": "City", name: "Carstairs" },
      // Calgary quadrants + neighbourhoods — Place type for unincorporated
      // areas referenced in the page copy and dedicated location pages.
      { "@type": "Place", name: "Calgary NW" },
      { "@type": "Place", name: "Calgary NE" },
      { "@type": "Place", name: "Calgary SE" },
      { "@type": "Place", name: "Calgary SW" },
      { "@type": "Place", name: "Cooper's Crossing" },
      { "@type": "Place", name: "Evergreen" },
      { "@type": "Place", name: "Signal Hill" },
      { "@type": "Place", name: "Woodbine" },
      { "@type": "Place", name: "Ravenswood" },
      { "@type": "Place", name: "Reunion" },
    ],
    sameAs: [
      "https://share.google/aOJFMcBNwTcPsAZxK",
      "https://www.facebook.com/profile.php?id=61574205860979",
      "https://www.instagram.com/flametechplumbingandheating/",
      "https://www.bbb.org/ca/ab/calgary/profile/plumbing-and-heating/flametech-plumbing-heating-ltd-0017-267350",
      "https://www.yelp.com/biz/flame-tech-calgary-2",
      "https://www.airdriechamber.ab.ca/list/member/flametech-plumbing-heating-ltd-3098",
    ],
    founder: [
      {
        "@type": "Person",
        name: "Shaun Kristoff",
        jobTitle: "Co-founder & Red Seal Journeyperson",
      },
      {
        "@type": "Person",
        name: "Jason Mounsey",
        jobTitle: "Co-founder & Red Seal Journeyperson",
      },
    ],
    knowsAbout: [
      "Boiler installation",
      "Boiler repair",
      "Boiler service",
      "Furnace installation",
      "Furnace repair",
      "Hot water tank replacement",
      "Tankless water heaters",
      "PolyB pipe replacement",
      "Drain cleaning",
      "Heat pumps",
      "Air conditioning",
      "Water softeners",
      "Emergency plumbing",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewsSummary.average.toFixed(1),
      bestRating: "5",
      reviewCount: String(reviewsSummary.total),
    },
  };

  const plumberOffers = [
    "Boiler installation",
    "Boiler repair",
    "Hot water tank replacement",
    "Tankless water heaters",
    "PolyB pipe replacement",
    "Drain cleaning",
    "Bathroom plumbing",
    "Emergency plumbing",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name },
  }));

  const hvacOffers = [
    "Furnace installation",
    "Furnace repair",
    "High-efficiency furnaces",
    "Heat pumps",
    "Air conditioning",
    "Garage heaters",
    "Humidifiers",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name },
  }));

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
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Plumber",
        "@id": `${SITE_URL}#business`,
        ...sharedBusinessFields,
        makesOffer: plumberOffers,
      },
      {
        "@type": "HVACBusiness",
        "@id": `${SITE_URL}#hvac`,
        ...sharedBusinessFields,
        makesOffer: hvacOffers,
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}#localbusiness`,
        ...sharedBusinessFields,
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
        <TelClickTracker />
      </body>
      <GoogleTagManager gtmId="GT-T5JXTGGW" />
    </html>
  );
}
