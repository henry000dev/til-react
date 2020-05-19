import React from 'react';
import MiddlePanel from './components/middle-panel/middle-panel';
import LeftPanel from './components/left-panel/left-panel';
import RightPanel from './components/right-panel/right-panel';
import './app.css';

function App() {
  return (
    <div id='app'>
      <LeftPanel />
      <MiddlePanel />
      <RightPanel />
    </div>
  );
}

export default App;
