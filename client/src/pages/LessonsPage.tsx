import { useAppSelector } from '../redux/hooks';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import componentMap from '../redux/DynamicComponentMap';

const LessonsPage = () => {
  const lessons = useAppSelector(state => state.lessons.lessons);
  const currentLessonIndex = useAppSelector(state => state.lessons.activeLessonIndex);
  const CurrentLessonComponent = componentMap[lessons[currentLessonIndex].componentType];

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="lessons-page-container">
        {CurrentLessonComponent ? <CurrentLessonComponent /> : <p>No component found</p>}
      </div>
    </>
  );
}

export default LessonsPage;
