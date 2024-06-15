<template>
	<div class="outline outline-zinc-700 p-4 rounded-md my-4 w-[90%]">
		<h2 class="text-2xl font-semibold mb-5">{{ heading }}</h2>

		<ul>
			<slot />
		</ul>

		<button class="text-blue-400 my-1">Show more</button>
	</div>
</template>

<script setup>
const { heading } = defineProps(['heading']);
</script>
