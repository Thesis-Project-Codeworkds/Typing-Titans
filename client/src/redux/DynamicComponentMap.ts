import LessonOne from '../components/Lessons/LessonOne/LessonOne';
import LessonTwo from '../components/Lessons/LessonTwo/LessonTwo';
import LessonThree from '../components/Lessons/LessonThree/LessonThree';
import LessonFour from '../components/Lessons/LessonFour/LessonFour';
import LessonFive from '../components/Lessons/LessonFive/LessonFive';

interface ComponentMap {
  [key: string]: React.ComponentType;
}

const componentMap: ComponentMap = {
  LessonOne: LessonOne,
  LessonTwo: LessonTwo,
  LessonThree: LessonThree,
  LessonFour: LessonFour,
  LessonFive: LessonFive,
};

export default componentMap;
