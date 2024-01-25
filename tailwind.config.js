module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-red": "#F05151",
        "custom-red-medium": "#EE9999",
        "custom-red-light": "#F2CDCD",
        "custom-gray-dark": "#2E2E2E",
        "custom-gray-light": "#F3F3F3",
        "custom-white": "#e2e8f0",
        "custom-gray": "#94a3b8",
        "custom-green-light": "#58dbc8",
        "custom-blue-dark": "#0f172a",
      },
      fontFamily: {
        rubik: ["Rubik"],
        rubik_italic: ["Rubik Italic"],
        blackout_sunrise: ["Blackout Sunrise"],
        blackout_midnight: ["Blackout Midnight"],
        blackout_two_am: ["Blackout Two AM"],
        inter: ["Inter"],
        inter_bold: ["Inter Bold"],
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [require("@tailwindcss/forms")],
};
