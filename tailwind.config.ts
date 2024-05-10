import type { Config } from "tailwindcss";
import { createPlugin } from "windy-radix-palette";

const colors = createPlugin();
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
        "text-size-80": "var(--text-size-80)",
        "text-size-90": "var(--text-size-90)",
        "text-size-100": "var(--text-size-100)",
        "text-size-200": "var(--text-size-200)",
        "text-size-300": "var(--text-size-300)",
        "text-size-400": "var(--text-size-400)",
        "text-size-500": "var(--text-size-500)",
        "text-size-600": "var(--text-size-600)",
        "text-size-700": "var(--text-size-700)",
        overline: ["10px", { letterSpacing: "1.5px" }],
        caption: ["12px", { letterSpacing: "0.4px" }],
        body: ["16px", { letterSpacing: "0.5px" }],
        subtitle: ["18px", { letterSpacing: "0.15px" }],
        "title-1": ["24px", { letterSpacing: "0px" }],
        "title-2": ["34px", { letterSpacing: "0.25px" }],
      },

      colors: {
        border: "var(--sky-6)",
        input: "var(--sky-6)",
        ring: "var(--sky-6)",
        background: "var(--sky-1)",
        foreground: "var(--sky-12)",
        primary: {
          DEFAULT: "var(--sky-9)",
          hover: "var(--sky-10)",
          active: "var(--sky-11)",
          foreground: "var(--sky-12)",
          border: "var(--sky-6)",
          "border-hover": "var(--sky-7)",
          "border-active": "var(--sky-8)",
        },
        secondary: {
          DEFAULT: "var(--grass-3)",
          light: "var(--grass-12)",
          background: "var(--grass-1)",
          hover: "var(--grass-4)",
          active: "var(--grass-5)",
          foreground: "var(--grass-12)",
          border: "var(--grass-6)",
          "border-hover": "var(--grass-7)",
          "border-active": "var(--grass-8)",
        },
        destructive: {
          DEFAULT: "var(--red-2)",
          foreground: "var(--red-12)",
          border: "var(--red-6)",
          "border-hover": "var(--red-7)",
          "border-active": "var(--red-8)",
        },
        muted: {
          DEFAULT: "var(--mauve-2)",
          foreground: "var(--mauve-11)",
        },
        accent: {
          DEFAULT: "var(--sky-9)",
          hover: "var(--sky-10)",
          active: "var(--sky-11)",
          foreground: "var(--sky-1)",
          border: "var(--sky-6)",
          "border-hover": "var(--sky-7)",
          "border-active": "var(--sky-8)",
        },
        popover: {
          DEFAULT: "var(--sky-2)",
          foreground: "var(--sky-12)",
        },
        card: {
          DEFAULT: "var(--sky-2)",
          foreground: "var(--sky-12)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), colors.plugin],
} satisfies Config;

export default config;
