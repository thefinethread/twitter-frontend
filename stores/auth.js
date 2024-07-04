import useAuth from '../services/useAuth';

const useAuthStore = defineStore(
	'auth',
	() => {
		const user = ref(null);
		const loading = ref(false);
		const error = ref(null);

		const {
			loginService,
			signUpService,
			getCurrentUserService,
			logoutService,
		} = useAuth();

		const setUser = (value) => (user.value = value);
		const setLoading = (value) => (loading.value = value);
		const setError = (value) => (error.value = value);

		const login = async (userData) => {
			initState();
			try {
				const data = await loginService(userData);
				setUser(data);
			} catch (err) {
				setError(err?.data?.message);
			} finally {
				setLoading(false);
			}
		};

		const signUp = async (userData) => {
			initState();

			try {
				const data = await signUpService(userData);
				setUser(data);
			} catch (err) {
				setError(err.data.message);
			} finally {
				setLoading(false);
			}
		};

		const getCurrentUser = async () => {
			initState();

			try {
				const data = await getCurrentUserService();
				setUser(data);
				// navigateTo('/home');
			} catch (err) {
				setError(err.data.message);
			} finally {
				setLoading(false);
			}
		};

		const logout = async () => {
			initState();

			try {
				await logoutService();

				setUser(null);

				navigateTo('/');
			} catch (err) {
				setError(err?.data.message);
			} finally {
				setLoading(false);
			}
		};

		const initState = () => {
			setLoading(true);
			setError(null);
		};

		return {
			user,
			error,
			loading,
			login,
			logout,
			setUser,
			setLoading,
			setError,
			signUp,
			getCurrentUser,
		};
	},
	{ persist: true }
);

export default useAuthStore;
