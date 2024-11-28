/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
      },
      colors: {
        // Raw hex colors
        gray: {
          950: "#222222",
          650: "#767676",
          450: "#AFAFAF",
          200: "#E2E2E2",
          white: "#FFFFFF",
        },
        // Semantic tokens
        content: {
          DEFAULT: "#222222", // color-content
          secondary: "#767676", // color-content-secondary
          tertiary: "#AFAFAF", // color-content-tertiary
          disabled: "#E2E2E2", // color-content-disabled
          error: "#FF0000", // color-content-error
          success: "#4BB543", // color-content-success
          caution: "#FF9500", // color-content-caution
          info: "#767676", // color-content-info
        },
        fill: {
          primary: "#222222", // color-fill-primary
          on: "#FFFFFF", // color-on-fill
        },
        surface: {
          DEFAULT: "#FFFFFF", // color-surface
          error: "#F9DEDC", // color-surface-error
          success: "#C0EECC", // color-surface-success
          caution: "#FFE7C6", // color-surface-caution
          info: "#F5F5F5", // color-surface-info
        },
        border: {
          DEFAULT: "#E2E2E2", // color-border
        },
        bg: "#F5F5F5", // color-bg
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
            fontWeight: "600", // Semibold
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
