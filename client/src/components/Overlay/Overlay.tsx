import { useState } from 'react';
import './Overlay.css'
import socket from '../../socket';
import Countdown from '../Countdown/Countdown';

const Overlay: React.FC = () => {

  const [overlay, setOverlay] = useState('');
  const [speed, setSpeed] = useState('');
  const [time, setTime] = useState(0);
  const [playAgain, setPlayAgain] = useState(false);

  socket.on('winner', (winner, speed, time) => {
    setOverlay(winner);
    setSpeed(speed);
    setTime(time);
  });

  const handleButtonClick = () => {
    const toggleReady = !playAgain;

    socket.emit('isReady', toggleReady);
    setPlayAgain(toggleReady);
  };

  socket.on('start-competition', () => {
    setPlayAgain(false);
  });

  return (
    <div id='overlayBckgrnd'>
      <div id='overlayContainer'>
        <h1>
          {overlay}
        </h1>
        <h2>
          {time.toFixed(2)} s <br />
          {speed}
        </h2>
        <button id='overlayButton' onClick={handleButtonClick}>
          {playAgain ? <>Waiting <br /> for Opponent</> : 'Play Again?'}
        </button>
        <Countdown />
      </div>
    </div>
  );
}

export default Overlay;
