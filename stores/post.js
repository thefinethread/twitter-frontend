const usePostStore = defineStore('post', () => {
	const posts = ref([]);
	const loading = ref(false);
	const error = ref(null);

	const getPosts = async () => {};
});

export default usePostStore;
