import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D9488",
        accent: "#14B8A6",
        emergency: "#FB923C",
        "emergency-deep": "#EA7C22",
        "ink-900": "#0B1220",
        "ink-800": "#111A2E",
        "ink-700": "#172034",
        "ink-600": "#1F2A44",
        "ink-500": "#3A4663",
        "cream-50": "#F8F5F0",
        "cream-100": "#F1ECE3",
        "muted": "#94A3B8",
        "line-dark": "#1F2A44",
        "line-light": "#E8E2D6",
        "blueprint-bg": "#FFFFFF",
        "blueprint-grid": "#E8E2D6",
        "blueprint-text": "#0B1220",
        "technical-label": "#64748B",
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
        headline: ["var(--font-manrope)", "Manrope", "Inter", "sans-serif"],
        body: ["var(--font-manrope)", "Manrope", "Inter", "sans-serif"],
        technical: ["var(--font-manrope)", "Manrope", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
