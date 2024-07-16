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
			<h4 class="text-3xl">You have no followers yet.</h4>
			<p class="text-lg">Share your profile to gain followers!</p>
		</Message>

		<UserCard v-else v-for="user in userList" :user="user" />
	</div>
</template>

<script setup>
import useUserStore from '~/stores/user';

const loading = ref(false);

const { username } = useRoute().params;

const userStore = useUserStore();
const { getFollowers, resetUserListState } = userStore;
const { userList } = storeToRefs(userStore);

const fetchFollowers = async () => {
	if (username) {
		loading.value = true;
		await getFollowers(username);
		loading.value = false;
	}
};

onBeforeMount(() => fetchFollowers());

onBeforeUnmount(() => {
	resetUserListState();
});
</script>
