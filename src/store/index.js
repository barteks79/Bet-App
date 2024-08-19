import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import categoryReducer from './categorySlice';

const store = configureStore({
	reducer: {
		ui: uiReducer,
		category: categoryReducer,
	},
});

export default store;
