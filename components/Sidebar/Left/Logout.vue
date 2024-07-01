<template>
	<button
		class="text-opacity-60 mt-4 text-zinc-50 flex gap-4 justify-start items-center bg-custom-hover"
	>
		<component :is="ArrowRightStartOnRectangleIcon" class="w-7"></component>
		<div class="text-xl hidden xl:block">Logout</div>
	</button>
</template>

<script setup>
import { ArrowRightStartOnRectangleIcon } from '@heroicons/vue/24/outline';
</script>
