import React from 'react';
import OperateItem from './operateItem';

class Item extends React.Component{

    constructor(props){
        super(props);
    }
    btnFrame = {
        width:'100%',
        height:'60%',
    }
    
    todoItem = {
        fontFamily: 'Lato, sans-serif',
        fontSize: '26px',
        lineHeight: '2.2',
        color: '#b8b8b8',
        width:'80%',
        margin: 'auto',
        height:'17%',
        fontSize: '26px',
        lineHeight: '2.2',
        color: '#b8b8b8',
    };
    
    iconFrame = {
        width:'45px',
        height:'20px',
        float: 'right',
        marginTop: '20px',
    }
    
    iconTrush = {
        width:'20px',
        height:'20px',
        float: 'left',
    }
    iconCheck = {
        width:'20px',
        height:'20px',
        float: 'left',
        marginLeft:'5px',
        // src='img/trush.png',
        // src="img/check.png"
        // display: 'inline-block',
        backgroundImage: 'url(iconCheck.png)',
        // backgroundPosition: 'center center',
        // backgroundSize: '20px 20px',
    }

    render(){
        return(
        <div style={this.btnFrame}> 
            <div style={this.todoItem}>
               6666666666{/* {input} */}
               <OperateItem/>
            <div style={this.iconFrame}>
                <i style={this.iconTrush}></i>
                <i style={this.iconCheck}></i>
           </div> 
            </div>
        </div>
        )
    }
    
}

export default Item