export default defineNuxtPlugin(() => {
	const api = $fetch.create({
		baseURL: 'http://localhost:5000/api',
	});

	return {
		provide: {
			api,
		},
	};
});
