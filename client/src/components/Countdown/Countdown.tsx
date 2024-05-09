import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import socket from '../../socket';

const COUNTDOWN: string[] = ['5', '4', '3', '2', '1', 'Go'];

const Countdown: React.FC = () => {

  const [countdown, setCountdown] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (countdown === 'Go') {
      setTimeout(() => navigate('/competition'), 1000);
    }
  }, [ countdown, navigate ]);

  socket.on('countdown', () => {
    COUNTDOWN.map((count, index) => setTimeout(() => {
      setCountdown(count);
    }, 1000 * index));
  });


  return (
    <>
      <div>{countdown}</div>
    </>
  );
}

export default Countdown;
