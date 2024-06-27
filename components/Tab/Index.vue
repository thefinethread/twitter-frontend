<template>
	<button
		class="flex-1 h-full justify-center items-center hover:bg-zinc-800 hover:bg-opacity-60 transition-colors"
		@click="$emit('handle-click', id)"
	>
		<div class="h-full w-fit m-auto flex justify-center items-center relative">
			<p :class="[!isActive ? 'opacity-50' : 'font-medium']">{{ title }}</p>

			<span
				v-if="isActive"
				class="w-full absolute h-1 bg-sky-600 bottom-0 rounded-full"
			></span>
		</div>
	</button>
</template>

<script setup>
defineProps(['id', 'title', 'isActive']);
</script>
