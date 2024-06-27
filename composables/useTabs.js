const useTabs = (initialTabId = 1, optionalClickHandler = () => {}) => {
	const activeTabId = ref(initialTabId);

	const handleClick = (id) => {
		activeTabId.value = id;
		optionalClickHandler();
	};

	return { activeTabId, handleClick };
};

export default useTabs;
