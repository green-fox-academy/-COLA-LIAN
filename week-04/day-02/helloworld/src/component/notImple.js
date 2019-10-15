import React from 'react'

const notImple = ({match}) =>{
    return(
        <div>
            <h1>This page {match.params.id} is not implemented yet</h1>
        </div>
    )
}

export default notImple