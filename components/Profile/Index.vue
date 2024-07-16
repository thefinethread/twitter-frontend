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

const loading = ref(false);

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const { username } = useRoute().params;

const fetchUserProfile = async () => {
	if (username) {
		loading.value = true;
		await userStore.getProfile(username);
		loading.value = false;
	}
};

onBeforeMount(() => fetchUserProfile());

onBeforeUnmount(() => {
	userStore.resetUserState();
});
</script>
