import React from 'react'

const errorCode = ({match}) =>{
    return(
        <div>
            <h1>Error: {match.params.id}</h1>
        </div>
    )
}

export default errorCode