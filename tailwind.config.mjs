/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'morado-market': '#692394',
				'rosado-market': '#c21f8c', 
				'verde-market': '#00ef04',
				'verde-success': '#28a745',
			},
		},
	},
	plugins: [],
}
