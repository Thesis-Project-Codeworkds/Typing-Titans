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
  const baseClass = 'char-default';
  const spaceClass = char === ' ' ? 'char-space' : '';
  const currentClass = current ? 'char-current' : '';
  const typedClass = typed ? 'char-typed' : '';
  const mistakeClass = current && mistake ? 'char-mistake' : '';

  return (
    <h3 className={
      combineClasses([ baseClass, spaceClass, currentClass, typedClass, mistakeClass ])
    }>{ char }</h3>
  );
}

export default CharBox;
