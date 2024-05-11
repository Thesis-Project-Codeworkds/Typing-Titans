import './CharBox.css';

interface CharBoxProps {
  char: string;
  typed: boolean;
  current: boolean;
  mistake: boolean;
}

const CharBox = ({ char, typed, current, mistake }: CharBoxProps) => {
  const baseClass = 'charDefault';
  const spaceClass = char === ' ' ? 'charSpace' : '';
  const currentClass = current ? 'charCurrent' : '';
  const typedClass = typed ? 'charTyped' : '';
  const mistakeClass = current && mistake ? 'charMistake' : '';

  const combinedClasses = `${baseClass} ${currentClass} ${typedClass} ${mistakeClass} ${spaceClass}`.trim();

  return (
    <h3 className={combinedClasses}>{char}</h3>
  );
}

export default CharBox;
