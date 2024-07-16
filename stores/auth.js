import useAuth from '../services/useAuth';

const useAuthStore = defineStore(
	'auth',
	() => {
		const user = ref(null);
		const error = ref(null);

		const { loginService, signUpService, logoutService } = useAuth();

		const setUser = (value) => (user.value = value);
		const setError = (value) => (error.value = value);

		const login = async (userData) => {
			setError(null);
			try {
				const data = await loginService(userData);
				setUser(data);
			} catch (err) {
				setError(err?.data?.message);
			}
		};

		const signUp = async (userData) => {
			setError(null);

			try {
				const data = await signUpService(userData);
				setUser(data);
			} catch (err) {
				setError(err.data.message);
			}
		};

		const logout = async () => {
			setError(null);

			try {
				await logoutService();

				setUser(null);

				navigateTo('/');
			} catch (err) {
				setError(err?.data.message);
			}
		};

		return {
			user,
			error,
			login,
			logout,
			setUser,
			setError,
			signUp,
		};
	},
	{ persist: true }
);

export default useAuthStore;
