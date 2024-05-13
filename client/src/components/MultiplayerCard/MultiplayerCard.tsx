import './MultiplayerCard.css'
import Player1 from '../../assets/p1.svg';
import Player2 from '../../assets/p2.svg';
import ReadyButton from '../ReadyButton/ReadyButton';
import Countdown from '../Countdown/Countdown';
import UserNameForm from '../UserNameForm/UserNameForm';

import socket from '../../socket';
import { useAppDispatch } from '../../redux/hooks';
import { setSentence } from '../../redux/sentence';

const MultiplayerCard = () => {

  const dispatch = useAppDispatch();

  socket.on('sentence', (sentence: string) => {
    dispatch(setSentence(sentence));
  });

  return (
    <div className="multiplayer-card-container">
      <h2 className='multiplayer-title'>Typing Race</h2>
      <div className='player-one-container'>
        <h4 className='player-title one'>Player One</h4>
        <img src={Player1} alt="Player 1 Icon" />
        <UserNameForm />
      </div>
      <div className='player-two-container'>
        <h4 className='player-title two'>Player Two</h4>
        <img src={Player2} alt="Player 2 Icon" />
      </div>
      <ReadyButton />
      <div className='countdown-container'>
        <Countdown />
      </div>
    </div>
  )

}

export default MultiplayerCard;
