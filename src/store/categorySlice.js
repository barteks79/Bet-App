import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	leagues: [],
	countries: [],
};

const slice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		saveLeagues(state, action) {
			state.leagues = action.payload;
		},
		saveCountries(state, action) {
			state.countries = action.payload;
		},
	},
});

export const categoryActions = slice.actions;
export default slice.reducer;
