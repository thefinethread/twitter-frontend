import usePost from '~/services/usePost';

const usePostStore = defineStore('post', () => {
	const posts = ref([]);
	const loading = ref(false);
	const error = ref(null);

	const { getPostsService, createPostService } = usePost();

	const setPosts = (value) => (posts.value = value);
	const setLoading = (value) => (loading.value = value);
	const setError = (value) => (error.value = value);

	const getPosts = async () => {
		initState();

		try {
			const data = await getPostsService();
			setPosts(data);
		} catch (err) {
			setError(err.data.message);
		} finally {
			setLoading(false);
		}
	};

	const createPost = async (post) => {
		initState();

		try {
			const { data, message } = await createPostService(post);
		} catch (err) {
			console.log(err);
			setError(err.data.message);
		} finally {
			setLoading(false);
		}
	};

	const initState = () => {
		setError(null);
		setLoading(true);
	};

	const resetState = () => {
		setError(null);
		setLoading(false);
		setPosts([]);
	};

	return {
		posts,
		loading,
		error,
		getPosts,
		createPost,
		resetState,
	};
});

export default usePostStore;
