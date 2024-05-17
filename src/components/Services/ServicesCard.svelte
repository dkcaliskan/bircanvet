<script lang="ts">
	import { Image } from '@unpic/svelte'
	export let title = ''
	export let description = ''
	export let image = ''
	export let link = ''
</script>

<div class="mx-auto min-h-[400px] max-w-[460px] bg-white py-4">
	<div class="rounded-lg shadow-lg">
		<Image src={image} alt={title} width={460} height={230} layout="constrained" />

		<div class="mt-4 space-y-6 text-center">
			<h3 class="text-md font-bold text-primary-500">{title}</h3>
			<p class="mb-12 line-clamp-3 px-3 text-xbase text-gray-500">{description}</p>
			<a
				href={link}
				class="block w-full rounded-b-md bg-primary-500 px-6 py-3 text-xbase font-medium uppercase tracking-wide text-white transition-colors duration-300 hover:bg-primary-600"
				>Detaylı Bilgi</a
			>
		</div>
	</div>
</div>
