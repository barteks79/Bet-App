export const isDropdownOpen = (opened, category) => {
	return opened === category;
};

export const getHoursFromISO = isoDate => {
	const hours = isoDate.split('T')[1].slice(0, 5);
	return hours;
};

export const getTomorrowDate = () => {
	const today = new Date();

	const tomorrow = new Date(today);
	tomorrow.setDate(tomorrow.getDate() + 1);

	const isoString = tomorrow.toISOString();
	const formattedDate = isoString.split('T')[0];

	return formattedDate;
};
