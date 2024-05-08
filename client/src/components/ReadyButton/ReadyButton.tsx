import { useState } from 'react';

import socket from '../../socket';
import './ReadyButton.css';

const ReadyButton: React.FC = () => {

  const [ isReady, setIsReady ] = useState(false);

  const handleButtonClick = () => {
    const toggleReady = !isReady;

    socket.emit('isReady', toggleReady);
    setIsReady(toggleReady);
  };

  socket.on('start-competition', () => {
    setIsReady(false);
  });

  return (
    <>
      <button className={ `ready-button ${isReady && 'ready'}` } onClick={ handleButtonClick }>
        Ready{ isReady ? '!' : '?' }
      </button>
    </>
  );
}

export default ReadyButton;
