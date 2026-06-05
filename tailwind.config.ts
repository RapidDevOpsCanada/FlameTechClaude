import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Orange as accent, brighter teal-green as action color
        primary: "#FB923C",
        "primary-deep": "#EA7C22",
        "primary-soft": "#FDB277",
        accent: "#F59E0B",
        emergency: "#17C3B0",
        "emergency-deep": "#0F9E8E",
        // Dark grey (not black), slightly warm — softened by ~6% lightness
        // from the original near-black scale for a less heavy feel.
        "ink-900": "#26262C",
        "ink-800": "#2F2F36",
        "ink-700": "#3C3C44",
        "ink-600": "#50505A",
        "ink-500": "#75757E",
        "cream-50": "#F8F5F0",
        "cream-100": "#F1ECE3",
        "muted": "#94A3B8",
        "line-dark": "#3C3C44",
        "line-light": "#E8E2D6",
        "blueprint-bg": "#FFFFFF",
        "blueprint-grid": "#E8E2D6",
        "blueprint-text": "#26262C",
        "technical-label": "#525252",
      },
      borderRadius: {
        none: "0",
        sm: "4px",
        DEFAULT: "8px",
        md: "10px",
        lg: "14px",
        xl: "20px",
        "2xl": "28px",
        full: "9999px",
      },
      fontFamily: {
        // font-display = Fraunces variable serif. Used on H1/H2 to
        // give the brand more character than a single-typeface site.
        // Fraunces is a high-contrast serif with strong personality
        // at large sizes; pairs cleanly against Manrope for body.
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        headline: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        // Body, ui, captions, eyebrow chips, button text — Manrope.
        body: ["var(--font-manrope)", "Manrope", "Inter", "sans-serif"],
        technical: ["var(--font-manrope)", "Manrope", "Inter", "sans-serif"],
        // Escape-hatch sans-display for when a display element
        // intentionally needs to stay in Manrope (e.g. compact
        // numerical stats where serif kerning fights with monospace
        // numerals).
        "display-sans": ["var(--font-manrope)", "Manrope", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
