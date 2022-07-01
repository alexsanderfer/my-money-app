export function selectTab(tabId) {
	return {
		type: "SELECT_TAB",
		payload: tabId,
	};
}

export function showTab(...tabIds) {
	const tabsToShow = {};
    tabIds.forEach(e => tabsToShow[e] = true)
}
