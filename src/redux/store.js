import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducer';

export const store = configureStore({
  reducer: {
    user: userReducer, // Make sure 'user' matches how you reference it in the selector
  },
});
