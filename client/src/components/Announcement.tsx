import { useState } from 'react';

import socket from '../socket';

const COUNTDOWN: string[] = [ '5', '4', '3', '2', '1', 'Go'];

const Announcement: React.FC = () => {

  const [ announcement, setAnnouncement ] = useState('');

  socket.on('countdown', () => {
    COUNTDOWN.map((count, index) => setTimeout(() => {
      setAnnouncement(count);
    }, 1000 * index));
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
