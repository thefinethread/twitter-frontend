<template>
	<div class="md:h-[26rem] h-[22rem] flex flex-col relative mb-5">
		<img
			:src="GoogleLogo"
			alt=""
			class="w-36 border-4 border-zinc-900 top-1/2 -translate-y-1/2 rounded-full absolute left-4"
		/>

		<div class="w-full bg-zinc-700 flex-1">
			<!-- cover image -->
		</div>

		<div class="flex-1 flex flex-col justify-end px-4 relative">
			<!-- <ButtonSecondary
				width="w-32"
				height="h-9"
				text-color="text-zinc-100"
				outline-color="outline-zinc-600"
				hover-bg-color="hover:bg-zinc-300"
				custom-class="absolute right-4 top-4"
				>Edit profile</ButtonSecondary
			> -->

			<h3 class="text-2xl font-semibold">{{ user.name }}</h3>
			<span class="opacity-40 text-base mb-2">@{{ user.username }}</span>
			<div class="opacity-40 text-base mb-2 flex items-center gap-1">
				<CalendarDaysIcon class="w-5" />
				<p>Joined {{ formattedCreatedDate }}</p>
			</div>
			<div class="text-base flex items-center gap-4">
				<div class="text-sm">
					{{ user.followingCount }}<span class="opacity-40"> Following</span>
				</div>
				<div class="text-sm">
					{{ user.followersCount }}<span class="opacity-40"> Followers</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import moment from 'moment';
import { CalendarDaysIcon } from '@heroicons/vue/24/outline';
import GoogleLogo from '~/assets/images/google.jpg';

const { user } = defineProps(['user']);

const formattedCreatedDate = computed(() =>
	moment(user.createdAt).format('MMMM YYYY')
);
</script>
