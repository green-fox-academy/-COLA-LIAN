import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../App.css';

const removeTag = (props) => {

    return(
        <div>
            <h1>Remove Tag</h1> 
            <ul>
                {props.tags.map(tag =>(
                    <div onClick={() => props.removeTag(tag)} className = "removeTag">
                        {tag}
                    </div>
                ))}
            </ul>
        </div>
    )

   
} 

const mapStateToProps = state => {
    return {
        tags: state.tags
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeTag: tag => {
            dispatch({ type: 'REMOVE_TAG', tag: tag })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(removeTag)