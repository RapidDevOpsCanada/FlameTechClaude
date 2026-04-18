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
    "FlameTech Plumbing & Heating — Trusted Calgary Plumbers | 24/7 Emergency",
  description:
    "Calgary's licensed, insured, and bonded residential plumbing and heating experts. 24/7 emergency response. Boilers, furnaces, drain cleaning, PolyB replacement, hot water tanks, and more. Call 587-834-3668.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="font-body text-cream-50 bg-ink-900 antialiased">
        {children}
      </body>
    </html>
  );
}
