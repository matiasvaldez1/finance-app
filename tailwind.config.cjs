/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#1fe374",
				secondary: "#00ad6a",
				light_primary: "#eafaf1",
				light_grey: "#d6dae5",
				darker_grey: "#83858a",
				primary_black: "#080c16",
				primary_white: "#fcfcfc"
			  },
		},
	},
	plugins: [],
}
