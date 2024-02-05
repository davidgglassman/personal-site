/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    screens: {
      sm: "440px",
      md: "620px",
      lg: "768px",
      xl: "1024px",
      xl2: "1200px",
    },
    extend: {
      colors: {
        "primary-1": "#FFA6A6",
        "primary-2": "#FE4C59",
        "primary-3": "#B2353F",
        "accent-1": "#73DFE5",
        "grey-100": "#f0f2f9",
        "grey-300": "#cbd3d8",
        "grey-400": "#677178",
        "grey-500": "#333342",
        "grey-700": "#1c2121",
        "grey-900": "#171c1c",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
