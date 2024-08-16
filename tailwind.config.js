/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-dark': '#121623',
				primary: '#141A2FD2',
				'primary-light': '#1E233B',
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
