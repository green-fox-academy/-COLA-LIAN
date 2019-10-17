import React from 'react';

const frame = {
    height:'500px',
    width: '1112px',
    backgroundColor: '#ffffff',
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
}

const viewer = {    
    height:'100%',
    width: '80%',
    backgroundColor: 'pink',
    display:'flex',
    // justifyContent:'space-around',
    alignItems:'flex-end',
}

const thumbnail = {
    height:'20%',
    width: '100%',
    backgroundColor: '#000000',
}

class View extends React.Component{
    render(){
        return(
        <div className="frame" style={frame}>
            <div className="viewer" style={viewer}></div>     
        </div>
        )
    }
}

export default View