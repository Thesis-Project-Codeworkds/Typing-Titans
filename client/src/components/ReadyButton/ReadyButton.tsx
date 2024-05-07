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

  return (
    <>
      <button className="ready-button" onClick={ handleButtonClick }>
        Ready{ isReady ? '!' : '?' }
      </button>
    </>
  );
}

export default ReadyButton;
