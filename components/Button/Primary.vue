<template>
	<button
		:class="[
			bgColor,
			width,
			textColor,
			customClass,
			'px-5 py-2 h-14 flex justify-center items-center rounded-full hover:bg-opacity-90 transition-colors font-medium',
		]"
		@click="handleClick"
	>
		<slot />
	</button>
</template>

<script setup>
const { handleClick } = defineProps({
	bgColor: {
		default: 'bg-sky-500',
	},
	textColor: {
		default: 'text-zinc-50',
	},
	width: {
		default: 'w-auto',
	},
	customClass: {
		default: '',
	},
	handleClick: {
		type: Function,
		default: () => {},
	},
});
</script>
