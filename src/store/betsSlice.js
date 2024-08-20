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
			// state.filter(bet => bet.fixtureId !== action.payload.fixtureId || bet.value !== action.payload.value);
			state.pop();
		},
	},
});

export const betsActions = slice.actions;
export default slice.reducer;
