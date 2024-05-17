import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import { imageService } from '@unpic/astro/service'
import netlify from '@astrojs/netlify'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	site: 'https://bircanvet.com',
	integrations: [svelte(), tailwind(), sitemap()],
	image: {
		service: imageService({
			// This can usually be auto-detected
			placeholder: 'blurhash',
			// This is the default
			layout: 'constrained'
		})
	},
	output: 'server',
	adapter: netlify()
})
