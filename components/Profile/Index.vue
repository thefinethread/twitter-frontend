<template>
	<Loader v-if="loading" />

	<template v-else-if="!loading && user">
		<Header>
			<h4 class="text-xl font-semibold">{{ user.name }}</h4>
			<span class="opacity-50 text-sm">{{ user.postsCount }} posts</span>
		</Header>
		<ProfileInfo :user="user" />
	</template>
</template>

<script setup>
import useUserStore from '~/stores/user';

const userStore = useUserStore();
const { loading, user, error } = storeToRefs(userStore);

const { username } = useRoute().params;

onBeforeMount(() => {
	if (username) userStore.getProfile(username);
});

onBeforeUnmount(() => {
	userStore.resetUserState();
});
</script>
