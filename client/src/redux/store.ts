import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './sidebarSlice';
import countdownReducer from './countdownSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
      countdown: countdownReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;