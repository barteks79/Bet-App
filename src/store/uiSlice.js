import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	openedDropdown: 'leagues',
};

const slice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		openDropdown(state, action) {
			const category = action.payload;
			if (state.openedDropdown === category) {
				state.openedDropdown = '';
				return;
			}
			state.openedDropdown = category;
		},
	},
});

export const uiActions = slice.actions;
export default slice.reducer;
