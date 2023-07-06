import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import uiReducer from './todoSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer,
  },
});

export default store;
