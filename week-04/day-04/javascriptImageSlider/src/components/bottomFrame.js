import React from 'react';
import '../App.css';

const img = [
    './otterImg/otter1.jpeg',
    './otterImg/otter2.jpeg',
    './otterImg/otter3.jpeg',
    './otterImg/otter4.jpeg',
    './otterImg/otter5.jpeg',
    './otterImg/otter6.jpeg',
    './otterImg/otter7.jpeg',
]

function BottomFrame(props) {    
    return(
        <div className="bottomFrame">
            {
                img.map((image, index) => {return(
                    <div className="thumbnail"  style={{'backgroundImage': `url(${image})`}} onClick = {() => props.clickOnThumbnail(index)}>                          
                    </div>
                   ) 
                })
            }
        </div>
    )    
}

export default BottomFrame