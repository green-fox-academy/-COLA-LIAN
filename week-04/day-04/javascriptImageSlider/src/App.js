import React from 'react';
// import { Slide } from 'react-slideshow-image';
import SlideShow from './components/slideshow'
import Frame from './components/frame'

const background = {
    height:'100vh',
    width:'100vw',
    backgroundImage: 'radial-gradient(#FFFFFF ,#e5e5e5)',
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
}

function App() {
  return (
    <div className="background" style={background}>
      <Frame/>
    </div>
  );
}

export default App;
