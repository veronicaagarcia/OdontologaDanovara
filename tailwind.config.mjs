/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	'./node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			colors: {
				background: '#d7e7e0',
				primary: '#e55c78', // Ejemplo de color rosa
				primaryLight: '#ff6e90',
				primaryDark:'#b74a60',
				secondary: '#4db081', // Ejemplo de color verde
				secondaryLight: '#5cdb9b',
				secondaryDark:'#3e8d67',
				contrast:'#2f4858',
				gray:'#d2d2d2'
			},
			stroke: {
				'primary': '#e55c78',
			  },
		},
	},
	plugins: [require('flowbite/plugin')],
}
