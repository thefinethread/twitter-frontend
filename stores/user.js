import useUser from '~/services/useUser';

const useUserStore = defineStore('user', () => {
	const searchedUsers = ref([]);
	const error = ref(null);
	const loading = ref(false);

	const { searchUserService } = useUser();

	const setSearchedUsers = (value) => (searchedUsers.value = value);
	const setError = (value) => (error.value = value);
	const setLoading = (value) => (loading.value = value);

	const searchUser = async (searchTerm) => {
		initState();

		try {
			const data = await searchUserService(searchTerm);
			setSearchedUsers(data);
		} catch (err) {
			setError(err.data.message);
		} finally {
			setLoading(false);
		}
	};

	const initState = () => {
		setError(null);
		setLoading(true);
	};

	const resetSearchedUserState = () => {
		setSearchedUsers([]);
		setError(null);
		setLoading(false);
	};

	return {
		searchedUsers,
		loading,
		error,
		searchUser,
		resetSearchedUserState,
	};
});

export default useUserStore;
