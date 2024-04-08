<script>
	import { fly } from 'svelte/transition'
	import { backOut } from 'svelte/easing'
	import { inview } from 'svelte-inview'

	let isInView = false
</script>

<section id="about" class="mt-[30px] md:mt-[523px]">
	<div class="w-full bg-primary-500">
		<div class="mx-auto max-w-3xl py-24">
			<div
				class="min-h-[450px]"
				use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
				on:change={({ detail }) => {
					isInView = detail.inView
				}}
			>
				{#if isInView}
					<div class="border-[12px] border-second-500 bg-white py-12">
						<div
							class=""
							in:fly={{
								y: -100,
								delay: 200,
								easing: backOut
							}}
						>
							<h2 class="text-center text-2xl font-bold tracking-wide text-primary-500">
								Hikayemiz
							</h2>
							<div class="mx-auto mt-3 h-[5px] w-[50px] bg-primary-500"></div>
							<div class="mt-10 px-3 lg:px-9">
								<p class="text-center text-base text-black">
									Evcil dostlarınızın sağlığı ve mutluluğu bizim önceliğimizdir. Bircanvet olarak,
									sizin ve evcil dostlarınızın yaşam tarzına ve ihtiyaçlarına özel olarak
									tasarlanmış geniş bir yelpazede veteriner hizmeti sunmaktayız. Bizim için sadece
									hastalıkları tedavi etmek değil, aynı zamanda evcil dostlarınızın sağlıklı
									kalmasını sağlamak da önemlidir. Bu nedenle, düzenli kontrolleri teşvik ediyoruz.
									Sıcak ve konforlu kliniğimizde, uzman veterinerlerimiz size ve sevgili
									dostlarınıza en iyi veteriner bakımı ve hizmetini sunmak için buradadır.
									Bircanvet'de, evcil dostlarınızın sağlığı ve refahı için size yardımcı olmaktan
									mutluluk duyacağız. Birlikte uzun ve mutlu bir yolculuk için bize katılın!
								</p>
							</div>

							<div>
								<div class="mt-10 px-9 text-center">
									<a
										href="/hakkimizda"
										class="inline-block rounded-md bg-second-500 px-6 py-3 text-base font-medium uppercase tracking-wide text-white transition-colors duration-300 hover:bg-second-600"
									>
										Daha Fazla
									</a>
								</div>
							</div>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>
