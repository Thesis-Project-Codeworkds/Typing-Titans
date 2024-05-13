import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SentenceState {
  sentence: string;
}

const initialState: SentenceState = {
  sentence: 'You can\'t blame gravity for falling in love.'
};

export const sentence = createSlice({
  name: 'sentence',
  initialState,
  reducers: {
    setSentence: (state, action: PayloadAction<string>) => {
      state.sentence = action.payload;
    },
  },
});

export const { setSentence } = sentence.actions;
export default sentence.reducer;
