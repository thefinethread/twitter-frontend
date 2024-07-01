<template>
	<div class="h-full">
		<Loader v-if="loading" />

		<div v-else-if="error" class="text-center">
			<Message :message="error" />
		</div>

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
import usePostStore from '~/stores/post';

const postStore = usePostStore();
const { getPosts, resetState } = postStore;
const { posts, loading, error } = storeToRefs(postStore);

onBeforeMount(() => {
	getPosts();
});

onBeforeUnmount(() => {
	resetState();
});
</script>
