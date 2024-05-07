import React from 'react'
import './CharBox.css'

interface CharBoxProps {
  char: string;
  typed: boolean;
  current: boolean;
}

const CharBox: React.FC<CharBoxProps> = ({ char, typed, current }) => {
  return (
    <h3 className={current ? 'charDefault charCurrent' : typed ? 'charDefault charTyped' : 'charDefault'}>{char}</h3>
  )
}

export default CharBox