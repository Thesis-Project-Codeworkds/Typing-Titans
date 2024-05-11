import { FormEvent, useState } from 'react';

import socket from '../socket';
import './UserNameForm.css';

const UserNameForm = () => {

  const [ value, setValue ] = useState('');
  const [ username, setUsername ] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    socket.emit('username', value);
    setUsername(value);
    setValue('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    setValue(input);
  };

  return (
    <>
      <form onSubmit={ handleSubmit }>
        { username === ''
          ? <input onChange={ handleInputChange } value={ value } type='text' placeholder='Enter your name...' autoFocus />
          : <div> { username } </div>
        }
      </form>
    </>
  );
}

export default UserNameForm;
