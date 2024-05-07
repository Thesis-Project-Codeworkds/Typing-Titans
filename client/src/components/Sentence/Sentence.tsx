import React, { useState, useEffect } from 'react'
import './Sentence.css'
import CharBox from '../CharBox/CharBox';

const Sentence: React.FC = () => {
  // Sentence selection list
  const sentences = [
    "here's the initial statement that individuals need to type to engage with the system.",
    "this sentence serves as the starting point for users' interaction with the platform.",
    "the first of ten sentences, initiating user input and interaction.",
    "commencing with the primary sentence, users begin their input process.",
    "beginning the interaction process, users are prompted to type this sentence.",
    "users are prompted to type this as the opening sentence to initiate interaction.",
    "as the starting point, users are instructed to input this initial sentence.",
    "this serves as the foundational statement for user engagement and input.",
    "the outset of interaction prompts users to type this initial sentence.",
    "initiating interaction, users commence by typing this opening statement."
  ];

  // Initial states
  const [sentence, setSentence] = useState(sentences[0]);
  const [letters, setLetters] = useState(sentence.split(''));
  const [myIndex, setMyIndex] = useState(0);
  const [time, setTime] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [wrongInput, setWrongInput] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  // Select a random sentence
  const pickSentence = () => {
    const x = Math.floor(Math.random() * sentences.length);
    const newSentence = sentences[x];
    setSentence(newSentence);
    setLetters(newSentence.split(''));
    setMyIndex(0);
    setTime(0);
    setSpeed(0);
    setMistakes(0);
    setWrongInput(false);
    setIsRunning(false);
  };

  // Handle keyboard input and compare against the sentence
  const detectKeyDown = (e: KeyboardEvent) => {
    if (!isRunning) setIsRunning(true);

    if (e.key === letters[myIndex]) {
      setWrongInput(false);
      setMyIndex((prevIndex) => prevIndex + 1);
    } else {
      setMistakes((prevMistakes) => prevMistakes + 1);
      setWrongInput(true);
    }
  };

  // Monitor key events
  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true);
    return () => {
      document.removeEventListener('keydown', detectKeyDown, true);
    };
  }, [myIndex, letters]);

  // Update timer and calculate speed/accuracy
  useEffect(() => {
    let timer: number | undefined;
    if (isRunning && myIndex < letters.length) {
      timer = setInterval(() => setTime((prevTime) => prevTime + 0.01), 10);
    } else if (myIndex === letters.length) {
      clearInterval(timer);
      const wordsTyped = letters.length / 5;
      setSpeed((wordsTyped / time) * 60);
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, myIndex, letters, time]);

  const accuracy = letters.length > 0 ? (100 - ((mistakes / letters.length) * 100)) : 100;

  return (
    <div>
      <div id='sentenceContainer'>
        {letters.map((char, index) => (
          <CharBox key={index} char={char} typed={index < myIndex} current={index === myIndex} mistake={wrongInput && index === myIndex} />
        ))}
      </div>
      <h1>Time: {(Math.round(time * 100) / 100).toFixed(2)} s</h1>
      <h1>Speed: {(Math.round(speed * 100) / 100).toFixed(2)} w/min</h1>
      <h1>Accuracy: {(Math.round(accuracy * 100) / 100).toFixed(2)} %</h1>
      <button onClick={pickSentence}>Restart</button>
    </div>
  )
}

export default Sentence
