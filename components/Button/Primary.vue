<template>
	<button
		:class="[
			bgColor,
			width,
			textColor,
			'px-5 py-2 rounded-full hover:bg-opacity-90 transition-colors font-medium',
		]"
	>
		<slot />
	</button>
</template>

<script setup>
defineProps({
	bgColor: {
		default: 'bg-sky-500',
	},
	textColor: {
		default: 'text-zinc-50',
	},
	width: {
		default: 'w-auto',
	},
});
</script>
