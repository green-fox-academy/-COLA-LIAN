import '../App.css';
import React from 'react'
import { connect } from 'react-redux'

function tagState(props){
    return(
        <div className = 'tagState'>
            <h1>Tags</h1>
            {props.tags.map(item => {
                return(
                    <div className = 'tagElement'>
                        {item}
                    </div>
                ) 
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        tags: state.tags
    }
}

export default connect(mapStateToProps)(tagState)