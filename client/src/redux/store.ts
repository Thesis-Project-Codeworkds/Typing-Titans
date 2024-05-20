import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './sidebarSlice';
import countdownReducer from './countdownSlice';
import sentenceReducer from './sentenceSlice';
import lessonsReducer from './lessonsSlice';
import keyboardReducer from './KeyboardSlice';
import lessonGameReducer from './lessonGameSlice';
import shortcutReducer from './shortcutSlice';
import movieReducer from './movieSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    countdown: countdownReducer,
    sentence: sentenceReducer,
    lessons: lessonsReducer,
    keyboard: keyboardReducer,
    lessonGame: lessonGameReducer,
    shortcut: shortcutReducer,
    movie: movieReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
