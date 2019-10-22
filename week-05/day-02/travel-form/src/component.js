import React from 'react';
import './App.css';

class Component extends React.Component{
    constructor(props){
        super(props);
        this.state = {firstName:'', lastName:'', age: 0, gender:'', location:'', dietRestrictions:[]};
    }

    firstNameChange = event => {
        this.setState({firstName: event.target.value});
    }
    lastNameChange = event => {
        this.setState({lastName: event.target.value});
    }
    ageChange = event => {
        this.setState({age: Number(event.target.value)});
    }
    genderChange = event => {
        this.setState({gender: event.target.value});
    }
    locationChange = event => {
        this.setState({location: event.target.value});
    }
    dietChange = event => {
        let item = event.target.value;
        let items = this.state.dietRestrictions.slice();//object => array
        let index = items.indexOf(item);
        index === -1 ? items.push(item) : items.splice(index, 1);
        this.setState({dietRestrictions:items});
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        alert(`
First name: ${this.state.firstName}
Last name: ${this.state.firstName}
Age: ${this.state.age}
Gender: ${this.state.gender}
Location: ${this.state.location}
Dietary restrictions: ${this.state.dietRestrictions}`
        );
    }

    render(){
        return(
            <div>
                <h1>Travel Form</h1>
                <form className = "form" onSubmit ={ this.handleSubmit}>
                    
                    <label>firstName:<input type = "text" name = "firstName" value = {this.state.firstName} onChange = {this.firstNameChange}/></label>
                    <label>lastName:<input type = "text" name = "lastName" value = {this.state.lastName} onChange = {this.lastNameChange}/></label>
                    <label>age:<input type = "number" name = "age" value = {this.state.age} onChange = {this.ageChange}/></label>
                    <label>gender:
                        <label><input type="radio" name="gender" value = 'female' 
                                onChange={this.genderChange}/>female</label>
                        <label><input type="radio" name="gender" value = 'male'
                                onChange={this.genderChange}/>male</label>
                    </label>

                    <label>location：
                        <select value={this.state.location} onChange={this.locationChange}>
                            <option value='Beijing'>Beijing, China</option>
                            <option value='Hongkong'>Hongkong, China</option>
                            <option value='Shenzhen'>Shenzhen, China</option>
                        </select>
                    </label> 

                    <label>dietary restrictions：
                        <label><input type="checkbox"  value="vegetarian" name = "dietRestrictions"
                                onChange={this.dietChange}/>vegetarian</label>
                        <label><input type="checkbox"  value="kosher" name = "dietRestrictions"
                                onChange={this.dietChange}/>kosher</label>
                        <label><input type="checkbox"  value="lactose free" name = "dietRestrictions"
                                onChange={this.dietChange}/>lactose free</label>
                    </label>
                    
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default Component