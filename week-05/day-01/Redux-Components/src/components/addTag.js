import React, { useState } from 'react';
import { connect } from 'react-redux';

const addTag = (props) => {
    const [value, setValue] = useState('');

    const handleChange = event => {
        setValue(event.target.value)
    }

    const click = value => {
        props.addTag(value)
        setValue('')
    }

    return(
        <div>
            <h1>Add Tag</h1> 
            <input type = "text" onChance={handleChange} value={value}></input>
            <button onClick={() => click(value)}>Add</button>
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
        addTag: tag => {
            dispatch({ type: 'ADD_TAG', tag: tag })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(addTag)