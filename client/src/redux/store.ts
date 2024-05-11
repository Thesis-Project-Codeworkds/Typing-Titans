import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './sidebarSlice';
import countdownReducer from './countdownSlice';
import sentenceReducer from './sentence';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    countdown: countdownReducer,
    sentence: sentenceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
