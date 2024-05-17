import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import { imageService } from '@unpic/astro/service'

import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
	integrations: [svelte(), tailwind()],
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
