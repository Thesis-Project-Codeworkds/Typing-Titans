import { useEffect } from 'react';
import './Keyboard.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { keyPressed, keyReleased } from '../../redux/KeyboardSlice';

interface KeyStyles {
  [key: string]: string;
}

const Keyboard = ({ className = '' }: { className: string }) => {
  const dispatch = useAppDispatch();

  const activeKeys = useAppSelector(state => state.keyboard.activeKeys);

  useEffect(() => {
    const handlePhysicalKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      console.log(`Handling key down: ${key}`);
      if (!activeKeys[key]) {
        dispatch(keyPressed(key));
      }
    };

    const handlePhysicalKeyUp = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      console.log(`Handling key up: ${key}`);
      dispatch(keyReleased(key));
    };

    window.addEventListener('keydown', handlePhysicalKeyDown);
    window.addEventListener('keyup', handlePhysicalKeyUp);

    return () => {
      window.removeEventListener('keydown', handlePhysicalKeyDown);
      window.removeEventListener('keyup', handlePhysicalKeyUp);
    };
  }, [dispatch, activeKeys]);

  console.log('Rendering Keyboard Component', activeKeys);

  const handleMouseDown = (key: string) => {
    if (!activeKeys[key]) {
      dispatch(keyPressed(key.toLowerCase()));
    }
  };

  const handleMouseUp = (key: string) => {
    if (activeKeys[key]) {
      dispatch(keyReleased(key.toLowerCase()));
    }
  };

  const keyStyles: KeyStyles = {
    '`': 'little-finger', '1': 'little-finger', '2': 'ring-finger', '3': 'middle-finger', '4': 'index-finger',
    '5': 'index-finger', '6': 'index-finger', '7': 'index-finger', '8': 'index-finger', '9': 'middle-finger',
    '0': 'ring-finger', '-': 'little-finger', '=': 'little-finger', 'DEL': 'utility',
    'TAB': 'utility', 'q': 'little-finger', 'w': 'ring-finger', 'e': 'middle-finger', 'r': 'index-finger',
    't': 'index-finger', 'y': 'index-finger', 'u': 'index-finger', 'i': 'index-finger', 'o': 'middle-finger',
    'p': 'ring-finger', '[': 'little-finger', ']': 'little-finger', '\\': 'little-finger',
    'CAPS': 'utility', 'a': 'little-finger', 's': 'ring-finger', 'd': 'middle-finger', 'f': 'index-finger',
    'g': 'index-finger', 'h': 'index-finger', 'j': 'index-finger', 'k': 'index-finger', 'l': 'middle-finger',
    ';': 'ring-finger', "'": 'little-finger', 'ENTER': 'utility',
    'SHIFT': 'utility', 'z': 'little-finger', 'x': 'ring-finger', 'c': 'middle-finger', 'v': 'index-finger',
    'b': 'index-finger', 'n': 'index-finger', 'm': 'index-finger', ',': 'middle-finger', '.': 'ring-finger',
    '/': 'little-finger', ' ': 'thumb'
  };

  return (
    <div className={`keyboard ${className}`}>
      {[
        ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'DEL'],
        ['TAB', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
        ['CAPS', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'ENTER'],
        ['SHIFT', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'SHIFT']
      ].map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((key, index) => (
            <button key={index} 
                    // className={`key ${keyStyles[key]} ${activeKeys[key] ? 'active' : ''}`}
                    className={`key ${keyStyles[key]} ${activeKeys[key] ? 'physical-active' : ''}`}
                    onMouseDown={() => handleMouseDown(key)}
                    onMouseUp={() => handleMouseUp(key)}
                    onTouchStart={() => handleMouseDown(key)}
                    onTouchEnd={() => handleMouseUp(key)}>
              <span className="front">{key.toUpperCase()}</span>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
