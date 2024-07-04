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
			'px-5 flex cursor-pointer justify-center items-center rounded-full hover:bg-opacity-80 transition-colors font-medium',
		]"
		@click="handleClick"
	>
		<slot />
	</button>
</template>

<script setup>
const props = defineProps({
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
	return props.disabled
		? 'disabled:cursor-not-allowed disabled:bg-zinc-400 '
		: '';
});
</script>
