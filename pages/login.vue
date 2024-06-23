<template>
	<section class="flex flex-col justify-center items-center">
		<div>
			<h2 class="text-4xl mb-10 text-left font-semibold leading-snug">
				Sign in to X
			</h2>
			<form class="sm:min-w-[28rem] w-80" @submit.prevent="handleSubmit">
				<InputText v-model="email" label="Email" />
				<InputText v-model="password" label="Password" type="password" />

				<p v-if="error" class="mb-4 text-red-500">{{ error }}</p>
				<ButtonPrimary width="w-full" custom-class="py-3">
					<Loader v-if="loading" />
					<p v-else>Sign In</p>
				</ButtonPrimary>
			</form>
		</div>
	</section>
</template>

<script setup>
import useAuthStore from '../stores/auth';

const email = ref('');
const password = ref('');

const authStore = useAuthStore();
const { login } = authStore;
const { user, loading, error } = storeToRefs(authStore);

const handleSubmit = async () => {
	if (!email.value || !password.value) {
		return;
	}

	const userData = {
		email: email.value,
		password: password.value,
	};

	await login(userData);

	if (user.value) navigateTo('/home');
};

definePageMeta({ layout: 'auth' });
</script>
