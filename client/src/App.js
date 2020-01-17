import React from 'react';
import './App.css';

import Players from './Players';
import useDarkMode from './hooks/useDarkMode';

function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleDarkMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <button onClick={toggleDarkMode}>toggle dark mode</button>
      <Players />

    </div>
  );
}

export default App;
