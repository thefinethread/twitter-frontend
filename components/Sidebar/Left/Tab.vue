<template>
	<div>
		<NuxtLink
			:to="to"
			:class="[
				isActive ? 'font-medium' : 'text-opacity-60 text-zinc-50',
				'flex gap-4 justify-start items-center bg-custom-hover',
			]"
		>
			<component :is="isActive ? ActiveIcon : Icon" class="w-7"></component>
			<div class="text-xl hidden xl:block">{{ label }}</div>
		</NuxtLink>
	</div>
</template>

<script setup>
const { navlink } = defineProps(['navlink']);
const { label, icon: Icon, to, activeIcon: ActiveIcon } = navlink;

const route = useRoute();

const isActive = computed(() => route.path.startsWith(to));
</script>
