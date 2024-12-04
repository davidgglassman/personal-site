import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			colors: {
				"primary-1": "#FFA6A6",
				"primary-2": "#FE4C59",
				"primary-3": "#B2353F",
				"accent-1": "#73DFE5",
				"gray-50": "#fdfdfd",
				"gray-100": "#f7f7f7",
				"gray-200": "#f0f0f0",
				"gray-300": "#e8e8e8",
				"gray-400": "#d1d1d1",
				"gray-500": "#b6b6b6",
				"gray-600": "#919191",
				"gray-700": "#404040",
				"gray-800": "#262626",
				"gray-900": "#1f1f1f",
				"gray-950": "#1a1a1a",
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
			fontSize: {
				md: ["1.075rem", "1.625rem"],
			},
		},
	},
	darkMode: "class",
	plugins: [typography, forms],
} satisfies Config;
