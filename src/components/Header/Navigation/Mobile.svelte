<script lang="ts">
	let isDropdownOpen = false

	const handleDropdown = () => {
		isDropdownOpen = !isDropdownOpen
	}
</script>

<header class="w-full bg-white">
	<!-- Top Header -->
	<div class="bg-primary-500">
		<div class="container mx-auto max-w-7xl py-2">
			<div class="flex items-center justify-center gap-4">
				<div class="flex items-center text-xsbase font-semibold">
					<img src="/assets/icons/phone.svg" alt="phone" class="h-7 w-7" width={28} height={28} />
					<a href="tel:123-456-1234" class="pl-1 text-white"><span>+90 554 906 04 80</span></a>
				</div>
				<div class="flex items-center text-base font-semibold">
					<img src="/assets/icons/location.svg" alt="location" class="h-6 w-6" width={24} height={24} />
					<a href="/iletisim" class="pl-1 text-white" target="_blank"><span>İzmir/Örnekköy</span></a
					>
				</div>
				<div class="flex items-center mobileMax:hidden">
					<a
						href="https://facebook.com/people/Bircan-Vet/100053847249330"
						class="pl-1 text-white"
						target="_blank"
					>
						<img src="/assets/icons/facebook.svg" alt="facebook" class="h-7 w-7" width={28} height={28} />
					</a>
				</div>
				<div class="flex items-center mobileMax:hidden">
					<a href="https://www.instagram.com/bircanvet/" class="pl-1 text-white" target="_blank">
						<img src="/assets/icons/instagram.svg" alt="instagram" class="h-7 w-7" width={28} height={28} />
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Navigation -->
	<nav class="">
		<div class="container mx-auto max-w-7xl">
			<div class="px-3">
				<!-- Brand -->
				<div class="mx-auto w-max py-9">
					<a href="/" class="h-min w-min">
						<img
							src="/assets/images/logo.png"
							width={130}
							height={130}
							loading="lazy"
							alt="Logo"
							class="mx-auto object-cover object-center"
						/>
					</a>
				</div>
				<button
					class="mb-1.5 flex w-full justify-between rounded-lg bg-gray-200 px-3 py-2 transition duration-300 ease-in-out hover:bg-gray-300"
					type="button"
					on:click={handleDropdown}
				>
					Sayfa seçin
					<span>
						{#if isDropdownOpen}
							<img
								src="/assets/icons/minus.svg"
								alt="arrow-up"
								width={20}
								height={20}
								loading="lazy"
								class="inline-block h-5 w-5"
							/>
						{:else}
							<img
								src="/assets/icons/plus.svg"
								alt="arrow-down"
								width={20}
								height={20}
								loading="lazy"
								class="inline-block h-5 w-5"
							/>
						{/if}
					</span>
				</button>
				{#if isDropdownOpen}
					<ul class="space-y-3 rounded-lg bg-gray-200">
						<li class="w-full">
							<a
								href="/"
								class="flex w-full items-center justify-between rounded-t-lg px-3 py-2 tracking-wide text-black transition duration-300 ease-in-out hover:bg-gray-300"
							>
								Anasayfa
								<span>
									<img
										src="/assets/icons/right-arrow.svg"
										alt="arrow-right"
										width={20}
										height={20}
										loading="lazy"
										class="inline-block h-5 w-5"
									/>
								</span>
							</a>
						</li>
						<li>
							<a
								href="/klinik"
								class="flex w-full items-center justify-between px-3 py-2 tracking-wide text-black transition duration-300 ease-in-out hover:bg-gray-300"
							>
								Kliniğimiz
								<span>
									<img
										src="/assets/icons/right-arrow.svg"
										alt="arrow-right"
										width={20}
										height={20}
										loading="lazy"
										class="inline-block h-5 w-5"
									/>
								</span>
							</a>
						</li>
						<li>
							<a
								href="/hizmetlerimiz"
								class="flex w-full items-center justify-between px-3 py-2 tracking-wide text-black transition duration-300 ease-in-out hover:bg-gray-300"
							>
								Hizmetlerimiz
								<span>
									<img
										src="/assets/icons/right-arrow.svg"
										alt="arrow-right"
										width={20}
										height={20}
										loading="lazy"
										class="inline-block h-5 w-5"
									/>
								</span>
							</a>
						</li>

						<li>
							<a
								href="/hakkimizda"
								class="flex w-full items-center justify-between px-3 py-2 tracking-wide text-black transition duration-300 ease-in-out hover:bg-gray-300"
							>
								Hakkımızda
								<span>
									<img
										src="/assets/icons/right-arrow.svg"
										alt="arrow-right"
										width={20}
										height={20}
										loading="lazy"
										class="inline-block h-5 w-5"
									/>
								</span>
							</a>
						</li>
						<li>
							<a
								href="/ekibimiz"
								class="flex w-full items-center justify-between px-3 py-2 tracking-wide text-black transition duration-300 ease-in-out hover:bg-gray-300"
							>
								Ekibimiz
								<span>
									<img
										src="/assets/icons/right-arrow.svg"
										alt="arrow-right"
										width={20}
										height={20}
										loading="lazy"
										class="inline-block h-5 w-5"
									/>
								</span>
							</a>
						</li>
						<li>
							<a
								href="/iletisim"
								class="flex w-full items-center justify-between rounded-b-lg px-3 py-2 tracking-wide text-black transition duration-300 ease-in-out hover:bg-gray-300"
							>
								İletişim
								<span>
									<img
										src="/assets/icons/right-arrow.svg"
										alt="arrow-right"
										width={20}
										height={20}
										loading="lazy"
										class="inline-block h-5 w-5"
									/>
								</span>
							</a>
						</li>

						
					</ul>
				{/if}
			</div>
		</div>
	</nav>
</header>
