import { useState } from 'react';

import socket from '../../socket';

const COUNTDOWN: string[] = ['5', '4', '3', '2', '1', 'Go'];

const Countdown: React.FC = () => {

  const [countdown, setCountdown] = useState('');

  socket.on('countdown', () => {
    COUNTDOWN.map((count, index) => setTimeout(() => {
      setCountdown(count);
    }, 1000 * index));
  });

  socket.on('winner', (winner) => {
    setCountdown(winner);
  });

  return (
    <>
      <div>{countdown}</div>
    </>
  );
}

export default Countdown;
