/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-dark': '#121623',
				primary: '#171B2B',
				'primary-light': '#21243A',
				secondary: '#0085BE',
				'secondary-light': '#00A4EA',
				'grey-light': '#A6A6A6',
			},
			width: {
				aside: '12%',
				main: '88%',
				wrapper: '75%',
				'main-wrapper': '92.5%',
				'live-wrapper': '95%',
				'game-card': '24%', // calculations
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				mulish: ['Mulish', 'sans-serif'],
			},
			boxShadow: {
				aside: '0 0 10px rgba(0,0,0, .3)',
				navbar: '0 0 5px rgba(0,0,0, .3)',
				circle: '0 0 2px rgba(255, 255, 255, .5)',
				'circle-lighter': '0 0 5px rgba(255, 255, 255, .5)',
			},
		},
	},
	plugins: [],
};
