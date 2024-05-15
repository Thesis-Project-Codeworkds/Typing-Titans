import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Lesson {
  name: string;
  componentType: string;
}

interface LessonState {
  lessons: Lesson[];
  completedLessons: string[];
  activeLessonIndex: number;
}

const initialState: LessonState = {
  lessons: [
    { name: 'Lesson 1', componentType: 'LessonOne' },
    { name: 'Lesson 2', componentType: 'LessonTwo' },
    { name: 'Lesson 3', componentType: 'LessonThree' },
    { name: 'Lesson 4', componentType: 'LessonFour' },
    { name: 'Lesson 5', componentType: 'LessonFive' },

  ],
  completedLessons: [],
  activeLessonIndex: 0,
};

export const lessonsSlice = createSlice({
  name: 'lessons',
  initialState,
  reducers: {
    setActiveLessonIndex: (state, action: PayloadAction<number>) => {
      state.activeLessonIndex = action.payload;
    },
    completeLesson: (state, action: PayloadAction<string>) => {
      if (!state.completedLessons.includes(action.payload)) {
        state.completedLessons.push(action.payload);
      }
    },
  },
});

export const { setActiveLessonIndex, completeLesson } = lessonsSlice.actions;
export default lessonsSlice.reducer;
