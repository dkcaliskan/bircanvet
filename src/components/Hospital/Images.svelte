<script lang="ts">
	let isModalOpen = false
	let activeImage = {
		src: '',
		alt: '',
		width: 0,
		height: 0
	}

	import { Image } from '@unpic/svelte'

	const openModal = (src: string, alt: string, width: number, height: number) => {
		activeImage.src = src
		activeImage.alt = alt
		activeImage.width = width
		activeImage.height = height
		isModalOpen = true
		if (isModalOpen) {
		} else {
		}
	}

	const images = [
		{
			src: '/assets/images/hospital/1.jpg',
			alt: 'Hospital 1',
			width: 1920,
			height: 1080
		},
		{
			src: '/assets/images/hospital/2.jpg',
			alt: 'Hospital 2',
			width: 1600,
			height: 1067
		},
		{
			src: '/assets/images/hospital/3.jpg',
			alt: 'Hospital 3',
			width: 1920,
			height: 1080
		},
		{
			src: '/assets/images/hospital/4.jpg',
			alt: 'Hospital 4',
			width: 1920,
			height: 1080
		},
		{
			src: '/assets/images/hospital/5.jpg',
			alt: 'Hospital 5',
			width: 1920,
			height: 1080
		},
		{
			src: '/assets/images/hospital/6.jpg',
			alt: 'Hospital 6',
			width: 1920,
			height: 1080
		},
		{
			src: '/assets/images/hospital/7.jpg',
			alt: 'Hospital 7',
			width: 602,
			height: 1080
		},
		{
			src: '/assets/images/hospital/8.jpg',
			alt: 'Hospital 8',
			width: 603,
			height: 1080
		},
		{
			src: '/assets/images/hospital/9.jpg',
			alt: 'Hospital',
			width: 862,
			height: 1075
		}
	]
</script>

<section id="hospital-photos" class="container mx-auto max-w-7xl lg:pt-[70px] lgMax:mt-[70px]">
	<div class="gallery">
		<div class="thumbnails grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xlMax:px-3">
			{#each images as image, i}
				<button
					type="button"
					class="thumbnail mx-auto cursor-zoom-in"
					on:click={() => {
						openModal(image.src, image.alt, image.width, image.height)
					}}
				>
					<Image src={image.src} alt={image.alt} width={500} height={300} layout="constrained" />
				</button>
			{/each}
		</div>
		<div
			class={`${isModalOpen ? 'lightbox cursor-zoom-out ' : 'hidden'}`}
			on:click={() => (isModalOpen = false)}
		>
			<div class="">
				<img
					src={activeImage.src}
					alt={activeImage.alt}
					width={activeImage.width}
					height={activeImage.height}
					class="lightbox-image h-full max-h-[90vh] w-full max-w-[90vw] object-cover object-center"
				/>
			</div>
		</div>
	</div>
</section>

<style>
	.lightbox {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 100;
	}
</style>
