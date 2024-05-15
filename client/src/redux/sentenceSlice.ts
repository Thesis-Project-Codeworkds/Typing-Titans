import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string = 'You can\'t blame gravity for falling in love.';

export const sentence = createSlice({
  name: 'sentence',
  initialState,
  reducers: {
    setSentence: (_, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { setSentence } = sentence.actions;
export default sentence.reducer;
