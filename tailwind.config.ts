import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#f4f5f7",
          bgSubtle: "#eaedf1",
          surface: "#ffffff",
          surfaceHover: "#f8fafc",
          primary: "#1b4332", // Deep Alpine Forest Emerald
          primaryLight: "#2d6a4f",
          primaryHover: "#143326",
          primaryMuted: "rgba(27, 67, 50, 0.08)",
          textDark: "#18181b",
          textBody: "#3f3f46",
          textMuted: "#71717a",
          textLight: "#a1a1aa",
          border: "rgba(27, 67, 50, 0.14)",
          borderSubtle: "#e4e4e7",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      boxShadow: {
        'soft': "0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -2px rgba(0, 0, 0, 0.03)",
        'soft-lg': "0 10px 30px -4px rgba(0, 0, 0, 0.08), 0 4px 10px -3px rgba(0, 0, 0, 0.04)",
        'primary-glow': "0 0 25px rgba(27, 67, 50, 0.2)",
      }
    },
  },
  plugins: [],
};

export default config;
