const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false,
	theme: {
		fontFamily: {
			sans: ['Montserrat', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
