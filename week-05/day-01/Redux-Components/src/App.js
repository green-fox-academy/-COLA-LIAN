import React from 'react';
import './App.css';

import Increaser from './components/increaser'
import Decreaser from './components/decreaser';
import Resetter from './components/resetter';
import Setter from './components/setter';
import AddTag from './components/addTag';
import TagState from './components/tagState';
import RemoveTag from './components/removeTag';
import RemoveAllTags from './components/removeAllTags'
import ComplexCounter from './components/complexCounter'

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
        <AddTag />
        <ComplexCounter />
        <RemoveTag />
        <RemoveAllTags />
        
      </div>
  </div>
  );
}

export default App;
