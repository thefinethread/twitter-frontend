<template>
	<section class="flex flex-col justify-center items-center">
		<div>
			<h2 class="text-4xl mb-10 text-left font-semibold leading-snug">
				Create your account
			</h2>
			<form class="sm:min-w-[28rem] w-80">
				<InputText label="Name" />
				<InputText label="Email" />
				<InputText label="Password" type="password" />

				<ButtonPrimary width="w-full" custom-class="py-3"
					>Sign Up</ButtonPrimary
				>
			</form>
		</div>
	</section>
</template>

<script setup>
definePageMeta({
	layout: 'auth',
});
</script>
