<template>
	<button
		class="px-5 py-2 rounded-full bg-blue-500 hover:bg-opacity-90 transition-colors"
	>
		<slot />
	</button>
</template>

<script setup>
defineProps([]);
</script>
