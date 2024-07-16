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
import usePost from '~/services/usePost';

const posts = ref([]);
const loading = ref(false);

const { username } = useRoute().params;

const { getPostsByUsernameService } = usePost();

const fetchPosts = async () => {
	if (!username) return;

	loading.value = true;

	try {
		const data = await getPostsByUsernameService(username);
		posts.value = data;
	} catch (err) {
		console.log(err);
	} finally {
		loading.value = false;
	}
};

onBeforeMount(() => fetchPosts());
</script>
