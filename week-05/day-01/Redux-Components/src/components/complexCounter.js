import React from 'react';
import {connect} from 'react-redux';
import '../App.css';

const complexCounter = props => {
    return(
        <div>
            <h1>Complex Counter</h1>
            <p>{props.counter + props.tags.length}</p>
        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(complexCounter)