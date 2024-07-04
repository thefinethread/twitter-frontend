<template>
	<section class="flex flex-col justify-center items-center">
		<div>
			<h2 class="text-4xl mb-10 text-left font-semibold leading-snug">
				Sign in to X
			</h2>
			<form class="sm:min-w-[28rem] w-80" @submit.prevent="handleLogin">
				<InputText label="Email" name="email" />
				<InputText label="Password" type="password" name="password" />

				<MessageError :error="error" />
				<ButtonPrimary
					:disabled="!meta.valid"
					width="w-full"
					custom-class="py-3"
				>
					<Loader v-if="loading" />
					<p v-else>Sign In</p>
				</ButtonPrimary>
			</form>
		</div>
	</section>
</template>

<script setup>
import useAuthStore from '~/stores/auth';
import * as yup from 'yup';

const authStore = useAuthStore();
const { setLoading, setError, login } = authStore;
const { user, loading, error } = storeToRefs(authStore);

const schema = yup.object({
	email: yup.string().email().required(),
	password: yup.string().required(),
});

const { handleSubmit, meta } = useForm({
	validationSchema: schema,
	initialValues: {
		email: '',
		password: '',
	},
});

const handleLogin = handleSubmit(async (values) => {
	await login(values);

	if (user.value) navigateTo('/home');
});

onUnmounted(() => {
	setError(null);
	setLoading(false);
});

definePageMeta({ layout: 'auth' });
</script>
