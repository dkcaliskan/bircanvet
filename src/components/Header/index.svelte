<script lang="ts">
	import { onMount, onDestroy } from 'svelte'
	import Desktop from './Navigation/Desktop.svelte'
	import Mobile from './Navigation/Mobile.svelte'

	let isMobile = false

	const handleResize = () => {
		isMobile = window.innerWidth < 1024
	}

	onMount(() => {
		isMobile = window.innerWidth < 1024
		window.addEventListener('resize', handleResize)
	})

	onDestroy(() => {
		window.removeEventListener('resize', handleResize)
	})
</script>

{#if isMobile}
	<Mobile />
{:else}
	<Desktop />
{/if}
