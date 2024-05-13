import { useAppSelector } from '../redux/hooks';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';

const LessonsPage = () => {
  const lessons = useAppSelector(state => state.lessons.lessons);
  const currentLessonIndex = useAppSelector(state => state.lessons.activeLessonIndex);
  const CurrentLessonComponent = lessons[currentLessonIndex].component;



  return (
    <>
    <Navbar />
    <Sidebar />
        <div className="lessons-page-container">
      {/* <h1>{lessons[currentLessonIndex].name}</h1> */}
      <CurrentLessonComponent />
    </div>
    </>

  );
}

export default LessonsPage;
