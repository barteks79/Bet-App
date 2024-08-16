import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	dropdownOpen: 'leagues',
};

const slice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		openDropdown(state, action) {
			state.dropdownOpen = action.payload;
		},
	},
});

export const uiActions = slice.actions;
export default slice.reducer;
