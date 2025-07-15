/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	'./node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			colors: {
				// Paleta modernizada con mejor contraste y accesibilidad
				background: '#fafafa',
				white: '#ffffff',
				primary: {
					50: '#fef2f4',
					100: '#fde6e9', 
					200: '#fbd0d8',
					300: '#f7aab9',
					400: '#f17a95',
					500: '#e55c78', // color principal actual
					600: '#d1416b',
					700: '#b0335a',
					800: '#942d52',
					900: '#7f2a4d',
					950: '#471325'
				},
				secondary: {
					50: '#f0fdf5',
					100: '#dcfce8',
					200: '#bbf7d1',
					300: '#86efab',
					400: '#4ade80',
					500: '#4db081', // color secundario actual
					600: '#16a34a',
					700: '#15803d',
					800: '#166534',
					900: '#14532d',
					950: '#052e16'
				},
				neutral: {
					50: '#f8fafc',
					100: '#f1f5f9',
					200: '#e2e8f0',
					300: '#cbd5e1',
					400: '#94a3b8',
					500: '#64748b',
					600: '#475569',
					700: '#334155',
					800: '#1e293b',
					900: '#0f172a',
					950: '#020617'
				},
				accent: {
					coral: '#ff6b6b',
					mint: '#51cf66',
					sky: '#339af0',
					violet: '#845ef7'
				},
				// Colores legacy para compatibilidad
				contrast: '#334155',
				dark: '#0f172a'
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
				mono: ['JetBrains Mono', 'monospace']
			},
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1rem' }],
				'sm': ['0.875rem', { lineHeight: '1.25rem' }],
				'base': ['1rem', { lineHeight: '1.5rem' }],
				'lg': ['1.125rem', { lineHeight: '1.75rem' }],
				'xl': ['1.25rem', { lineHeight: '1.75rem' }],
				'2xl': ['1.5rem', { lineHeight: '2rem' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
				'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
				'5xl': ['3rem', { lineHeight: '1' }],
				'6xl': ['3.75rem', { lineHeight: '1' }],
				'7xl': ['4.5rem', { lineHeight: '1' }],
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'112': '28rem',
				'128': '32rem'
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'slide-up': 'slideUp 0.5s ease-out',
				'slide-down': 'slideDown 0.5s ease-out',
				'scale-in': 'scaleIn 0.3s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'bounce-slow': 'bounce 2s infinite',
				'spin-slow': 'spin 3s linear infinite',
				'wiggle': 'wiggle 1s ease-in-out infinite',
				'underline': 'underlineGrow 0.5s ease forwards',

			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				slideDown: {
					'0%': { transform: 'translateY(-20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				scaleIn: {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				},
				underlineGrow: {
					'0%': { opacity: 0, transform: 'scaleX(0)' },
					'100%': { opacity: 1, transform: 'scaleX(1)' },
				},

			},
			boxShadow: {
				'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
				'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
				'strong': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 2px 8px -2px rgba(0, 0, 0, 0.05)',
				'glow': '0 0 20px rgba(229, 92, 120, 0.3)',
				'glow-secondary': '0 0 20px rgba(77, 176, 129, 0.3)'
			},
			backdropBlur: {
				xs: '2px'
			},
			borderRadius: {
				'4xl': '2rem'
			}
		},
	},
	plugins: [
		require('flowbite/plugin'),
		function ({ addUtilities, addComponents, theme }) {
			addUtilities({
				'.scrollbar-hide': {
					'-ms-overflow-style': 'none',
					'scrollbar-width': 'none',
				},
				'.scrollbar-hide::-webkit-scrollbar': {
					'display': 'none',
				},
				'.text-balance': {
					'text-wrap': 'balance',
				},
			});
			
			addComponents({
				'.btn-primary': {
					'@apply bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2': {},
				},
				'.btn-secondary': {
					'@apply bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2': {},
				},
				'.btn-outline': {
					'@apply border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2': {},
				},
				'.card': {
					'@apply bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 ease-in-out transform hover:-translate-y-1': {},
				},
				'.glass': {
					'@apply backdrop-blur-md bg-white/20 border border-white/20': {},
				},
			});
		},
	],
}