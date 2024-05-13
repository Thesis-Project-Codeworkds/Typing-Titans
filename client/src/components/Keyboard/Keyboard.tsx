import './Keyboard.css';

const Keyboard = ({ className = "" }) => {
  const keyStyles = {
    '`': 'little-finger', '1': 'little-finger', '2': 'ring-finger', '3': 'middle-finger', '4': 'index-finger',
    '5': 'index-finger', '6': 'index-finger', '7': 'index-finger', '8': 'index-finger', '9': 'middle-finger',
    '0': 'ring-finger', '-': 'little-finger', '=': 'little-finger', 'DEL': 'little-finger',
    'TAB': 'little-finger', 'q': 'little-finger', 'w': 'ring-finger', 'e': 'middle-finger', 'r': 'index-finger',
    't': 'index-finger', 'y': 'index-finger', 'u': 'index-finger', 'i': 'index-finger', 'o': 'middle-finger',
    'p': 'ring-finger', '[': 'little-finger', ']': 'little-finger', '\\': 'little-finger',
    'CAPS': 'little-finger', 'a': 'little-finger', 's': 'ring-finger', 'd': 'middle-finger', 'f': 'index-finger les-2',
    'g': 'index-finger', 'h': 'index-finger', 'j': 'index-finger les-2', 'k': 'index-finger', 'l': 'middle-finger',
    ';': 'ring-finger', "'": 'little-finger', 'ENTER': 'little-finger',
    'SHIFT': 'little-finger', 'z': 'little-finger', 'x': 'ring-finger', 'c': 'middle-finger', 'v': 'index-finger',
    'b': 'index-finger', 'n': 'index-finger', 'm': 'index-finger', ',': 'middle-finger', '.': 'ring-finger',
    '/': 'little-finger', ' ': 'thumb'
  };

  return (
    <div className={`keyboard ${className}`}>
      {[ 
        ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'DEL'],
        ['TAB', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
        ['CAPS', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'ENTER'],
        ['SHIFT', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'SHIFT'],
      ].map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((key, index) => (
            <button key={index} className={`key ${key === 'DEL' || key === 'TAB' || key === 'CAPS' || key === 'ENTER' || key === 'SHIFT' ? 'utility' : ''} ${keyStyles[key]}`}>
              <span className="front">{key}</span>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;

