import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import LessonOne from '../components/Lessons/LessonOne';
import LessonTwo from '../components/Lessons/LessonTwo';

interface Lesson {
  name: string;
  component: React.ComponentType; 
}

interface LessonState {
  lessons: Lesson[];
  completedLessons: string[];
  activeLessonIndex: number;
}

const initialState: LessonState = {
  lessons: [
    { name: 'Lesson 1', component: LessonOne },
    { name: 'Lesson 2', component: LessonTwo },
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
