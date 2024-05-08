import Sentence from '../Sentence/Sentence';
import './CompetitionCard.css'


const CompetitionCard = () => {

  return (
    <div className="competition-card-container">
      <h2 className='competition-title'>Typing Race</h2>
      <div className='sentence-div'>
        <Sentence />
      </div>

    </div>
  )

}

export default CompetitionCard;