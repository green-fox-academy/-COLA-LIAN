import React from 'react';
import './App.css';

import Header from './components/header';
import ArticalBar from './components/articalBar';
import SideBar from './components/sideBar';
import Submit from './components/submit';

function App() {
  return (
    <div className="bgd">
      <Header/>
      <ArticalBar/>
      <SideBar/> 

      {/* <Submit /> */}
    </div>
  );
}

export default App;
