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
				'gray-light': '#B9A9A',
			},
			width: {
				aside: '12%',
				'aside-wrapper': '85%',
			},
		},
	},
	plugins: [],
};
