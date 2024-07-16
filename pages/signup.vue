<template>
	<section class="flex flex-col justify-center items-center">
		<div>
			<h2 class="text-4xl mb-10 text-left font-semibold leading-snug">
				Create your account
			</h2>
			<form @submit.prevent="handleSignUp" class="sm:min-w-[28rem] w-80">
				<InputText label="Name" name="name" />
				<InputText label="Username" name="username" />
				<InputText label="Email" name="email" />
				<InputText label="Password" type="password" name="password" />

				<MessageError :error="error" />

				<ButtonPrimary
					:disabled="!meta.valid"
					width="w-full"
					bg-color="bg-zinc-100"
					text-color="text-zinc-900"
					height="h-14"
					custom-class="py-3"
				>
					<Loader v-if="loading" />
					<p v-else>Sign Up</p>
				</ButtonPrimary>
			</form>
		</div>
	</section>
</template>

<script setup>
import * as yup from 'yup';
import useAuthStore from '../stores/auth';

const loading = ref(false);

const authStore = useAuthStore();
const { user, error } = storeToRefs(authStore);

const schema = yup.object({
	name: yup.string().min(3).required(),
	username: yup.string().min(3).required(),
	email: yup.string().email().required(),
	password: yup.string().min(6).required(),
});

const { handleSubmit, meta } = useForm({
	validationSchema: schema,
	initialValues: {
		name: '',
		username: '',
		email: '',
		password: '',
	},
});

const handleSignUp = handleSubmit(async (values) => {
	loading.value = true;
	await authStore.signUp(values);
	loading.value = false;

	if (user.value) navigateTo('/home');
});

const { value: name } = useField('name');
const { value: username } = useField('username');

watch(name, (newName, prevName) => {
	if (username.value.replaceAll('_', ' ') === prevName) {
		username.value = newName.toLowerCase().replaceAll(' ', '_');
	}
});

definePageMeta({ layout: 'auth' });
</script>
