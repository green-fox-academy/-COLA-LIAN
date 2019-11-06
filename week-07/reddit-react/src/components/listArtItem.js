import '../App.css';
import React from 'react';


export default function({ artical }){
    console.log(artical);
    
    return (         
        <div className="artical">
            <div className="arrowArea">score:{artical.score}</div>
            <h2> title:{artical.title}  </h2>
            <button className="listBtn">Modify</button>
            <button className="listBtn">Remove</button>
        </div>
    );
}
