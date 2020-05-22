import React from 'react';
import MiddlePanel from './components/middle-panel/middle-panel';
import LeftPanel from './components/left-panel/left-panel';
import RightPanel from './components/right-panel/right-panel';
import './app.css';

function getTodaysDateParts() {
  const dateAsString = new Date();
  
  return {
    year: dateAsString.getFullYear(),
    month: dateAsString.toLocaleString('default', {month: 'long'}),
    day: dateAsString.getDate()
  };
}

function App() {
  return (
    <div id='app'>
      <LeftPanel todaysDate={getTodaysDateParts()}/>
      <MiddlePanel />
      <RightPanel />
    </div>
  );
}

export default App;
