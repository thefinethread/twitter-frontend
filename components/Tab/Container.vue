<template>
	<div class="w-full flex items-center h-14">
		<Tab
			v-for="{ id, title } in tabList"
			:is-active="activeTabId === id"
			:title="title"
			:id="id"
			@handle-click="handleClick"
		/>
	</div>
</template>

<script setup>
defineProps(['activeTabId', 'tabList', 'handleClick']);
</script>
