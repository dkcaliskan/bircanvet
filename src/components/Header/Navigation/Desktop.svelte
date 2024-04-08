<script lang="ts">
</script>

<header class="fixed top-0 z-30 w-full bg-white shadow-md backdrop-blur-xl">
	<!-- Top Header -->
	<div class="bg-primary-500">
		<div class="container mx-auto max-w-7xl py-2">
			<div class="flex items-center justify-center gap-4">
				<div class="flex items-center text-xsbase font-semibold">
					<img src="/assets/icons/phone.svg" alt="phone" class="h-7 w-7" width={28} height={28} />
					<a href="tel:+90-554-506-04-80" class="pl-1 text-white"><span>+90 554 906 04 80</span></a>
				</div>
				<div class="flex items-center text-base font-semibold">
					<img
						src="/assets/icons/location.svg"
						alt="location"
						class="h-6 w-6"
						width={24}
						height={24}
					/>
					<a href="/iletisim" class="pl-1 text-white" target="_blank"><span>İzmir/Örnekköy</span></a
					>
				</div>
				<div class="flex items-center">
					<a
						href="https://facebook.com/people/Bircan-Vet/100053847249330"
						class="pl-1 text-white"
						target="_blank"
					>
						<img
							src="/assets/icons/facebook.svg"
							alt="facebook"
							class="h-7 w-7"
							width={28}
							height={28}
						/>
					</a>
				</div>
				<div class="flex items-center">
					<a href="https://www.instagram.com/bircanvet/" class="pl-1 text-white" target="_blank">
						<img
							src="/assets/icons/instagram.svg"
							alt="instagram"
							class="h-7 w-7"
							width={28}
							height={28}
						/>
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Navigation -->
	<nav class="py-4">
		<div class="container mx-auto max-w-7xl px-3">
			<div class="">
				<div class="flex items-center">
					<!-- Navigation -->
					<ul
						class="mx-auto grid grid-cols-7 items-center justify-center gap-9 text-center text-md font-medium"
					>
						<li>
							<a
								href="/"
								class="tracking-wide text-black decoration-second-500 underline-offset-4 transition duration-300 ease-in-out hover:underline"
								>Anasayfa</a
							>
						</li>
						<li>
							<a
								href="/klinik"
								class="tracking-wide text-black decoration-second-500 underline-offset-4 transition duration-300 ease-in-out hover:underline"
								>Kliniğimiz</a
							>
						</li>
						<li>
							<a
								href="/hizmetlerimiz"
								class="tracking-wide text-black decoration-second-500 underline-offset-4 transition duration-300 ease-in-out hover:underline"
								>Hizmetlerimiz</a
							>
						</li>
						<li class="flex items-center justify-center">
							<!-- Brand -->
							<div class="">
								<a href="/" class="h-max w-max">
									<img
										src="/assets/images/logo.png"
										width={100}
										height={100}
										loading="lazy"
										alt="Logo"
										class="object-cover object-center"
									/>
								</a>
							</div>
						</li>
						<li>
							<a
								href="/hakkimizda"
								class="tracking-wide text-black decoration-second-500 underline-offset-4 transition duration-300 ease-in-out hover:underline"
								>Hakkımızda</a
							>
						</li>
						<li>
							<a
								href="/ekibimiz"
								class="tracking-wide text-black decoration-second-500 underline-offset-4 transition duration-300 ease-in-out hover:underline"
								>Ekibimiz</a
							>
						</li>
						<li>
							<a
								href="/iletisim"
								class="tracking-wide text-black decoration-second-500 underline-offset-4 transition duration-300 ease-in-out hover:underline"
								>İletişim</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</header>
