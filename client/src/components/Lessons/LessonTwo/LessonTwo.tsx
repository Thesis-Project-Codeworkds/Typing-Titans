import './LessonTwo.css'
import Hands from '../../../assets/Hands.svg'
import Keyboard from '../../Keyboard/Keyboard'


const LessonTwo = () => {
  return (
    <>
      <div className="lesson-two lessons-card-container">
        <h2 className='lesson-title'>Basic Position in Ten Finger Typing</h2>
        <div className='keyboard-container'>
          <Keyboard className="custom-keyboard-style-les2"/>
        </div>
        <div className='text-container'>
          <h4>Basic Position in Ten Finger Typing</h4>
          <ul>
            <li>Feel the bumps on the F and J keys.</li>
            <li>The bumps are there to guide yhou to position yhour fingers on the keyboard without looking.</li>
            <li>Place your index fingers on the F and J keys. The other fingers should be palced on the keyboard as shown in the figure.</li>
            <li>Your fingers should lightly touch the keys.</li>
            <li>This is the "Basic Position". When not typing or after pressing a key your fingers should always return to the basic position.</li>
            <li>Ten finger touch typing can be summarized as: basic position and then pressa key, then basic porision again.</li>
          </ul>
          <div className='button-container'>
            <button>Previous Chapter</button>
            <button>Next Chapter</button>
          </div>
        </div>
        <div className='hand-container'>
          <img src={Hands} alt="" />
        </div>
      </div>
    </>

  )
};

export default LessonTwo;
