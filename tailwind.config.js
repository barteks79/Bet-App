/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-dark': '#282C3D',
				primary: '#282C3DF2',
				'primary-light': '#282C3DE0',
				secondary: '#0085BE',
				'secondary-light': '#00A4EA',
				'gray-light': '#B9A9A',
			},
		},
	},
	plugins: [],
};
