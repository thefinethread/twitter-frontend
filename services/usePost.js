const API_PREFIX = '/post';

const usePost = () => {
	const { $api } = useNuxtApp();

	const getPostsService = async () => {
		const res = await $api(`${API_PREFIX}`);
		return res.data;
	};

	return { getPostsService };
};

export default usePost;
