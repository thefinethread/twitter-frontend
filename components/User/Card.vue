<template>
	<NuxtLink :to="`/${user.username}`">
		<div class="w-full flex justify-between items-center px-6 py-4">
			<div class="flex items-center gap-3">
				<img :src="GoogleLogo" alt="" class="w-10 rounded-full" />
				<div>
					<h6>{{ user.name }}</h6>
					<p class="font-extralight opacity-50 w">@{{ user.username }}</p>
				</div>
			</div>

			<template v-if="authUser.id !== user.id">
				<ButtonSecondary
					v-if="user.isFollowing"
					height="h-9"
					width="w-32"
					text-color="text-zinc-100"
					outline-color="outline-zinc-500"
					hover-bg-color="hover:bg-red-600"
					hover-text-color="hover:text-red-500"
					hover-outline-color="hover:outline-red-900"
					@mouseenter="hovering = true"
					@mouseleave="hovering = false"
					@click.prevent="handleUnFollow"
				>
					{{ hovering ? 'Unfollow' : 'Following' }}
				</ButtonSecondary>
				<ButtonPrimary
					v-else
					bg-color="bg-zinc-100"
					text-color="text-zinc-900"
					height="h-9"
					width="w-28"
					@click.prevent="handleFollow"
				>
					Follow
				</ButtonPrimary>
			</template>
		</div>
	</NuxtLink>
</template>

<script setup>
import GoogleLogo from '~/assets/images/google.jpg';
import useUserStore from '~/stores/user';
import useAuthStore from '~/stores/auth';

const hovering = ref(false);

const { followUser, UnFollowUser } = useUserStore();
const { user: authUser } = useAuthStore();

const handleFollow = () => {
	followUser(user.id);
};

const handleUnFollow = () => {
	UnFollowUser(user.id);
};

const { user } = defineProps(['user']);
</script>
