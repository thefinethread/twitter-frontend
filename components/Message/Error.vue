<template>
	<p v-if="error" class="mb-4 text-red-500">{{ error }}</p>
</template>

<script setup>
defineProps(['error']);
</script>
