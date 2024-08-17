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
				'aside-wrapper': '75%',
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				mulish: ['Mulish', 'sans-serif'],
			},
			boxShadow: {
				aside: '0 0 10px rgba(0,0,0, .3)',
			},
		},
	},
	plugins: [],
};
