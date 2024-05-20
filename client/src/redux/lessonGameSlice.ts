import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LessonGameState {
  activeKey: string | null;
  gameStarted: boolean;
  keysTyped: number;
  keysSequence: string[];
  currentKeyIndex: number;
}

const initialState: LessonGameState = {
  activeKey: null,
  gameStarted: false,
  keysTyped: 0,
  keysSequence: [],
  currentKeyIndex: 0
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
    setKeysSequence: (state, action: PayloadAction<string[]>) => {
      state.keysSequence = action.payload;
      state.currentKeyIndex = 0; 
      state.activeKey = action.payload[0]; 
    },
    advanceKey: (state) => {
      state.keysTyped++
      if (state.currentKeyIndex < state.keysSequence.length - 1) {
        state.currentKeyIndex += 1;
        state.activeKey = state.keysSequence[state.currentKeyIndex];
      } else {
        state.gameStarted = false; 
        state.activeKey = null;
      }
    },
    resetGame: (state) => {
      state.activeKey = null;
      state.gameStarted = false;
      state.keysTyped = 0;
      state.keysSequence = [];
      state.currentKeyIndex = 0;
    },
    startGame: (state) => {
      state.gameStarted = true;
    },
    stopGame: (state) => {
      state.gameStarted = false;
      state.activeKey = null;
      state.keysSequence = [];
      state.currentKeyIndex = 0;
    }
  },
});

export const { setActiveKey, setGameStarted, startGame, stopGame, setKeysSequence, advanceKey, resetGame } = lessonGameSlice.actions;
export default lessonGameSlice.reducer;
