import React, { useState, useEffect, useRef } from 'react'

import './Sentence.css'
import CharBox from '../CharBox/CharBox';
import socket from '../../socket';
import Overlay from '../Overlay/Overlay';
import { fetchShortSentence } from '../../services/ninja-api-service';

const Sentence: React.FC = () => {

  const [sentence, setSentence] = useState("this is the first sentence that users are going to have to type");
  const [letters, setLetters] = useState(sentence.split(''));
  const [myIndex, setMyIndex] = useState(0);
  const [time, setTime] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [wrongInput, setWrongInput] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [ended, setEnded] = useState(false);
  console.log('ended:', ended);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToPosition = (positionX: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = positionX;
    }
  };

  // Select a random sentence and reset the states
  const pickSentence = async () => {

    const fetchedSentence = await fetchShortSentence();

    setSentence(fetchedSentence);
    setLetters(fetchedSentence.split(''));
    setMyIndex(0);
    setTime(0);
    setSpeed(0);
    setMistakes(0);
    scrollToPosition(0)
    setWrongInput(false);
    setIsRunning(false);
    setEnded(false);

  };

  // Monitor key events
  useEffect(() => {
    const detectKeyDown = (e: KeyboardEvent) => {
      if (!isRunning && !ended) setIsRunning(true);

      if (e.key === letters[myIndex]) {
        setWrongInput(false);
        setMyIndex((prevIndex) => prevIndex + 1);
        scrollToPosition(50 * myIndex)
      } else if (e.key !== 'Shift') {
        setMistakes((prevMistakes) => prevMistakes + 1);
        setWrongInput(true);
      }
    };

    document.addEventListener('keydown', detectKeyDown, true);

    return () => {
      document.removeEventListener('keydown', detectKeyDown, true);
    };
  }, [ended, isRunning, letters, myIndex]);

  // Update timer and calculate speed/accuracy
  useEffect(() => {
    let timer: number | undefined;
    const totalLetters = letters.length;

    if (isRunning && myIndex < totalLetters) {
      timer = setInterval(() => setTime((prevTime) => prevTime + 0.01), 10);
    } else if (myIndex === totalLetters) {
      clearInterval(timer);

      const wordsTyped = totalLetters / 5;
      const typingSpeed = Math.trunc(60 * (wordsTyped / time));
      setSpeed(typingSpeed);
      socket.emit('end-competition', typingSpeed, time);
      socket.on('winner', () => {
        console.log('hello');

        setEnded(true)
      })
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, time, letters.length, myIndex]);

  const totalLetters = letters.length;
  const accuracy = totalLetters > 0 ? (100 - ((mistakes / totalLetters) * 100)) : 100;


  return (
    <div>
      <div className='sentenceBox' ref={scrollContainerRef}>
        <div className='sentenceContainer'>
          {letters.map((char, index) => (
            <CharBox key={index} char={char} typed={index < myIndex} current={index === myIndex} mistake={wrongInput && index === myIndex} />
          ))}
        </div>
      </div>
      <h3 className='stats'>Time: {(Math.round(time * 100) / 100).toFixed(2)} s</h3>
      <h3 className='stats'>Speed: {(Math.round(speed * 100) / 100).toFixed(2)} w/min</h3>
      <h3 className='stats'>Accuracy: {(Math.round(accuracy * 100) / 100).toFixed(2)} %</h3>
      <button onClick={pickSentence} className='button'>Restart</button>
      {ended && <Overlay />}
    </div>
  )
}

export default Sentence
