import React from 'react';
import './App.css';

import Increaser from './components/increaser'
import Decreaser from './components/decreaser';
import Resetter from './components/resetter';
import Setter from './components/setter';
import TagState from './components/tagState';

function App() {
  return (
    <div className = "App">
      <div className = "counter">
        <Increaser />
        <Decreaser />
        <Resetter />
        <Setter />
      </div>
      <div className = "tag">
        <TagState />
      </div>
  </div>
  );
}

export default App;
