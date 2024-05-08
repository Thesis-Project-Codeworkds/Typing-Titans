import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import socket from '../socket';

const COUNTDOWN: string[] = [ '5', '4', '3', '2', '1', 'Go'];

const Announcement: React.FC = () => {

  const [ announcement, setAnnouncement ] = useState('');
  const navigate = useNavigate();

  socket.on('countdown', () => {
    COUNTDOWN.map((count, index) => setTimeout(() => {
      setAnnouncement(count);
    }, 1000 * index));

    setTimeout(() => {
      navigate('/competition');
    }, 1000 * COUNTDOWN.length);
  });

  socket.on('winner', (winner) => {
    setAnnouncement(winner);
  });

  return (
    <>
      <div>{ announcement }</div>
    </>
  );
}

export default Announcement;
