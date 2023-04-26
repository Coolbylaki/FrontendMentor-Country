/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				DBlueDark: "hsl(209, 23%, 22%)",
				VDBlueDark: "hsl(207, 26%, 17%)",
				VDBlueLight: "hsl(200, 15%, 8%)",
				DGrayLight: "hsl(0, 0%, 52%)",
				VLGrayLight: "hsl(0, 0%, 98%)",
			},
		},
		screens: {
			pc: "1440px",
			md: "879px",
		},
	},
	plugins: [],
};
