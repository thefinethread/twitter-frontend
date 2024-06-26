const API_PREFIX = '/user';

const useUser = () => {
	const { $api } = useNuxtApp();

	const searchUserService = async (searchTerm) => {
		const res = await $api(`${API_PREFIX}/search`, {
			query: { searchTerm },
		});

		return res.data;
	};

	return { searchUserService };
};

export default useUser;
