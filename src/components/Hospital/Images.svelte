<script lang="ts">
	let isModalOpen = false
	let activeImage = {
		src: '',
		alt: '',
		width: 0,
		height: 0
	}

	const body = document.querySelector('body')

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
		<div
			class="thumbnails md:gird-cols-2 grid grid-cols-1 gap-6 lg:grid-cols-3 xl:gap-9 xlMax:px-3"
		>
			{#each images as image, i}
				<button
					type="button"
					class="thumbnail cursor-zoom-in"
					on:click={() => {
						openModal(image.src, image.alt, image.width, image.height)
					}}
				>
					<img
						src={image.src}
						alt={image.alt}
						width={image.width}
						height={image.height}
						loading="lazy"
						class="thumbnail-image"
					/>
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

	.album .responsive-container-block {
		min-height: 75px;
		height: fit-content;
		width: 100%;
		padding-top: 10px;
		padding-right: 10px;
		padding-bottom: 10px;
		padding-left: 10px;
		display: flex;
		flex-wrap: wrap;
		margin-top: 0px;
		margin-right: auto;
		margin-bottom: 0px;
		margin-left: auto;
		justify-content: flex-start;
	}

	.album .responsive-container-block.bg {
		max-width: 1320px;
		margin: 0 0 0 0;
		justify-content: space-between;
	}

	.album .img {
		width: 100%;
		margin: 0 0 20px 0;
	}

	.album .responsive-container-block.img-cont {
		flex-direction: column;
		max-width: 33.3%;
		min-height: auto;
		margin: 0 0 0 0;
		height: 100%;
	}

	.album .img.img-big {
		height: 50%;
		margin: 0 0 16px 0;
	}

	@media (max-width: 1024px) {
		.album .img {
			margin: 0 0 18px 0;
		}
	}

	@media (max-width: 768px) {
		.album .img {
			max-width: 32.5%;
			margin: 0 0 0 0;
		}

		.album .responsive-container-block.bg {
			flex-direction: column;
		}

		.album .responsive-container-block.img-cont {
			max-width: 100%;
			flex-direction: row;
			justify-content: space-between;
		}

		.album .img.img-big {
			max-width: 49%;
			margin: 0 0 0 0;
		}
	}

	@media (max-width: 500px) {
		.album .img {
			max-width: 94%;
			margin: 0 0 25px 0;
		}

		.album .responsive-container-block.img-cont {
			flex-direction: column;
			align-items: center;
			padding: 10px 10px 10px 10px;
		}

		.album .img.img-big {
			max-width: 94%;
			margin: 0 0 25px 0;
		}

		.album .img.img-last {
			margin: 0 0 5px 0;
		}
	}
</style>
