import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	bets: [],
};

const slice = createSlice({
	name: 'bets',
	initialState,
	reducers: {
		addBet(state, action) {
			state.bets.push(action.payload);
		},
	},
});

export const betsActions = slice.actions;
export default slice.reducer;
