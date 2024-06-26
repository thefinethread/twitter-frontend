<template>
	<NuxtLink :to="`/user/${user.username}`">
		<div class="w-full flex justify-between items-center px-6 py-4">
			<div class="flex items-center gap-3">
				<img :src="GoogleLogo" alt="" class="w-10 rounded-full" />
				<div>
					<h6>{{ user.name }}</h6>
					<p class="font-extralight opacity-50 w">@{{ user.username }}</p>
				</div>
			</div>
			<ButtonPrimary
				bg-color="bg-zinc-100"
				text-color="text-zinc-900"
				height="h-9"
				width="w-28"
			>
				Follow
			</ButtonPrimary>
		</div>
	</NuxtLink>
</template>

<script setup>
import GoogleLogo from '~/assets/images/google.jpg';

defineProps(['user']);
</script>
