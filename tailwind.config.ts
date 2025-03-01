import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        hover: {
          primary: "var(--color-hover-primary)",
          secondary: "var(--color-hover-secondary)",
        },
        light: {
          bg: "var(--color-bg-light)",
          container: "var(--color-bg-container-light)",
          textHead: "var(--color-text-table-head-light)",
          inTable: "var(--color-bg-table-inside-light)",
        },
        dark: {
          text: "var(--color-text-dark)",
          bg: "var(--color-bg-dark)",
          container: "var(--color-bg-container-dark)",
          textHead: "var(--color-text-table-head-dark)",
          inTable: "var(--color-bg-table-inside-dark)",
        },
      },
      keyframes: {
        zoomInOut: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.08)" },
        },
        expandOut: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        rotateRight: {
          "0%": { transform: "rotate(300deg)", opacity: "0" },
          "100%": { transform: "rotate(360deg)", opacity: "1" },
        },
      },
      animation: {
        zoom: "zoomInOut 1s ease-in-out infinite",
        expand: "expandOut 1s ease-in-out forwards",
        rotate: "rotateRight 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
