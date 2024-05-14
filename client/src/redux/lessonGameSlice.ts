import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LessonGameState {
  activeKey: string | null;
  gameStarted: boolean;
}

const initialState: LessonGameState = {
  activeKey: null,
  gameStarted: false
};

const lessonGameSlice = createSlice({
  name: 'lessonGame',
  initialState,
  reducers: {
    setActiveKey: (state, action: PayloadAction<string | null>) => {
      state.activeKey = action.payload;
    },
    setGameStarted: (state, action: PayloadAction<boolean>) => {
      state.gameStarted = action.payload;
    },
    startGame: (state) => {
      state.gameStarted = true;
    },
    stopGame: (state) => {
      state.gameStarted = false;
      state.activeKey = null;
    }
  },
});

export const { setActiveKey, setGameStarted, startGame, stopGame } = lessonGameSlice.actions;
export default lessonGameSlice.reducer;
