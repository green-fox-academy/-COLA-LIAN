import '../App.css';
import React from 'react';
import ListArtItem from './listArtItem';


function articalBar() {
    return (      
        <div className="bar" id="articalBar">
            <div className="articalFrame">
                <ListArtItem />
            </div>
        </div>
    );
}

export default articalBar;