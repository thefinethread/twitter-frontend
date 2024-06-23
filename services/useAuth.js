const useAuth = () => {
	const { $api } = useNuxtApp();

	const loginService = async (userData) => {
		const res = await $api('/auth/login', {
			method: 'POST',
			body: userData,
		});

		return res.data;
	};

	return { loginService };
};
export default useAuth;
