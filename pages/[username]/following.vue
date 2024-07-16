<template>
	<div>
		<Loader v-if="loading" />
		<!-- 
		<div v-else-if="error" class="text-center">
			<Message :message="error" />
		</div> -->
		<Message
			v-else-if="!userList?.length"
			size="text-xl"
			custom-class="opacity-40 mt-10"
		>
			<h4 class="text-3xl">You are not following anyone yet.</h4>
			<p class="text-lg">Start following people to see their posts!</p>
		</Message>

		<UserCard v-else v-for="user in userList" :user="user" />
	</div>
</template>

<script setup>
import useUserStore from '~/stores/user';

const loading = ref(false);

const { username } = useRoute().params;

const userStore = useUserStore();
const { getFollowing, resetUserListState } = userStore;
const { userList } = storeToRefs(userStore);

const fetchFollowing = async () => {
	if (username) {
		loading.value = true;
		await getFollowing(username);
		loading.value = false;
	}
};

onBeforeMount(() => fetchFollowing());

onBeforeUnmount(() => {
	resetUserListState();
});
</script>
