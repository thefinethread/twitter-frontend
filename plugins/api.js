export default defineNuxtPlugin(() => {
	const api = $fetch.create({
		baseURL: 'http://localhost:5000/api',
		credentials: 'include',
	});

	return {
		provide: {
			api,
		},
	};
});
