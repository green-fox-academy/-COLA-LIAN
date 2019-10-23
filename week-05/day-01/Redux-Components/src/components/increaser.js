import React from 'react'
import { connect } from 'react-redux'


function increaser(props){
    return(
        <div className = "increaser">
            <h1>The Increaser</h1>
            <button onClick = {props.increaser} >Increase</button>
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
        increaser:() => {
            dispatch({type: 'INCREASE'})
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(increaser)