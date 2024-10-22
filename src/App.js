import React from 'react';
import './App.css'

function App() {
  const handleButtonClick = (buttonName) => {
    alert("You clicked " + buttonName);
  };

  return (
    <div className='container'> 
      <button onClick={() => handleButtonClick('Data Structures')}>Data Structures</button>
      <button onClick={() => handleButtonClick('Algorithms')}>Algorithms</button>
    </div>
  );
}

export default App;
