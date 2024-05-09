import { useState } from 'react';

import socket from '../../socket';

const COUNTDOWN: string[] = ['5', '4', '3', '2', '1', 'Go'];

const Overlay: React.FC = () => {

  const [overlay, setOverlay] = useState('');

  socket.on('countdown', () => {
    COUNTDOWN.map((count, index) => setTimeout(() => {
      setOverlay(count);
    }, 1000 * index));
  });

  socket.on('winner', (winner) => {
    setOverlay(winner);
  });

  return (
    <>
      <div>{overlay}</div>
    </>
  );
}

export default Overlay;
