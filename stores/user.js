import useUser from '~/services/useUser';

const useUserStore = defineStore('user', () => {
	const searchedUsers = ref([]);
	const error = ref(null);
	const loading = ref(false);

	const { searchUserService, followUserService, UnFollowUserService } =
		useUser();

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

	const followUser = async (followingId) => {
		setError(null);

		try {
			await followUserService(followingId);

			const index = searchedUsers.value.findIndex(
				(user) => user.id === followingId
			);

			searchedUsers.value[index].isFollowing = true;
		} catch (err) {
			setError(err?.data?.message);
		}
	};

	const UnFollowUser = async (followingId) => {
		setError(null);

		try {
			await UnFollowUserService(followingId);

			const index = searchedUsers.value.findIndex(
				(user) => user.id === followingId
			);

			searchedUsers.value[index].isFollowing = false;
		} catch (err) {
			console.log(err);
			setError(err?.data?.message);
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
		followUser,
		UnFollowUser,
	};
});

export default useUserStore;
