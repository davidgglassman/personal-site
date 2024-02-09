/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [],
  theme: {
    screens: {
      sm: "440px",
      md: "580px",
      lg: "700px",
    },
    extend: {
      colors: {
        "primary-1": "#FFA6A6",
        "primary-2": "#FE4C59",
        "primary-3": "#B2353F",
        "accent-1": "#73DFE5",
        "grey-50": "#fdfdfd",
        "grey-100": "#f7f7f7",
        "grey-200": "#f0f0f0",
        "grey-300": "#e8e8e8",
        "grey-400": "#d1d1d1",
        "grey-500": "#b6b6b6",
        "grey-600": "#919191",
        "grey-700": "#404040",
        "grey-800": "#262626",
        "grey-900": "#1f1f1f",
        "grey-950": "#1a1a1a",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
