import React from 'react';

class OperateItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {todo:[{name:'workshop', done:false}]}
        this.add = this.add.bind(this);
        this.delete = this.delete.bind(this);
        this.done = this.done.bind(this);
    }

    add(input){
        if(input.length > 3){
            this.state.todo.push({name: input, done:false});
            this.setState(this.state);
        }else{
            alert('Input text cannot be shorter than 3 characters!' );
        }
    }

    delete(index){
        this.state.todo.splice(index,1);
        this.setState(this.state);
    }

    done(index){
        this.state.todo[index].done = true;
        this.setState(this.state);
    }


    render(){
        return(
            <div>
                {this.todo}
                <button></button>
            </div>
        )
    }

}

export default OperateItem
