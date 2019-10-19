import React from 'react';
import '../App.css';

function mainScreen(props){  
    return(
        <div className='mainScreen'  style = {{backgroundImage: `url(${props.images[props.index].url})`,}}>
            <div className='virtualBlock' >
                <h1 className="text" > &nbsp;&nbsp;&nbsp;&nbsp;{props.images[props.index].name} </h1>
                <div className="text" > &nbsp;&nbsp;&nbsp;&nbsp;{props.images[props.index].description} </div>
            </div>
        </div>
    ) 
}

export default mainScreen