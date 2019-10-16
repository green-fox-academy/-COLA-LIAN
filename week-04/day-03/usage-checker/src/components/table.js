import React from 'react';

const style = {
    borderCollapse: 'collapse',
    marginLeft: '30vw',
    marginTop: '20vh',
  }

function table(props) {
    return(
        <div>
            <table style={style} border='1'>      
                <thead>
                    <tr >
                        <th>Component </th>
                        <th>Time </th>
                    </tr>
                </thead>
                {props.usages.map((item) =>{
                    return (
                        <tbody>
                            <tr >
                                <th>{item.name} </th>
                                <th>{item.time} </th>
                            </tr>
                        </tbody>    
                    )
                })}
            </table>
        </div>
    )
}

export default table