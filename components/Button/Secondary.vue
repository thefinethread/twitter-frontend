<template>
	<button
		:class="[
			customClass,
			outlineColor,
			width,
			textColor,
			'px-5 py-2 rounded-full hover:bg-opacity-10 hover:bg-sky-500 transition-colors font-medium outline outline-[1px]',
		]"
	>
		<slot />
	</button>
</template>

<script setup>
defineProps({
	outlineColor: {
		default: 'outline-sky-500',
	},
	textColor: {
		default: 'text-sky-500',
	},
	width: {
		default: 'w-auto',
	},
	customClass: {
		default: '',
	},
});
</script>
