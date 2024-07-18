import useAuthStore from '~/stores/auth';

export default defineNuxtPlugin(() => {
	const api = $fetch.create({
		baseURL: 'http://localhost:5000/api',
		credentials: 'include',

		onResponseError({ request, response }) {
			if (response.status === 401) {
				useAuthStore().logout();
			}
		},
	});

	return {
		provide: {
			api,
		},
	};
});
