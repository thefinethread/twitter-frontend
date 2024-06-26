<template>
	<button
		:class="[
			customClass,
			outlineColor,
			width,
			height,
			textColor,
			hoverBgColor,
			hoverTextColor,
			hoverOutlineColor,
			'px-5 py-2 flex justify-center items-center  rounded-full hover:bg-opacity-10 transition-colors font-medium outline outline-[1px]',
		]"
		@click="handleClick"
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
	height: {
		default: 'h-14',
	},
	customClass: {
		default: '',
	},
	hoverTextColor: {
		default: '',
	},
	hoverBgColor: {
		default: 'hover:bg-sky-500',
	},
	hoverOutlineColor: {
		default: '',
	},
	handleClick: {
		type: Function,
		default: () => {},
	},
});
</script>
