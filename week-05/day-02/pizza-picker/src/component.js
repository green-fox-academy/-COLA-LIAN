import React from 'react';
import './App.css';

class Component extends React.Component{
    constructor(props){
        super(props);
        this.state = {base:'small', topping:[], cut: '', comment:''};

        this.baseChange = this.baseChange.bind(this);
        this.toppingChange = this.toppingChange.bind(this);
        this.cutChange = this.cutChange.bind(this);
        this.commentChange = this.commentChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    baseChange(event){
        this.setState({base: event.target.value});
    }
    toppingChange(event){
        let item = event.target.value;
        let items = this.state.topping.slice();//object => array
        let index = items.indexOf(item);
        index === -1 ? items.push(item) : items.splice(index, 1);
        this.setState({topping:items});
    }
    cutChange(event){
        this.setState({cut: event.target.value});
    }
    commentChange(event){
        this.setState({comment: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({ base:this.state.base, 
                        topping:this.state.topping, 
                        cut: this.state.cut, 
                        comment:this.state.comment
                    });
        console.log(this.state);
    }


    render(){
        return(
            <div className='form vertical'>
                <h1>Pizza Picker</h1>
                <form onSubmit={this.handleSubmit}>
                    
                    <div className = "componentFrame">base：
                        <select value={this.state.base} onChange={this.baseChange}>
                            <option value='S'>small</option>
                            <option value='M'>medium</option>
                            <option value='L'>large</option>
                        </select>
                    </div>

                    <div className = "componentFrame">
                        topping：
                        <label><input type="checkbox"  value="chicken"
                                onChange={this.toppingChange}/>chicken</label>
                        <label><input type="checkbox"  value="beef"
                                onChange={this.toppingChange}/>beef</label>
                        <label><input type="checkbox"  value="pork"
                                onChange={this.toppingChange}/>pork</label>
                    </div>


                    <div className = "componentFrame">
                        cut:
                        <label><input type="radio" name="cut" value = {true} 
                                onChange={this.cutChange}/>yes</label>
                        <label><input type="radio" name="cut" value = {false} 
                                onChange={this.cutChange}/>no</label>
                    </div>

                    <div className = "componentFrame">
                        <label>other comments: <input type = "text" value = {this.state.comment} onChange = {this.commentChange}/></label>
                    </div>

                    <div className = "componentFrame">
                        <p>
                            <button>submit</button>
                        </p>
                    </div>

                    <p>
                        <h3>Your pizza:</h3>
                        <ul>                           
                            <li>base():{this.state.base}</li>
                            <li>topping:{this.state.topping}</li>
                            <li>cut:{this.state.cut}</li>
                            <li>comment:{this.state.comment}</li>
                        </ul>
                    </p>
                     
                </form>
                

            </div>
        )
    }
}

export default Component