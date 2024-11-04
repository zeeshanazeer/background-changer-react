import './App.css';
import { useState } from 'react';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const changeColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div
      style={{
        background: backgroundColor,
        color: backgroundColor === 'black' ? 'white' : 'black',
        width: '100%',
        height: '100vh', // Change 'screen' to '100vh'
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '60%',
          height: '70px',
          background: 'white',
          textAlign: 'center',
          borderRadius: '15px',
          display: 'flex',
          justifyContent: 'space-around', // Center buttons evenly
          alignItems: 'center',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Add a subtle shadow for depth
        }}
      >
        {['black', 'white', 'red', 'green', 'cyan', 'yellow', 'gray', 'orange'].map(color => (
          <button
            key={color}
            onClick={() => changeColor(color)}
            style={{
              padding: '10px 15px',
              border: 'none',
              borderRadius: '5px',
              background: color,
              color: color === 'black' ? 'white' : 'black',
              cursor: 'pointer',
              transition: 'background 0.3s',
            }}
          >
            {color.charAt(0).toUpperCase() + color.slice(1)} {/* Capitalize button text */}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
