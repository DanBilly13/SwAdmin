/** @type {import('tailwindcss').Config} */
import { mapped } from "./src/theme/colorPalettes";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-13": "span 13 / span 13",
        "span-14": "span 14 / span 14",
        "span-15": "span 15 / span 15",
        "span-16": "span 16 / span 16",
      },
      fontWeight: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
      },
      colors: {
        bg: {
          primary: mapped.neutral.lighter,
          brand: {
            primary: mapped.primary.default,
          },
        },
        surface: {
          primary: mapped.neutral.white,
          secondary: mapped.neutral.lighter,
          tertiary: mapped.neutral.light,
          success: mapped.success.light,
          error: mapped.error.light,
          caution: mapped.caution.light,
        },
        fill: {
          primary: mapped.neutral.darker,
          secondary: mapped.neutral.light,
          tertiary: mapped.neutral.white,
          brand: {
            primary: mapped.primary.dark,
            secondary: mapped.neutral.white,
            tertiary: "transparent",
          },
          success: mapped.success.default,
          caution: mapped.caution.default,
          error: mapped.error.default,
          disabled: mapped.neutral.lighter,
        },
        content: {
          primary: mapped.neutral.darker,
          secondary: mapped.neutral.dark,
          tertiary: mapped.neutral.lighter,
          success: mapped.success.default,
          caution: mapped.caution.default,
          error: mapped.error.default,
          disabled: mapped.neutral.light,
          brand: mapped.primary.dark,
        },
        link: mapped.primary.dark,
        on: {
          fill: {
            primary: mapped.neutral.white,
            secondary: mapped.neutral.darker,
            tertiary: mapped.neutral.darker,
            success: mapped.success["on-success"],
            caution: mapped.caution["on-caution"],
            error: mapped.error["on-error"],
            disabled: mapped.neutral.default,
            brand: {
              primary: mapped.neutral.white,
              secondary: mapped.neutral.darker,
            },
          },
          surface: {
            primary: mapped.neutral.darker,
            secondary: mapped.neutral.dark,
            success: mapped.success.dark,
            caution: mapped.neutral.darker,
            error: mapped.error.dark,
          },
        },
        border: {
          primary: mapped.neutral.darker,
          secondary: mapped.neutral.dark,
          tertiary: mapped.neutral.white,
          active: mapped.neutral.darker,
          focus: mapped.focus.default,
          success: mapped.success.default,
          caution: mapped.caution.default,
          error: mapped.error.default,
          brand: mapped.primary.default,
        },
        "border-border": {
          primary: mapped.neutral.darker,
          secondary: mapped.neutral.dark,
          tertiary: mapped.neutral.white,
          active: mapped.neutral.darker,
          focus: mapped.focus.default,
          success: mapped.success.default,
          caution: mapped.caution.default,
          error: mapped.error.default,
          brand: mapped.primary.default,
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Display styles - Bold
        "display-l": [
          "80px",
          {
            lineHeight: "80px",
            letterSpacing: "-0.5px",
            fontWeight: "700",
          },
        ],
        "display-m": [
          "64px",
          {
            lineHeight: "64px",
            letterSpacing: "-0.25px",
            fontWeight: "700",
          },
        ],
        "display-s": [
          "44px",
          {
            lineHeight: "44px",
            letterSpacing: "-0.25px",
            fontWeight: "700",
          },
        ],

        // Headline styles - Semibold
        "headline-l": [
          "36px",
          {
            lineHeight: "40px",
            letterSpacing: "0px",
            fontWeight: "600",
          },
        ],
        "headline-m": [
          "30px",
          {
            lineHeight: "36px",
            letterSpacing: "0px",
            fontWeight: "600",
          },
        ],
        "headline-s": [
          "24px",
          {
            lineHeight: "32px",
            letterSpacing: "0px",
            fontWeight: "600",
          },
        ],

        // Title styles
        "title-l": [
          "20px",
          {
            lineHeight: "24px",
            letterSpacing: "0px",
            fontWeight: "500", // Medium
          },
        ],
        "title-m": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0.15px",
            fontWeight: "600", // Semibold
          },
        ],
        "title-s": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0.1px",
            fontWeight: "600", // Semibold
          },
        ],

        // Label styles
        "label-l": [
          "16px",
          {
            lineHeight: "20px",
            letterSpacing: "0px",
            fontWeight: "500", // Medium
          },
        ],
        "label-m": [
          "14px",
          {
            lineHeight: "16px",
            letterSpacing: "0px",
            fontWeight: "500", // Medium
          },
        ],
        "label-s": [
          "12px",
          {
            lineHeight: "16px",
            letterSpacing: "0.25px",
            fontWeight: "500", // Semibold
          },
        ],

        // Body styles - Regular
        "body-l": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        "body-m": [
          "16px",
          {
            lineHeight: "22px",
            fontWeight: "400",
          },
        ],
        "body-s": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
          },
        ],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
