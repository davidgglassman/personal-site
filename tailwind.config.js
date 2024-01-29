module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "#FFA6A6",
        "primary-2": "#FE4C59",
        "primary-3": "#B2353F",
        "accent-1": "#73DFE5",
        "grey-100": "#F0F1F6",
        "grey-300": "#8B8C8F",
        "grey-500": "#48484A",
        "grey-700": "#19191A",
        "grey-900": "#121212",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
