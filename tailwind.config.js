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
      },
      fontFamily: {
        rubik: ["Rubik"],
        rubik_italic: ["Rubik Italic"],
        blackout_sunrise: ["Blackout Sunrise"],
        blackout_midnight: ["Blackout Midnight"],
        blackout_two_am: ["Blackout Two AM"],
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [require("@tailwindcss/forms")],
};
