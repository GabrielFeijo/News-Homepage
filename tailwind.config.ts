import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundColor: {
				secondary: '#00001a',
				'primary-btn': '#f05e51',
			},
			textColor: {
				secondary: '#eaad54',
			},
		},
	},
	plugins: [],
};
export default config;
