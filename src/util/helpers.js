export const isDropdownOpen = (opened, category) => {
	return opened === category;
};

export const msToMinutes = ms => {
	const minutes = Math.floor(ms / 60000);
	return minutes;
};
