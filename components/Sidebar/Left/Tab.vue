<template>
	<NuxtLink
		:to="navlink.to"
		:class="[
			isActive ? 'font-medium' : 'text-opacity-60 text-zinc-50',
			'flex gap-4 justify-start items-center bg-custom-hover',
		]"
	>
		<component
			:is="isActive ? navlink.activeIcon : navlink.icon"
			class="w-7"
		></component>
		<div class="text-xl hidden xl:block">{{ navlink.label }}</div>
	</NuxtLink>
</template>

<script setup>
import useAuthStore from '~/stores/auth';

const { navlink } = defineProps(['navlink']);
// const { label, icon: Icon, to, activeIcon: ActiveIcon } = navlink;

const route = useRoute();

const { user } = useAuthStore();

if (navlink.label === 'Profile') {
	navlink.to = `/${user.username}`;
}

const isActive = computed(() => route.path.startsWith(navlink.to));
</script>
