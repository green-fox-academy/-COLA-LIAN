import React from 'react';
import { Slide } from 'react-slideshow-image';
 
const slideImages = [
  'http://b-ssl.duitang.com/uploads/item/201701/16/20170116095318_28kBX.thumb.1600_0.jpeg',
  'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3341376459,2998142674&fm=26&gp=0.jpg',
  'https://source.unsplash.com/assets/grid-erondu-1d1407af0d578ecaa04ef86a84f1906172c2140513fced96b99dfc2a169d0e89.png',
];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const style = {
  width: '100vw',
  height: '100vh',
}
 
const Slideshow = () => {
    return (
      <div style={style} className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}

function App() {
  return (
    <div className="App">
      <Slideshow/>
    </div>
  );
}

export default App;
