/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				pink: "hsl(322, 100%, 66%)",
				lightpink: "hsl(321, 100%, 78%)",
				red: " hsl(0, 100%, 63%)",
				cyan: "hsl(192, 100%, 9%)",
				pale: "hsl(207, 100%, 98%)",
			},
		},
	},
	plugins: [],
};
