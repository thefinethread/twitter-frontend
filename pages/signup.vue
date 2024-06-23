<template>
	<section class="flex flex-col justify-center items-center">
		<div>
			<h2 class="text-4xl mb-10 text-left font-semibold leading-snug">
				Create your account
			</h2>
			<form @submit.prevent="handleSubmit" class="sm:min-w-[28rem] w-80">
				<InputText v-model="name" label="Name" />
				<InputText v-model="username" label="Username" />
				<InputText v-model="email" label="Email" />
				<InputText v-model="password" label="Password" type="password" />

				<MessageError :error="error" />
				<ButtonPrimary width="w-full" custom-class="py-3">
					<Loader v-if="loading" />
					<p v-else>Sign Up</p>
				</ButtonPrimary>
			</form>
		</div>
	</section>
</template>

<script setup>
import useAuthStore from '../stores/auth';

const name = ref('');
const email = ref('');
const username = ref('');
const password = ref('');

const authStore = useAuthStore();
const { user, loading, error } = storeToRefs(authStore);

const handleSubmit = async () => {
	if (!name.value || !email.value || !username.value || !password.value) return;

	const userData = {
		name: name.value,
		username: username.value,
		email: email.value,
		password: password.value,
	};

	await authStore.signUp(userData);

	if (user.value) navigateTo('/home');
};

definePageMeta({ layout: 'auth' });
</script>
