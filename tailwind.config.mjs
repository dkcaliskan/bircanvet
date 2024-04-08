const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			xsm: '500px',
			// => @media (min-width: 500px) { ... }
			sm: '640px',
			// => @media (min-width: 640px) { ... }
			md: '768px',
			// => @media (min-width: 768px) { ... }
			lg: '1024px',
			// => @media (min-width: 1024px) { ... }
			xl: '1280px',
			// => @media (min-width: 1280px) { ... }
			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
			'3xl': '1920px',
			// => @media (min-width: 1920px) { ... }
			mobileMax: { raw: '(max-width: 600px)' },

			smMax: { raw: '(max-width: 640px)' },

			xsmMax: { raw: '(max-width: 500px)' },

			mdMax: { raw: '(max-width: 768px)' },

			lgMax: { raw: '(max-width: 1023px)' },
			xlMax: { raw: '(max-width: 1280px)' },

			smallerMobile: { raw: '(max-width: 450px)' },
			smallestMobile: { raw: '(max-width: 375px)' },
			smallestMobileMin: { raw: '(min-width: 375px)' },
			extraSmallMobile: { raw: '(max-width: 345px)' },
			xxsm: { raw: '(min-width: 490px)' },

			// Heights
			'896min': { raw: '(min-height: 896px)' },
			'800max': { raw: '(max-height: 800px)' }
		},
		extend: {
			fontFamily: {
				dm: ['DM Sans', ...defaultTheme.fontFamily.sans]
			},
			fontSize: {
				sm: 'clamp(0.8rem, 0.1vw + 0.78rem, 0.89rem)',
				xbase: 'clamp(0.9rem, 0.15vw + 0.85rem, 1.1rem)',
				xsbase: 'clamp(1rem, 0.17vw + 0.90rem, 1.12rem)',
				base: 'clamp(1rem, 0.2vw + 0.95rem, 1.19rem)',
				md: 'clamp(1.10rem, 0.2vw + 1.05rem, 1.37rem)',
				lg: 'clamp(1.25rem, 0.35vw + 1.16rem, 1.58rem)',
				xl: 'clamp(1.56rem, 0.58vw + 1.42rem, 2.11rem)',
				xxl: 'clamp(1.65rem, 0.75vw + 1.55rem, 2.65rem)',
				'2xl': 'clamp(1.95rem, 0.9vw + 1.73rem, 2.81rem)',
				'3xl': 'clamp(2.44rem, 1.38vw + 2.1rem, 3.75rem)',
				'4xl': 'clamp(3.05rem, 2.05vw + 2.54rem, 5rem)',
				'5xl': 'clamp(3.81rem, 3vw + 3.07rem, 6.66rem)',
				'6xl': 'clamp(4.77rem, 4.33vw + 3.69rem, 8.88rem)'
			},
			colors: {
				primary: {
					50: '#ebf4f7',
					100: '#d8e9f0',
					200: '#a1c3d6',
					300: '#71a0bd',
					400: '#2a5e8c',
					500: '#002a5c',
					600: '#002352',
					700: '#001c45',
					800: '#001538',
					900: '#000e29',
					950: '#00071a'
				},
				second: {
					50: '#f0fcfc',
					100: '#dff7f6',
					200: '#b2ede9',
					300: '#87e0da',
					400: '#3ec9be',
					500: '#01b2a0',
					600: '#02a189',
					700: '#018568',
					800: '#016b4d',
					900: '#004f33',
					950: '#00331e'
				},
				accent: {
					50: '#fafcfc',
					100: '#f5fcfc',
					200: '#e6f7f6',
					300: '#daf5f3',
					400: '#bcebe6',
					500: '#a3e3db',
					600: '#85ccc0',
					700: '#5cab99',
					800: '#3a8770',
					900: '#21664d',
					950: '#0e422c'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
