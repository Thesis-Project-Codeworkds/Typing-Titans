import React, { useState, useEffect } from 'react'
import './Sentence.css'
import CharBox from '../CharBox/CharBox';

const Sentence: React.FC = () => {

  const sentence = "this is the first sentence that users are going to have to type";
  const letters = sentence.split('');

  const [myIndex, setMyIndex] = useState(0);
  console.log('Sentence ~ myIndex:', myIndex);

  useEffect(() => {
    function detectKeyDown(e: KeyboardEvent) {
      if (e.key === letters[myIndex]) {
        setMyIndex(prevIndex => prevIndex + 1);
      }
    }

    document.addEventListener('keydown', detectKeyDown, true);

    return () => {
      document.removeEventListener('keydown', detectKeyDown, true);
    };
  }, [myIndex, letters]);

  return (
    <div id='sentenceContainer'>
      {letters.map((char, index) => (
        <CharBox key={index} char={char} typed={index < myIndex} current={index === myIndex} />
      ))}
    </div>
  )
}

export default Sentence