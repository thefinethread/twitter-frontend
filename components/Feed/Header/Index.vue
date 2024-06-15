<template>
	<div class="w-full h-full">
		<FeedHeaderTab
			v-for="{ id, title } in headerTabs"
			:isActive="activeTabId === id"
			:title="title"
			:change-tab="changeTab"
			:id="id"
		/>
	</div>
</template>

<script setup>
const activeTabId = ref(1);

const headerTabs = [
	{
		id: 1,
		title: 'For you',
	},
	{
		id: 2,
		title: 'Following',
	},
];

const changeTab = (id) => {
	activeTabId.value = id;
};
</script>
