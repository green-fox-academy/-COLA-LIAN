import '../App.css';
import React from 'react';


function listArtItem(artical) {
    return (         
        <div className="artical">
            <div className="arrowArea"></div>
            <h2> title:{artical.title} </h2>
            <button className="listBtn">Modify</button>
            <button className="listBtn">Remove</button>
        </div>
    );
}

export default listArtItem;