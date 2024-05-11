import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CountdownState {
  value: string;
  scale: number;
}

const initialState: CountdownState = {
  value: '',
  scale: 1,
};

const countdownSlice = createSlice({
  name: 'countdown',
  initialState,
  reducers: {
    setCountdown: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      state.scale = 1;
    },
    clearCountdown: state => {
      state.value = '';
      state.scale = 0;
    }
  },
});

export const { setCountdown, clearCountdown } = countdownSlice.actions;
export default countdownSlice.reducer;
