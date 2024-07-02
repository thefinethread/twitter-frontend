<template>
	<button
		:disabled="disabled"
		:class="[
			bgColor,
			width,
			height,
			textColor,
			customClass,
			disabledClasses,
			'px-5 py-2 flex justify-center items-center rounded-full hover:bg-opacity-90 transition-colors font-medium',
		]"
		@click="handleClick"
	>
		<slot />
	</button>
</template>

<script setup>
const { handleClick, disabled } = defineProps({
	bgColor: {
		default: 'bg-sky-500',
	},
	textColor: {
		default: 'text-zinc-50',
	},
	width: {
		default: 'w-auto',
	},
	height: {
		default: 'h-14',
	},
	customClass: {
		default: '',
	},
	disabled: {
		default: false,
	},
	handleClick: {
		type: Function,
		default: () => {},
	},
});

const disabledClasses = computed(() => {
	return disabled ? 'disabled:cursor-not-allowed disabled:bg-sky-700' : '';
});
</script>
