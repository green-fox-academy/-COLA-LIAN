import '../App.css';
import React from 'react';
import ListItems from './listItems';
import ListArtItem from './listArtItem'


function articalBar() {
    return (      
        <div className="bar" id="articalBar">
            <div className="articalFrame">
                {/* <ListArtItem /> */}
                <ListItems/>
            </div>
        </div>
    );
}

export default articalBar;