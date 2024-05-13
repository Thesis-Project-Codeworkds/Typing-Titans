import './CharBox.css';

interface CharBoxProps {
  char: string;
  typed: boolean;
  current: boolean;
  mistake: boolean;
}

const combineClasses = (classes: string[]) => {
  return classes.reduce((combined, c) => combined + c + ' ', '').trim();
};

const CharBox = ({ char, typed, current, mistake }: CharBoxProps) => {
  const baseClass = 'charDefault';
  const spaceClass = char === ' ' ? 'charSpace' : '';
  const currentClass = current ? 'charCurrent' : '';
  const typedClass = typed ? 'charTyped' : '';
  const mistakeClass = current && mistake ? 'charMistake' : '';

  return (
    <h3 className={
      combineClasses([ baseClass, spaceClass, currentClass, typedClass, mistakeClass ])
    }>{ char }</h3>
  );
}

export default CharBox;
