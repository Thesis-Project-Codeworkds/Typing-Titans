import LessonOne from '../components/Lessons/LessonOne/LessonOne';
import LessonTwo from '../components/Lessons/LessonTwo/LessonTwo';

interface ComponentMap {
  [key: string]: React.ComponentType;
}

const componentMap: ComponentMap = {
  LessonOne: LessonOne,
  LessonTwo: LessonTwo,
};

export default componentMap;
