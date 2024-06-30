<template>
	<div class="">
		<div class="p-6 border-b border-zinc-700">
			<form @submit.prevent="handleSubmit">
				<div class="w-full px-6 relative">
					<MagnifyingGlassIcon
						class="w-6 absolute left-11 translate-y-1/2 opacity-50"
					/>
					<input
						v-model="searchTerm"
						type="text"
						placeholder="Search"
						class="w-full pr-10 pl-16 h-11 text-lg text-zinc-200 bg-transparent outline outline-zinc-700 rounded-full focus:outline-2 focus:outline-sky-600 placeholder:opacity-50"
					/>
				</div>
			</form>
		</div>

		<div v-if="loading" class="my-4">
			<Loader />
		</div>

		<UserCard v-for="user in userList" :user="user" />

		<Message
			v-if="!userList.length"
			message="Search your friends to follow"
			custom-class="opacity-50 mt-10"
			size="text-2xl"
		/>
	</div>
</template>

<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import useUserStore from '~/stores/user';

const searchTerm = ref('');

const userStore = useUserStore();
const { userList, loading, error } = storeToRefs(userStore);

const handleSubmit = async () => {
	if (!searchTerm.value.length) return;

	await userStore.searchUser(searchTerm.value);
};

onBeforeUnmount(() => {
	userStore.resetUserListState();
});
</script>
