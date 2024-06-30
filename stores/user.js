import useUser from '~/services/useUser';

const useUserStore = defineStore('user', () => {
	const user = ref(null);
	const userList = ref([]);
	const error = ref(null);
	const loading = ref(false);

	const {
		searchUserService,
		getProfileService,
		getFollowersService,
		getFollowingService,
		followUserService,
		UnFollowUserService,
	} = useUser();

	const setUser = (value) => (user.value = value);
	const setUserList = (value) => (userList.value = value);
	const setError = (value) => (error.value = value);
	const setLoading = (value) => (loading.value = value);

	const searchUser = async (searchTerm) => {
		initState();

		try {
			const data = await searchUserService(searchTerm);
			setUserList(data);
		} catch (err) {
			setError(err.data.message);
		} finally {
			setLoading(false);
		}
	};

	const getProfile = async (userId) => {
		initState();

		try {
			const data = await getProfileService(userId);
			setUser(data);
		} catch (err) {
			setError(err?.data?.message);
		} finally {
			setLoading(false);
		}
	};

	const getFollowers = async (username) => {
		initState();

		try {
			const data = await getFollowersService(username);
			setUserList(data);
		} catch (err) {
			setError(err?.data?.message);
		} finally {
			setLoading(false);
		}
	};

	const getFollowing = async (username) => {
		initState();

		try {
			const data = await getFollowingService(username);
			setUserList(data);
		} catch (err) {
			setError(err?.data?.message);
		} finally {
			setLoading(false);
		}
	};

	const followUser = async (followingId) => {
		setError(null);

		try {
			await followUserService(followingId);

			const index = userList.value.findIndex((user) => user.id === followingId);

			userList.value[index].isFollowing = true;

			if (user.value) {
				user.value.followingCount += 1;
			}
		} catch (err) {
			setError(err?.data?.message);
		}
	};

	const UnFollowUser = async (followingId) => {
		setError(null);

		try {
			await UnFollowUserService(followingId);

			const index = userList.value.findIndex((user) => user.id === followingId);

			userList.value[index].isFollowing = false;

			if (user.value) {
				user.value.followingCount -= 1;
			}
		} catch (err) {
			console.log(err);
			setError(err?.data?.message);
		}
	};

	const initState = () => {
		setError(null);
		setLoading(true);
	};

	const resetUserListState = () => {
		setUserList([]);
		setError(null);
		setLoading(false);
	};

	const resetUserState = () => {
		setUser(null);
		setError(null);
		setLoading(false);
	};

	return {
		userList,
		loading,
		error,
		user,
		searchUser,
		getProfile,
		getFollowers,
		getFollowing,
		resetUserListState,
		resetUserState,
		followUser,
		UnFollowUser,
	};
});

export default useUserStore;
