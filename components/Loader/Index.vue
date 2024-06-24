<template>
	<div class="w-full h-full flex items-center justify-center">
		<div
			:class="[
				height,
				borderWidth,
				'aspect-square rounded-full border-white border-b-transparent animate-spin',
			]"
		></div>
	</div>
</template>

<script setup>
defineProps({
	height: {
		default: 'h-10',
	},
	borderWidth: {
		default: 'border-[3px]',
	},
});
</script>
