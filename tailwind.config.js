/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				dark: {
					DEFAULT: '#1B212D',
					lighter: '#475161',
					lightest: '#7887A0',
				},
				light: {
					DEFAULT: '#CDD4E3',
					lighter: '#E9EDF6',
					lightest: '#F0F4FA',
				},
			},
		},
	},
	plugins: [],
}
