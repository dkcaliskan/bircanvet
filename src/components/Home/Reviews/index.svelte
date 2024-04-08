<script>
	import { register } from 'swiper/element/bundle'
	import { fly } from 'svelte/transition'
	import { backOut } from 'svelte/easing'
	import { inview } from 'svelte-inview'

	import ReviewCard from './ReviewCard/index.svelte'
	import reviews from '../../../data/reviews.json'

	let isInView = false

	register()

	const spaceBetween = 30
	const onProgress = (e) => {
		const [swiper, progress] = e.detail
		/* console.log(progress) */
	}
	const onSlideChange = (e) => {
		/* console.log('slide changed') */
	}
</script>

<section id="comments" class="relative bg-primary-500">
	<h2
		class="pt-[50px] text-center text-xl font-bold tracking-wide text-white lg:pt-[200px] lg:text-2xl lgMax:px-3"
	>
		Evcil Dostunuzun Sağlığı Bizimle Güvende!
	</h2>
	<div class="mx-auto mt-6 h-[5px] w-full max-w-[600px] bg-second-500"></div>
	<div class="container relative mx-auto max-w-7xl px-3 pb-28 pt-14">
		<div
			class="min-h-[230px]"
			use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
			on:change={({ detail }) => {
				isInView = detail.inView
			}}
		>
			{#if isInView}
				<div
					in:fly={{
						x: -100,
						delay: 100,
						easing: backOut
					}}
				>
					<swiper-container
						class="comment-swiper"
						slides-per-view={3}
						space-between={spaceBetween}
						pagination={{
							clickable: true
						}}
						breakpoints={{
							0: {
								slidesPerView: 1
							},
							768: {
								slidesPerView: 2
							},
							1300: {
								slidesPerView: 3
							}
						}}
						on:swiperprogress={onProgress}
						on:swiperslidechange={onSlideChange}
					>
						{#each reviews as review, i (review.id)}
							<swiper-slide>
								<ReviewCard {review} />
							</swiper-slide>
						{/each}
					</swiper-container>
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	swiper-container::part(pagination) {
		position: unset;
		margin-top: 10px;
	}

	swiper-container::part(bullet-active) {
		background-color: #01b2a0;
		width: 10px;
		height: 10px;
	}

	swiper-container::part(bullet) {
		width: 10px;
		height: 10px;
		background-color: white;
	}
</style>
