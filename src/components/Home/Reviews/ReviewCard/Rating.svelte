<script lang="ts">
	export let rating = 0
</script>

<div class="flex items-center justify-center space-x-[2px]">
	{#each Array(5) as _, i}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="13"
			height="13"
			fill={i < rating ? '#FBBC04' : '#CCCCCC'}
			viewBox="0 0 24 24"
		>
			<path
				d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
			/>
		</svg>
	{/each}
</div>
