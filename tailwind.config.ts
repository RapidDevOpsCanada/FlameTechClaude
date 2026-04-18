import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // teal/orange swapped — action colors are now teal (emergency),
        // accents are now orange (primary)
        primary: "#FB923C",
        "primary-deep": "#EA7C22",
        "primary-soft": "#FDB277",
        accent: "#F59E0B",
        emergency: "#167F86",
        "emergency-deep": "#0F5F65",
        // neutral dark grays replace the old navy
        "ink-900": "#0A0A0A",
        "ink-800": "#17171A",
        "ink-700": "#242428",
        "ink-600": "#363639",
        "ink-500": "#565659",
        "cream-50": "#F8F5F0",
        "cream-100": "#F1ECE3",
        "muted": "#94A3B8",
        "line-dark": "#242428",
        "line-light": "#E8E2D6",
        "blueprint-bg": "#FFFFFF",
        "blueprint-grid": "#E8E2D6",
        "blueprint-text": "#0A0A0A",
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
        display: ["var(--font-manrope)", "Manrope", "Inter", "sans-serif"],
        headline: ["var(--font-manrope)", "Manrope", "Inter", "sans-serif"],
        body: ["var(--font-manrope)", "Manrope", "Inter", "sans-serif"],
        technical: ["var(--font-manrope)", "Manrope", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
