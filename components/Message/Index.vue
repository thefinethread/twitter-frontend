<template>
	<div :class="[color, size, customClass, 'text-center']">
		{{ message }}
		<slot />
	</div>
</template>

<script setup>
defineProps({
	color: {
		default: 'text-zinc-300',
	},
	size: {
		default: 'text-lg',
	},
	customClass: {
		default: '',
	},
});
</script>
