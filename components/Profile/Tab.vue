<template>
	<TabContainer
		:active-tab-id="activeTabId"
		:tab-list="profileTabs"
		:handle-click="handleClick"
	/>
</template>

<script setup>
import { profileTabs } from '~/constants/tabs';

const changeSubProfileRoute = () => {
	const activeTab = profileTabs.find((tab) => tab.id === activeTabId.value);
	navigateTo(activeTab.to);
};

const { activeTabId, handleClick } = useTabs(1, changeSubProfileRoute);
</script>
