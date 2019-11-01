import React from 'react';
require ('../App.css');

class Item extends React.Component{

    constructor(props){
        super(props);
        this.handleDone= this.handleDone.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    handleDelete(){
        this.props.delete(this.props.item.name);
    }

    handleDone(event){
        this.props.done(this.props.item.name, event.target.checked)
    }

    render(){
        return(
            <div className="todoItem">
               <span>{this.props.item.name}</span>
                <input className="checkBox" type="checkbox" checked={this.props.item.done} onChange={this.handleDone}/>
                <button className="deleteBtn" onClick={this.handleDelete} ></button>
            </div>
        )
    }
    
}

export default Item