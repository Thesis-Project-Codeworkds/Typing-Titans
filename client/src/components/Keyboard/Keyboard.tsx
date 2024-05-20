import { useEffect, useCallback } from 'react';
import './Keyboard.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { keyPressed, keyReleased } from '../../redux/KeyboardSlice';
// import { setActiveKey } from '../../redux/lessonGameSlice';
import { advanceKey } from '../../redux/lessonGameSlice';

interface KeyStyles {
  [key: string]: string;
}

const Keyboard = ({ className = '' }: { className?: string }) => {
  const dispatch = useAppDispatch();
  const activeKeys = useAppSelector(state => state.keyboard.activeKeys);
  const { activeKey, gameStarted } = useAppSelector(state => state.lessonGame);

  const handleKeyAction = useCallback((key: string, action: 'down' | 'up') => {
    const lowerKey = key.toLowerCase();
    const isActive = activeKeys[lowerKey];
    const isCorrectKey = gameStarted && lowerKey === activeKey;

    if (action === 'down' && !isActive) {
      dispatch(keyPressed(lowerKey));
      if (isCorrectKey) {
        dispatch(advanceKey());
      }
    } else if (action === 'up' && isActive) {
      dispatch(keyReleased(lowerKey));
    }
  }, [dispatch, activeKeys, activeKey, gameStarted]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => handleKeyAction(event.key, 'down');
    const handleKeyUp = (event: KeyboardEvent) => handleKeyAction(event.key, 'up');

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyAction]);

  const handleInteraction = (key: string, action: 'down' | 'up') => () => handleKeyAction(key, action);

  const keyStyles: KeyStyles = {
    '`': 'little-finger', '1': 'little-finger', '2': 'ring-finger', '3': 'middle-finger', '4': 'index-finger',
    '5': 'index-finger', '6': 'index-finger', '7': 'index-finger', '8': 'middle-finger', '9': 'ring-finger',
    '0': 'little-finger', '-': 'little-finger', '=': 'little-finger', 'DEL': 'utility',
    'TAB': 'utility', 'q': 'little-finger', 'w': 'ring-finger', 'e': 'middle-finger', 'r': 'index-finger',
    't': 'index-finger', 'y': 'index-finger', 'u': 'index-finger', 'i': 'middle-finger', 'o': 'ring-finger',
    'p': 'little-finger', '[': 'little-finger', ']': 'little-finger', '\\': 'little-finger',
    'CAPS': 'utility', 'a': 'little-finger', 's': 'ring-finger', 'd': 'middle-finger', 'f': 'index-finger',
    'g': 'index-finger', 'h': 'index-finger', 'j': 'index-finger', 'k': 'middle-finger', 'l': 'ring-finger',
    ';': 'little-finger', "'": 'little-finger', 'ENTER': 'utility',
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
                    className={`key ${keyStyles[key]} ${activeKeys[key] ? 'physical-active' : ''} ${key === activeKey ? 'lesson-active' : ''}`}
                    onMouseDown={handleInteraction(key, 'down')}
                    onMouseUp={handleInteraction(key, 'up')}
                    onTouchStart={handleInteraction(key, 'down')}
                    onTouchEnd={handleInteraction(key, 'up')}>
              <span className="front">{key.toUpperCase()}</span>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
