import React from 'react';
import Item from './Item';

class Todo extends React.Component{
    constructor(props){
        super(props)
        
        this.state= {todo:[]};
        fetch('http://localhost:3000/api/todos', {method:'GET'}).then(response =>{
            this.setState({todo:response.json()})
        })

        // this.state = {todo:[{name:'workshop', done:false}]}
        this.add = this.add.bind(this);
        this.delete = this.delete.bind(this);
        this.done = this.done.bind(this);
    }

    add(){
        let addItem = document.querySelector('.buttonText').value;
        if(addItem.length > 3){

            
            this.setState({todo:[...this.state.todo, {name: addItem, done: false}]});
            document.querySelector('.buttonText').value = '';
        }else{
            alert('Input text cannot be shorter than 3 characters!' );
        }
    }

    delete(name){
        this.setState({todo: this.state.todo.filter((item) => item.name !== name)});
    }

    done(name){
        this.state.todo.find((item) => item.name === name);
        let tempTodo = this.state.todo;
        tempTodo.find((item) => item.name === name).done = true;
        this.setState(tempTodo);
    }

    render(){
        return(
            <div className='background'>
                <div className='frame'>
                    <div className='heading'>
                        TODOS
                    </div>
                    <div className="inputFrame">
                        <div className="inputFrame2">
                        <input type="text" className="buttonText"/>  <button type="sumit" className="btn" onClick={this.add}>Add</button>
                        </div>
                    </div>    

                    <div className="itemFrame"> 
                        {/* <div className="todoItem"> */}
                             {this.state.todo.map(thing => 
                                <Item item={thing} delete={this.delete} done={this.done}/>)}
                        {/* </div> */}
                    </div>

            </div>
        </div>
        )
    }

}

export default Todo
