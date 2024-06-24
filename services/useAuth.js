const API_PREFIX = '/auth';

const useAuth = () => {
	const { $api } = useNuxtApp();

	const loginService = async (userData) => {
		const res = await $api(`${API_PREFIX}/login`, {
			method: 'POST',
			body: userData,
		});

		return res.data;
	};

	const signUpService = async (userData) => {
		const res = await $api(`${API_PREFIX}/signup`, {
			method: 'POST',
			body: userData,
		});

		return res.data;
	};

	const getCurrentUserService = async () => {
		const res = await $api(`${API_PREFIX}/get-me`);
		return res.data;
	};

	return { loginService, signUpService, getCurrentUserService };
};
export default useAuth;
