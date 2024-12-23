/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				background: '#f0d699',
				main: '#304d4e',
			},
		},
	},
	plugins: [],
};
