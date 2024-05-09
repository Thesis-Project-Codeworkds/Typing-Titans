import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SentenceState {
  sentence: string;
}

const initialState: SentenceState = {
  sentence: 'this is the first sentence that users are going to have to type',
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
