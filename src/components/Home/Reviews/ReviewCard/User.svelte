<script lang="ts">
	import Rating from './Rating.svelte'
	import { onMount } from 'svelte'

	type User = {
		name: string
		avatar: string
	}
	export let user: User
	export let rating: number
	export let date: Date
	export let link: string

	let controlledDate = ''

	const formatRelativeTime = () => {
		const rawDate = new Date(date)
		const diff = (Date.now() - rawDate.getTime()) / 1000

		if (diff < 60) {
			controlledDate = 'just now'
		} else if (diff < 3600) {
			controlledDate = new Intl.RelativeTimeFormat('tr', { style: 'narrow' }).format(
				-Math.round(diff / 60),
				'minute'
			)
		} else if (diff < 86400) {
			controlledDate = new Intl.RelativeTimeFormat('tr', { style: 'narrow' }).format(
				-Math.round(diff / 3600),
				'hour'
			)
		} else {
			controlledDate = new Intl.RelativeTimeFormat('tr', { style: 'narrow' }).format(
				-Math.round(diff / 86400),
				'day'
			)
		}

		if (diff > 2592000) {
			controlledDate = new Intl.DateTimeFormat('tr', {
				year: 'numeric',
				month: 'short',
				day: 'numeric'
			}).format(rawDate)
		}
	}

	onMount(() => {
		formatRelativeTime()
	})
</script>

<div class="flex items-center justify-between">
	<div class="flex items-center space-x-2">
		<div
			class="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-primary-500 text-center align-middle text-md font-bold text-white"
		>
			<span class="cursor-default">{user.name.charAt(0)}</span>
		</div>
		<div class="">
			<p class="font-semibold">{user.name}</p>
			<div class="-mt-[5px] flex items-center">
				<Rating {rating} />
				<span class="pl-1 pt-1 text-sm font-semibold text-gray-600">· {controlledDate}</span>
			</div>
		</div>
	</div>
	<div class="">
		<a href={link} target="_blank">
			<img
				src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
				alt="Google"
				class="h-7 w-7"
				width="24"
				height="24"
				loading="lazy"
			/>
		</a>
	</div>
</div>
