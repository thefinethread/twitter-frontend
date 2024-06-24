<template>
	<div class="h-full">
		<Loader v-if="loading" />

		<div v-else-if="error" class="text-center">
			<Message :message="error" />
		</div>

		<PostCard v-else v-for="post in posts" :post="post" />
	</div>
</template>

<script setup>
import usePostStore from '~/stores/post';

const postStore = usePostStore();
const { getPosts, resetState } = postStore;
const { posts, loading, error } = storeToRefs(postStore);

onMounted(() => {
	getPosts();
});

onBeforeUnmount(() => {
	resetState();
});
</script>
