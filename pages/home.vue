<template>
	<div class="h-full">
		<Loader v-if="loading" />

		<!-- <div v-else-if="error" class="text-center">
			<Message size="text-2xl" custom-class="opacity-40 mt-10">
				{{ error.data?.message }}
			</Message>
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
import useAuthStore from '~/stores/auth';

const posts = ref([]);
const loading = ref(true);

const { getPostsService } = usePost();

const fetchPosts = async () => {
	const { data, error } = await getPostsService();

	if (data.value) {
		posts.value = data.value?.data;
	}
	if (error?.value?.statusCode == 401) {
		useAuthStore().logout();
	}

	loading.value = false;
};

await fetchPosts();
</script>
