<template>
	<div>
		<Loader v-if="loading" />
		<!-- 
		<div v-else-if="error" class="text-center">
			<Message :message="error" />
		</div> -->

		<UserCard v-else v-for="user in following" :user="user" />
	</div>
</template>

<script setup>
import useUserStore from '~/stores/user';

const { username } = useRoute().params;

const userStore = useUserStore();
const { getFollowing, resetFollowingState } = userStore;
const { following, loading, error } = storeToRefs(userStore);

onBeforeMount(() => {
	if (username) getFollowing(username);
});

onBeforeUnmount(() => {
	resetFollowingState();
});
</script>
