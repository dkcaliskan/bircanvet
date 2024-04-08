<script>
	import { register } from 'swiper/element/bundle'
	import { fly } from 'svelte/transition'
	import { backOut } from 'svelte/easing'
	import { inview } from 'svelte-inview'

	let isInView = false

	register()

	const spaceBetween = 30
	const slidesPerView = 3
	const onProgress = (e) => {
		const [swiper, progress] = e.detail
	}
	const onSlideChange = (e) => {}

	const photos = [
		'/assets/images/hospital/1.jpg',
		'/assets/images/hospital/2.jpg',
		'/assets/images/hospital/3.jpg',
		'/assets/images/hospital/4.jpg',
		'/assets/images/hospital/5.jpg',
		'/assets/images/hospital/6.jpg'
	]
</script>

<section id="hospital-home" class="relative">
	<div>
		<h2
			class="pt-[100px] text-center text-xl font-bold tracking-wide text-primary-500 lg:text-2xl lgMax:px-3"
		>
			Veterinerliğimize Göz Atın!
		</h2>
		<p></p>
		<div class="mx-auto mt-6 h-[5px] w-full max-w-[600px] bg-second-500"></div>
	</div>
	<div class="container mx-auto max-w-7xl px-3 pb-28 pt-14">
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
						x: 100,
						delay: 100,
						easing: backOut
					}}
				>
					<swiper-container
						class="hospital-swiper"
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
							1024: {
								slidesPerView: 3
							}
						}}
					>
						{#each photos as photo, i}
							<swiper-slide lazy="true">
								<div key={i}>
									<img
										src={photo}
										loading="lazy"
										alt={`hospital photo ${i}`}
										class="h-full max-h-[200px] min-h-[200px] w-full rounded-lg object-cover shadow-lg"
										width={500}
										height={250}
									/>
								</div>
							</swiper-slide>
						{/each}
					</swiper-container>
				</div>
			{/if}
		</div>

		<div class="mt-6 text-center">
			<a
				href="/klinik"
				class="inline-block rounded-md bg-second-500 px-6 py-3 text-base font-medium uppercase tracking-widest text-white transition-colors duration-300 hover:bg-second-600"
			>
				TÜMÜNÜ GÖR
			</a>
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
	}
	swiper-container {
		width: 100%;
		height: 100%;
	}

	swiper-slide {
		overflow: hidden;
	}
</style>
