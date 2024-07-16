import useUser from '~/services/useUser';
import useAuthStore from '~/stores/auth';

const useUserStore = defineStore('user', () => {
	const user = ref(null);
	const userList = ref([]);
	const error = ref(null);

	const {
		searchUserService,
		getProfileService,
		getFollowersService,
		getFollowingService,
		followUserService,
		UnFollowUserService,
	} = useUser();

	const authStore = useAuthStore();
	const { user: authUser } = storeToRefs(authStore);

	const setUser = (value) => (user.value = value);
	const setUserList = (value) => (userList.value = value);
	const setError = (value) => (error.value = value);

	const searchUser = async (searchTerm) => {
		setError(null);

		try {
			const data = await searchUserService(searchTerm);
			setUserList(data);
		} catch (err) {
			setError(err.data.message);
		}
	};

	const getProfile = async (userId) => {
		setError(null);

		try {
			const data = await getProfileService(userId);
			setUser(data);
		} catch (err) {
			setError(err?.data?.message);
		}
	};

	const getFollowers = async (username) => {
		setError(null);

		try {
			const data = await getFollowersService(username);
			setUserList(data);
		} catch (err) {
			setError(err?.data?.message);
		}
	};

	const getFollowing = async (username) => {
		setError(null);

		try {
			const data = await getFollowingService(username);
			setUserList(data);
		} catch (err) {
			setError(err?.data?.message);
		}
	};

	const followUser = async (followingId) => {
		setError(null);

		try {
			await followUserService(followingId);

			const index = userList.value.findIndex((user) => user.id === followingId);

			userList.value[index].isFollowing = true;

			if (user.value && authUser.id === user.id) {
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

			if (user.value && authUser.id === user.id) {
				user.value.followingCount -= 1;
			}
		} catch (err) {
			console.log(err);
			setError(err?.data?.message);
		}
	};

	const resetUserListState = () => {
		setUserList([]);
		setError(null);
	};

	const resetUserState = () => {
		setUser(null);
		setError(null);
	};

	return {
		userList,
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
