import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4114434287,3400731021&fm=15&gp=0.jpg',
    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3341376459,2998142674&fm=26&gp=0.jpg',
    ];
   
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    // infinite: true,
    // indicators: true,
    // arrows: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }
  
  function Slideshow(){
    return (
      <div  className="slide-container">
        <Slide  {...properties}>
          <div className="each-slide">
            <div >
              <img src={slideImages[0]}></img>
                <span>Slide 1</span>
            </div>   
          </div>
          
          <div className="each-slide">
            <div>
            <img src={slideImages[1]}></img>
              <span>Slide 2</span>
            </div>
            
          </div>
        </Slide>
      </div>
    )
  }

  export default Slideshow