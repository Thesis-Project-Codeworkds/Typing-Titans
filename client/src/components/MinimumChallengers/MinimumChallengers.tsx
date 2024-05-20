import { useEffect, useState } from 'react';

import socket from '../../socket';
import './MinimumChallengers.css';

const MinimumChallengers = () => {

  const [ value, setValue ] = useState<number>();

  useEffect(() => {
    socket.emit('get minimum', (minimum: number) => {
      setValue(minimum);
    })
  }, []);

  const handlePlusClick = () => {
    socket.emit('increase minimum');
  };

  const handleMinusClick = () => {
    socket.emit('decrease minimum');
  };

  socket.on('minimum', (minimum: number) => {
    setValue(minimum);
  })

  return (
    <>
      <div className='minimum-challengers'>
        Number of Challengers:
        <div className='minimum'>
          <button className='minimum-button' onClick={ handlePlusClick }>+</button>
          <div className='minimum-value'>{ value }</div>
          <button className='minimum-button' onClick={ handleMinusClick }>-</button>
        </div>
      </div>
    </>
  );
}

export default MinimumChallengers;
