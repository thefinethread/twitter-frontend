<template>
	<TabContainer
		:active-tab-id="activeTabId"
		:tab-list="profileTabs"
		:handle-click="handleClick"
	/>
</template>

<script setup>
import { profileTabs } from '~/constants/tabs';

const { username } = useRoute().params;

const changeSubProfileRoute = () => {
	const activeTab = profileTabs.find((tab) => tab.id === activeTabId.value);
	navigateTo(`/${username}/${activeTab.navigationSuffix}`);
};

const { activeTabId, handleClick } = useTabs(1, changeSubProfileRoute);
</script>
