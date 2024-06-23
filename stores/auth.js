import useAuth from '../services/useAuth';

const useAuthStore = defineStore('auth', () => {
	const user = ref(null);
	const loading = ref(false);
	const error = ref(null);

	const { loginService } = useAuth();

	const setUser = (value) => (user.value = value);
	const setLoading = (value) => (loading.value = value);
	const setError = (value) => (error.value = value);

	const login = async (userData) => {
		setLoading(true);
		setError(null);

		try {
			const data = await loginService(userData);
			setUser(data);
		} catch (err) {
			setError(err.data.message);
		} finally {
			setLoading(false);
		}
	};

	return {
		user,
		error,
		loading,
		login,
	};
});

export default useAuthStore;
