<template>
	<div class="h-full">
		<Loader v-if="loading" />

		<!-- <div v-else-if="error" class="text-center">
			<Message :message="error" />
		</div> -->

		<Message
			v-else-if="!posts?.length"
			size="text-xl"
			custom-class="opacity-40 mt-10"
		>
			<h4 class="text-3xl">No posts to display.</h4>
			<p class="text-base">Start following people or create your own post!</p>
		</Message>

		<PostCard v-else v-for="post in posts" :post="post" />
	</div>
</template>

<script setup>
import usePost from '~/services/usePost';

const posts = ref([]);
const loading = ref(false);

const { getPostsService } = usePost();

const fetchPosts = async () => {
	loading.value = true;

	try {
		const data = await getPostsService();
		posts.value = data;
	} catch (err) {
		console.log(err);
	} finally {
		loading.value = false;
	}
};

onMounted(() => fetchPosts());
</script>
