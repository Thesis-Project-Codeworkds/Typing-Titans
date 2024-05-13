import { useState } from 'react';

import './Overlay.css'
import socket from '../../socket';
import Countdown from '../Countdown/Countdown';

const Overlay = () => {

  const [ overlay, setOverlay ] = useState('');
  const [ time, setTime ] = useState(0);
  const [ speed, setSpeed ] = useState(0);
  const [ accuracy, setAccuracy ] = useState(0);
  const [ playAgain, setPlayAgain ] = useState(false);
  const [ countdown, setCountdown ] = useState(false);

  socket.on('winner', (winner: string, time: number, speed: number, accuracy: number) => {
    setOverlay(winner);
    setTime(time);
    setSpeed(speed);
    setAccuracy(accuracy);
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
