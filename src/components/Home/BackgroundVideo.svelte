<script lang="ts">
	import { onMount, onDestroy } from 'svelte'

	let isMobile = false

	function handleResize() {
		isMobile = window.innerWidth < 768
	}

	onMount(() => {
		isMobile = window.innerWidth < 768
		window.addEventListener('resize', handleResize)
	})

	onDestroy(() => {
		window.removeEventListener('resize', handleResize)
	})
</script>

{#if !isMobile}
	<div class="background absolute -top-[77px] left-0 z-0 min-h-[600px] w-full">
		<video
			autoplay
			muted
			loop
			id="myVideo"
			preload="none"
			playsinline
			width="100%"
			height="600"
			class="max-h-[600px] min-h-[600px] w-full object-cover object-center"
		>
			<source src="/assets/videos/home-bg-cat.mp4" type="video/mp4" />
		</video>
	</div>
{/if}

<style>
</style>
