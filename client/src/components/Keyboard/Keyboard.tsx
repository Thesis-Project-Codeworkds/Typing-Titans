import './Keyboard.css'; 

const Keyboard = () => {
  return (
    <div className="keyboard">
      <div className="row">
        {['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'DEL'].map((key, index) => (
          <button key={index} className={`key ${key === 'DEL' ? 'utility' : ''}`}>
            <span className="front">{key}</span>
          </button>
        ))}
      </div>
      <div className="row">
        {['TAB', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'].map((key, index) => (
          <button key={index} className={`key ${key === 'TAB' ? 'utility' : ''}`}>
            <span className="front">{key}</span>
          </button>
        ))}
      </div>
      <div className="row">
        {['CAPS', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'ENTER'].map((key, index) => (
          <button key={index} className={`key ${key === 'CAPS' || key === 'ENTER' ? 'utility' : ''}`}>
            <span className="front">{key}</span>
          </button>
        ))}
      </div>
      <div className="row">
        {['SHIFT', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'SHIFT'].map((key, index) => (
          <button key={index} className={`key ${key === 'SHIFT' ? 'utility' : ''}`}>
            <span className="front">{key}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
