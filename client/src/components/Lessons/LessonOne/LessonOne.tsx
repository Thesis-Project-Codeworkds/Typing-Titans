import './LessonOne.css'
import Hands from '../../../assets/Hands.svg'
import Keyboard from '../../Keyboard/Keyboard'

const LessonOne = () => {
  return (
    <>
      <div className="lesson-one lessons-card-container">
        <h2 className='lesson-title'>Introduction</h2>
        <div className='keyboard-container'>
          <Keyboard className="custom-keyboard-style"/>
        </div>
        <div className='text-container'>
          <h4>Learn Ten Finger Typing</h4>
          <p>This training program aims to streamline the process of learning ten-finger typing. Employing a straightforward yet highly effective methodology, it is accessible to all users. Upon completion of the provided lessons, you will attain proficiency in typing without the need to glance at the keyboard. This training operates directly within your browser, eliminating the necessity to download any additional software for practice. Best of all, it's completely free! </p>
          <button>Next Chapter</button>
        </div>
        <div className='hand-container'>
          <img src={Hands} alt="" />
        </div>
      </div>
    </>

  )
};

export default LessonOne;

