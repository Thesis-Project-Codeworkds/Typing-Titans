import { useClerk } from '@clerk/clerk-react';
import { useEffect, useState } from 'react';

import './MultiplayerCard.css'
import ReadyButton from '../ReadyButton/ReadyButton';
import Countdown from '../Countdown/Countdown';
import UserNameForm from '../UserNameForm/UserNameForm';
import Chat from '../Chat/Chat';
import Challenger from '../Challenger/Challenger';
import MinimumChallengers from '../MinimumChallengers/MinimumChallengers';

import socket from '../../socket';
import { Player } from '../../interfaces';
import { useAppDispatch } from '../../redux/hooks';
import { setSentence } from '../../redux/sentenceSlice';
import { setShortcut } from '../../redux/shortcutSlice';
import { setMovie } from '../../redux/movieSlice';

interface Shortcut {
  name: string;
  windows: string[];
  mac: string[];
}

interface Movie {
  title: string;
  image: string;
}

const capsFirstLetter = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const MultiplayerCard = () => {

  const { user } = useClerk();
  const dispatch = useAppDispatch();
  const [ challengers, setChallengers ] = useState<Player[]>([]);

  useEffect(() => {
    socket.emit('get ready players');
  }, []);

  useEffect(() => {
    if (user?.username) {
      socket.emit('set username', capsFirstLetter(user.username));
    }

    if (user?.imageUrl) {
      socket.emit('set userimage', user.imageUrl);
    }
  }, [ user ]);

  const pathname = window.location.pathname.split('/').pop() || '';
  const title = capsFirstLetter(pathname);

  if (pathname === "typing") {
    socket.on('sentence', (sentence: string) => {
      dispatch(setSentence(sentence));
    });
  }
  if (pathname === "shortcut") {
    socket.on('shortcuts', (shortcut: Shortcut[]) => {
      dispatch(setShortcut(shortcut));
    });
  }
  if (pathname === "movie") {
    socket.on('movies', (movies: Movie[]) => {
      dispatch(setMovie(movies));
    });
  }

  socket.on('readyPlayers', (players: Player[]) => {
    setChallengers(players);
  });

  return (
    <div className="multiplayer-card-container">
      <h2 className='multiplayer-title'>{title} Race</h2>
      <div className='challengers left'>
        { challengers.map((player, index) => !(index % 2) ? (
          <Challenger player={ player } key={ index }/>
        ) : '')}
      </div>

      <div className='challengers right'>
        { challengers.map((player, index) => (index % 2) ? (
          <Challenger player={ player } key={ index } />
        ) : '')}
      </div>

      <div className='middle-container'>
        <MinimumChallengers />
        <ReadyButton />
      </div>
      <h4 className='username'>
        { user?.username ? capsFirstLetter(user?.username) : <UserNameForm /> }
      </h4>

      <div className='countdown-container'>
        <Countdown path={pathname} />
      </div>
      <div className='chat-container'>
        <Chat />
      </div>
    </div>
  )

}

export default MultiplayerCard;
