import '../App.css';
import React from 'react';

function SideBar(props) {
    const { history } = props;

    const handleHistory = () => {
        history.push('/newSubmit');
    }

    const arr = ['Astrophysics','Cosmology','Space Exploration','Planetary Science', 'Astrobiology'];

    return (
        <div>
            <div className="bar" id="sideBar">
                <div className="sideFrame">
                    <button className="submitBtn" onClick={handleHistory} >SUBMIT A NEW POST</button>
                    <div className="side" id="BarContent">
                        <div className="side" id="CoHeader">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                            <h3>About&nbsp;&nbsp;</h3>
                            <h4 className="blueText">r/spaces</h4>
                        </div>

                        <div className="side" id="CoBody">
                            <ul>
                                <strong>share&discuss informative content on:</strong>
                                <p></p>
                                {arr.map(item => {
                                    return (<div><li>{item}</li><br/></div>)
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default SideBar;