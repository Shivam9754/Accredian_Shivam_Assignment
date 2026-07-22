import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#1d4af5",
          50: "#eff6ff",
          500: "#1d4af5",
          600: "#1e40af",
        },
        surface: {
          light: "#fafafa",
          dark: "#09090b",
          "dark-raised": "#0e0e10",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Inter",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
