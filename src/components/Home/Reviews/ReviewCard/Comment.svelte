<script lang="ts">
	export let comment = ''

	let showReadMore = false

	function toggleReadMore() {
		showReadMore = !showReadMore
	}
</script>

<div class="">
	<p class={`min-h-[90px] px-1.5 text-xbase lg:px-3 ${!showReadMore && 'line-clamp-4'}`}>
		{comment}
	</p>
</div>
