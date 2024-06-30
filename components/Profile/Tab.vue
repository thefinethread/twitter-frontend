<template>
	<TabContainer
		:active-tab-id="activeTabId"
		:tab-list="profileTabs"
		:handle-click="handleClick"
	/>
</template>

<script setup>
import { profileTabs } from '~/constants/tabs';

const route = useRoute();

const { username } = route.params;

const changeSubProfileRoute = () => {
	const activeTab = profileTabs.find((tab) => tab.id === activeTabId.value);
	navigateTo(`/${username}/${activeTab.navigationSuffix}`);
};

const { activeTabId, handleClick } = useTabs(1, changeSubProfileRoute);

watch(
	() => route.params.username,
	(newUsername, oldUsername) => {
		if (newUsername !== oldUsername) activeTabId.value = 1;
	}
);
</script>
