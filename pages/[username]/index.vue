<template>
	<div>
		<Loader v-if="loading" />

		<!-- <div v-else-if="error" class="text-center">
			<Message :message="error" />
		</div> -->

		<PostCard v-else v-for="post in posts" :post="post" />
	</div>
</template>

<script setup>
import usePostStore from '~/stores/post';

const { username } = useRoute().params;

const postStore = usePostStore();
const { getPostsByUsername, resetState } = postStore;
const { posts, loading, error } = storeToRefs(postStore);

onBeforeMount(() => {
	if (username) getPostsByUsername(username);
});

onBeforeUnmount(() => {
	resetState();
});
</script>
