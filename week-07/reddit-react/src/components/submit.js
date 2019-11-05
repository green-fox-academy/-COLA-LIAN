import '../App.css';
import React from 'react';


function submit() {
    return (
        <div className="submitBar">       
            <div className="submitFrame" >
                <label>title
                    <p><input/></p> 
                </label>

                <label>URL
                    <p><input/></p> 
                </label> 
            </div>
            
           <button className="submitBtn" id="smallSmitBtn">submit</button>
        </div>
    );
}

export default submit;