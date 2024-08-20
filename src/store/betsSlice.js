import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const slice = createSlice({
	name: 'bets',
	initialState,
	reducers: {
		saveBet(state, action) {
			const prevIdx = state.findIndex(bet => bet.fixtureId === action.payload.fixtureId);
			if (prevIdx !== -1) {
				state[prevIdx] = action.payload;
			} else {
				state.push(action.payload);
			}
		},
		removeBet(state, action) {
			const idx = state.findIndex(bet => bet.fixtureId === action.payload.fixtureId);
			state.splice(idx, 1);
		},
	},
});

export const betsActions = slice.actions;
export default slice.reducer;
