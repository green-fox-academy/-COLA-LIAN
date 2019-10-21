import React from 'react'
import { connect } from 'react-redux'

function setter(props) {

    return(
        <div className = 'setter'>
            <h1>The Setter</h1>
            <input className = 'setCounter'></input>
            <button onClick = {props.setter}>Set</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        counter: state.counter 
    }      
}

const mapDispatchToProps = dispatch => {
    return {
        setter:(number) => {
            dispatch({type: 'SET', amount: number})
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(setter)