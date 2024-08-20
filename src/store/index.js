import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import betsReducer from './betsSlice';

const store = configureStore({
	reducer: {
		ui: uiReducer,
		bets: betsReducer,
	},
});

export default store;
