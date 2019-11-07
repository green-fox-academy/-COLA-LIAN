import React from 'react';
import '../App.css';

import ArticalBar from './articalBar';
import SideBar from './sideBar';

function Home(props) {
  return (   
      <>
        <ArticalBar />
        <SideBar history={props.history}/>       
      </>  
  );
}

export default Home;