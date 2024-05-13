import { useState } from 'react';
import { useAppSelector } from '../../redux/hooks';

const LessonsPage = () => {
  const lessons = useAppSelector(state => state.lessons.lessons);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  const handleNextLesson = () => {
    if (currentLessonIndex < lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    }
  };

  const handlePreviousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    }
  };

  return (
    <div className="lessons-page-container">
      <h1>Lesson: {lessons[currentLessonIndex]}</h1>
      <div>
        <button onClick={handlePreviousLesson} disabled={currentLessonIndex === 0}>Previous</button>
        <button onClick={handleNextLesson} disabled={currentLessonIndex === lessons.length - 1}>Next</button>
      </div>
    </div>
  );
}

export default LessonsPage;
