const API_PREFIX = '/post';

const usePost = () => {
	const { $api } = useNuxtApp();

	const getPostsService = async () => {
		const res = await $api(`${API_PREFIX}`);
		return res.data;
	};

	const createPostService = async (post) => {
		const res = await $api(`${API_PREFIX}`, {
			method: 'POST',
			body: post,
		});

		return res;
	};

	return { getPostsService, createPostService };
};

export default usePost;
