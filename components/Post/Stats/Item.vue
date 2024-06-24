<template>
	<button
		class="flex justify-center gap-1 items-center opacity-50 hover:opacity-100 hover:text-sky-500 transition-all"
	>
		<component :is="option.icon" class="w-[19px]" />
		<span v-if="option.value" class="font-extralight text-sm">{{
			option?.value
		}}</span>
	</button>
</template>

<script setup>
defineProps(['option']);
</script>
