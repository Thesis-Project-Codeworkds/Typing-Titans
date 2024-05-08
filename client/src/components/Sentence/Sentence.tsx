import React, { useState, useEffect } from 'react'
import './Sentence.css'
import CharBox from '../CharBox/CharBox';
import Announcement from '../Announcement';
import socket from '../../socket';

// Helper function to split sentences by words and group them into rows
const splitSentenceByWords = (sentence: string, groupSize: number): string[] => {
  const words = sentence.split(' ');
  const groups: string[] = [];

  for (let i = 0; i < words.length; i += groupSize) {
    groups.push(words.slice(i, i + groupSize).join(' ') + ' ');
  }

  return groups;
}

const Sentence: React.FC = () => {

  const [sentence, setSentence] = useState("this is the first sentence that users are going to have to type");
  const [splitLines, setSplitLines] = useState(splitSentenceByWords(sentence, 4));
  const [currentLine, setCurrentLine] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [time, setTime] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [wrongInput, setWrongInput] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  // Select a random sentence and reset the states
  const pickSentence = async () => {
    setSentence(await fetchSentence());
    setSplitLines(splitSentenceByWords(sentence, 3));
    setCurrentLine(0);
    setCurrentLetterIndex(0);
    setTime(0);
    setSpeed(0);
    setMistakes(0);
    setWrongInput(false);
    setIsRunning(false);

  };

  // Handle keyboard input and compare against the current line
  const detectKeyDown = (e: KeyboardEvent) => {
    if (!isRunning) setIsRunning(true);

    const currentLineLetters = splitLines[currentLine].split('');

    if (e.key === currentLineLetters[currentLetterIndex]) {
      setWrongInput(false);
      setCurrentLetterIndex((prevIndex) => prevIndex + 1);

      // Move to the next line if the current line is fully typed
      if (currentLetterIndex + 1 >= currentLineLetters.length) {
        setCurrentLine((prevLine) => prevLine + 1);
        setCurrentLetterIndex(0);
      }
    } else {
      setMistakes((prevMistakes) => prevMistakes + 1);
      setWrongInput(true);
    }
  };

  const fetchSentence = async () => {
    const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
      method: 'GET',
      headers: {
        'X-Api-Key': import.meta.env.VITE_API_KEY,
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch exercises');
    }
    const data = await response.json()
    return data[0].quote;
  }

  // Monitor key events
  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true);
    return () => {
      document.removeEventListener('keydown', detectKeyDown, true);
    };
  }, [currentLetterIndex, currentLine, splitLines]);

  // Update timer and calculate speed/accuracy
  useEffect(() => {
    let timer: number | undefined;
    const totalLetters = splitLines.reduce((acc, line) => acc + line.length, 0);

    if (isRunning && currentLine < splitLines.length) {
      timer = setInterval(() => setTime((prevTime) => prevTime + 0.01), 10);
    } else if (currentLine === splitLines.length) {
      socket.emit('enter');
      clearInterval(timer);
      const wordsTyped = totalLetters / 5;
      setSpeed((wordsTyped / time) * 60);
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, currentLine, splitLines, time]);

  const totalLetters = splitLines.reduce((acc, line) => acc + line.length, 0);
  const accuracy = totalLetters > 0 ? (100 - ((mistakes / totalLetters) * 100)) : 100;

  return (
    <div>
      <div className='sentenceContainer'>
        {splitLines.map((line, lineIndex) => (
          <div key={lineIndex} style={{ display: 'flex', flexDirection: 'row', marginBottom: '8px' }}>
            {line.split('').map((char, charIndex) => (
              <CharBox
                key={charIndex}
                char={char}
                typed={
                  lineIndex < currentLine ||
                  (lineIndex === currentLine && charIndex < currentLetterIndex)
                }
                current={
                  lineIndex === currentLine && charIndex === currentLetterIndex
                }
                mistake={wrongInput && lineIndex === currentLine && charIndex === currentLetterIndex}
              />
            ))}
          </div>
        ))}
      </div>
      <h3 className='stats'>Time: {(Math.round(time * 100) / 100).toFixed(2)} s</h3>
      <h3 className='stats'>Speed: {(Math.round(speed * 100) / 100).toFixed(2)} w/min</h3>
      <h3 className='stats'>Accuracy: {(Math.round(accuracy * 100) / 100).toFixed(2)} %</h3>
      <button onClick={pickSentence} className='button'>Restart</button>
      <Announcement />
    </div>
  )
}

export default Sentence
