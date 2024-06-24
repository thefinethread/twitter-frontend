<template>
	<p v-if="message" :class="[color, size]">{{ message }}</p>
</template>

<script setup>
defineProps({
	message: {},
	color: {
		default: 'text-zinc-300',
	},
	size: {
		default: 'text-lg',
	},
});
</script>
