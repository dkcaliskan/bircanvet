<script>
	import emailjs from '@emailjs/browser'

	let buttonText = 'Gönder'
	let ButtonState = 'idle'

	let name = ''
	let nameError = ''
	let email = ''
	let emailError = ''
	let phone = ''
	let phoneError = ''
	let message = ''
	let messageError = ''
	let loading = false

	const sendEmail = async (e) => {
		e.preventDefault()

		if (!name.trim()) {
			nameError = 'Lütfen adınızı giriniz.'
			return
		}
		if (!validateEmail(email)) {
			emailError = 'Lütfen geçerli bir e-posta adresi giriniz.'
			return
		}
		if (!phone.trim()) {
			phoneError = 'Lütfen telefon numaranızı giriniz.'
			return
		}
		if (!message.trim()) {
			messageError = 'Lütfen mesajınızı giriniz.'
			return
		}

		nameError = ''
		emailError = ''
		phoneError = ''
		messageError = ''

		loading = true
		buttonText = 'Gönderiliyor...'
		ButtonState = 'loading'
		console.log(import.meta.env.PUBLIC_EMAILJS_SERVICE_ID)
		try {
			const response = await emailjs.send(
				import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
				import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
				{
					from_name: name,
					from_email: email,
					phone_number: phone,
					message: message
				},
				import.meta.env.PUBLIC_EMAILJS_USER_ID
			)

			if (response.status === 200) {
				loading = false
				buttonText = 'Gönderildi!'
				ButtonState = 'success'
				name = ''
				email = ''
				phone = ''
				message = ''

				setTimeout(() => {
					buttonText = 'Gönder'
					ButtonState = 'idle'
				}, 3000) // Reset after 3 seconds
			} else {
				loading = false
				buttonText = 'Gönderilemedi!'
				ButtonState = 'error'
				setTimeout(() => {
					buttonText = 'Gönder'
					ButtonState = 'idle'
				}, 3000) // Reset after 3 seconds
			}
		} catch (error) {
			console.error('Email gönderme hatası:', error)
			loading = false
			buttonText = 'Gönderilemedi!'
			ButtonState = 'error'
			setTimeout(() => {
				buttonText = 'Gönder'
				ButtonState = 'idle'
			}, 3000) // Reset after 3 seconds
		}

		function validateEmail(email) {
			const re =
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			return re.test(String(email).toLowerCase())
		}
	}

	/* emailjs
			.send(
				import.meta.env.SECRET_EMAILJS_SERVICE_ID,
				import.meta.env.SECRET_EMAILJS_TEMPLATE_ID,
				{
					from_name: name,
					from_email: email,
					phone_number: phone,
					message: message
				},
				import.meta.env.SECRET_EMAILJS_USER_ID
			)
			.then(
				() => {
					loading = false
					buttonText = 'Gönderildi!'
					ButtonState = 'success'
					name = ''
					email = ''
					phone = ''
					message = ''
					setTimeout(() => {
						buttonText = 'Gönder'
						ButtonState = 'idle'
					}, 3000)
				},
				(error) => {
					loading = false
					buttonText = 'Gönderilemedi!'
					ButtonState = 'error'
					console.log('FAILED...', error)
					setTimeout(() => {
						buttonText = 'Gönder'
						ButtonState = 'idle'
					}, 3000)
				}
			) */
	/* } */
</script>

<div>
	<form on:submit|preventDefault={sendEmail}>
		<h2 class="text-center text-2xl font-bold leading-[4rem] tracking-widest text-white">
			Bize Ulaşın
		</h2>
		<div class="mt-6 grid gap-5 sm:grid-cols-2 lg:mt-12">
			<div>
				<label for="name" class="font-bold text-white">Adınız</label>
				<input
					type="text"
					name="name"
					id="name"
					bind:value={name}
					placeholder="Adınız"
					class="w-full rounded-md border-2 border-gray-300 p-3 focus:border-second-500 focus:outline-none"
				/>
				{#if nameError}
					<p class="text-red-500">{nameError}</p>
				{/if}
			</div>
			<div>
				<label for="email" class="font-bold text-white">E-posta Adresiniz</label>
				<input
					type="text"
					name="email"
					id="email"
					bind:value={email}
					placeholder="E-posta Adresiniz"
					class="w-full rounded-md border-2 border-gray-300 p-3 focus:border-second-500 focus:outline-none"
				/>
				{#if emailError}
					<p class="text-red-500">{emailError}</p>
				{/if}
			</div>
		</div>
		<div class="mt-5">
			<label for="phone" class="font-bold text-white">Telefon Numaranız</label>
			<input
				type="text"
				name="phone"
				id="phone"
				bind:value={phone}
				placeholder="Telefon Numaranız"
				class="w-full rounded-md border-2 border-gray-300 p-3 focus:border-second-500 focus:outline-none"
			/>
			{#if phoneError}
				<p class="text-red-500">{phoneError}</p>
			{/if}
		</div>
		<div class="mt-5">
			<label for="message" class="font-bold text-white">Mesajınız</label>
			<textarea
				name="message"
				id="message"
				bind:value={message}
				placeholder="Mesajınız"
				class="w-full rounded-md border-2 border-gray-300 p-3 focus:border-second-500 focus:outline-none"
			></textarea>
			{#if messageError}
				<p class="text-red-500">{messageError}</p>
			{/if}
		</div>
		<div class="mt-5">
			<button
				type="submit"
				disabled={ButtonState === 'loading' || ButtonState === 'error' || ButtonState === 'success'}
				class={`w-full rounded-md  p-3 text-base font-bold  transition-all duration-300 ease-in-out  focus:outline-none ${ButtonState === 'loading' && 'pointer-events-none bg-second-700'} ${ButtonState === 'error' && 'pointer-events-none bg-red-500  text-white'} ${ButtonState === 'success' && 'pointer-events-none bg-green-500  text-white'} ${ButtonState === 'idle' && 'bg-second-500 text-white hover:bg-second-600'}`}
			>
				{buttonText}
			</button>
		</div>
	</form>
</div>
