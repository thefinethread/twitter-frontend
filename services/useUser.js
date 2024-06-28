const API_PREFIX = '/user';

const useUser = () => {
	const { $api } = useNuxtApp();

	const searchUserService = async (searchTerm) => {
		const res = await $api(`${API_PREFIX}/search`, {
			query: { searchTerm },
		});

		return res.data;
	};

	const getProfileService = async (userId) => {
		const res = await $api(`${API_PREFIX}/profile/${userId}`);

		return res.data;
	};

	const followUserService = async (followingId) => {
		const res = await $api(`${API_PREFIX}/follow`, {
			method: 'POST',
			query: { followingId },
		});

		return res.data;
	};

	const UnFollowUserService = async (followingId) => {
		const res = await $api(`${API_PREFIX}/unfollow`, {
			method: 'DELETE',
			query: { followingId },
		});

		return res.data;
	};

	return {
		searchUserService,
		getProfileService,
		followUserService,
		UnFollowUserService,
	};
};

export default useUser;
