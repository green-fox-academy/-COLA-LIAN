import '../App.css';
import React from 'react';


function sideBar() {
    return (
        <div>
            <div className="bar" id="sideBar">
                <div className="sideFrame">
                    <button className="submitBtn">SUBMIT A NEW POST</button>
                    <div className="side" id="BarContent">
                        <div className="side" id="CoHeader"></div>
                        <div className="side" id="CoBody"></div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default sideBar;