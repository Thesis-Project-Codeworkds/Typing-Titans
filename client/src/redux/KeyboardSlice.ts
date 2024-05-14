import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface KeyboardState {
  activeKeys: { [key: string]: boolean };
}

const initialState: KeyboardState = {
  activeKeys: {},
};

export const keyboardSlice = createSlice({
  name: 'keyboard',
  initialState,
  reducers: {
    keyPressed: (state, action: PayloadAction<string>) => {
      state.activeKeys[action.payload] = true;
      console.log(`Key pressed: ${action.payload}`, state);
    },
    keyReleased: (state, action: PayloadAction<string>) => {
      delete state.activeKeys[action.payload];
      console.log(`Key released: ${action.payload}`, state);
    }
  },
});

export const { keyPressed, keyReleased } = keyboardSlice.actions;

export default keyboardSlice.reducer;
