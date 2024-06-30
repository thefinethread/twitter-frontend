<template>
	<div>
		<Loader v-if="loading" />
		<!-- 
		<div v-else-if="error" class="text-center">
			<Message :message="error" />
		</div> -->

		<UserCard v-else v-for="user in userList" :user="user" />
	</div>
</template>

<script setup>
import useUserStore from '~/stores/user';

const { username } = useRoute().params;

const userStore = useUserStore();
const { getFollowing, resetUserListState } = userStore;
const { userList, loading, error } = storeToRefs(userStore);

onBeforeMount(() => {
	if (username) getFollowing(username);
});

onBeforeUnmount(() => {
	resetUserListState();
});
</script>
