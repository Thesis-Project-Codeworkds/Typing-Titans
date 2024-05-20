import './TrainingCard.css';
import ProgressBar from '../ProgressBar/ProgressBar';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { setActiveLessonIndex } from '../../redux/lessonsSlice';
import { useNavigate } from 'react-router-dom';

const TrainingCard = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const lessons = useAppSelector(state => state.lessons.lessons);
  const completedLessons = useAppSelector(state => state.lessons.completedLessons);

  if (!lessons || !completedLessons) {
    return <div>Loading lessons...</div>;
  }

  const progress = (completedLessons.length / lessons.length) * 100;

  const handleLessonSelect = (index: number) => {
    dispatch(setActiveLessonIndex(index));
    navigate('/lessons');
  };

  return (
    <div className="training-card-container">
      <h2 className='training-title'>Training</h2>
      <div className='progress-container'>
        <h3 className='progress-title'>Progress:</h3>
        <ProgressBar progress={progress} />
      </div>
      <div className='lessons-container '>
        <h3 className='lessons-title'>Lessons:</h3>
        {lessons.map((lesson, index) => (
          <div key={lesson.name} className={`lesson ${completedLessons.includes(lesson.name) ? 'completed' : ''}`}
               onClick={() => handleLessonSelect(index)}>
            {lesson.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrainingCard;
