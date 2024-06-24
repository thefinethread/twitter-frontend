const API_PREFIX = '/post';

const usePost = () => {
	const { $api } = useNuxtApp();

	const getPostsService = async () => {
		const res = await $api(`${API_PREFIX}/post`);
		return res.data;
	};
};
