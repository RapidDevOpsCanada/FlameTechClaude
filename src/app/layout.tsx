import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "FlameTech Plumbing & Heating — Trusted Calgary Plumbers",
  description:
    "Calgary's licensed, insured, and bonded residential plumbing and heating experts. Fast emergency response. Boilers, furnaces, drain cleaning, PolyB replacement, hot water tanks, and more. Call 587-834-3668.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-body text-cream-50 bg-ink-900 antialiased">
        {children}
      </body>
    </html>
  );
}
