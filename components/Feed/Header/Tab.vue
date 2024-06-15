<template>
	<button
		class="w-1/2 h-full justify-center items-center hover:bg-zinc-800 hover:bg-opacity-60 transition-colors"
		@click="() => changeTab(id)"
	>
		<div class="h-full w-fit m-auto flex justify-center items-center relative">
			<p :class="[!isActive ? 'opacity-50' : 'font-medium']">{{ title }}</p>

			<span
				v-if="isActive"
				class="w-full absolute h-1 bg-blue-500 bottom-0"
			></span>
		</div>
	</button>
</template>

<script setup>
const { title, isActive, id, changeTab } = defineProps([
	'title',
	'isActive',
	'id',
	'changeTab',
]);
</script>
