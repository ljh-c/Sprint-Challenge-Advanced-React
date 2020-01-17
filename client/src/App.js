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
      <h1 data-testid="title">Women's World Cup players ranked by search interest from Google Trends, June-July 2019, worldwide</h1>
      <button onClick={toggleDarkMode}>toggle dark mode</button>
      <Players />

    </div>
  );
}

export default App;
