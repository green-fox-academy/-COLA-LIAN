import React from 'react';
import './App.css';

class LastName extends React.Component{
    constructor(props){
        super(props);
        this.state = {firstName: '', lastName:'', emailAddress: '', newState:[]};
        this.handleSubmmit =  this.handleSubmmit.bind(this);

        this.handleChangeFirstName =  this.handleChangeFirstName.bind(this);
        this.handleChangeLastName =  this.handleChangeLastName.bind(this);
        this.handleChangeEmailAddress =  this.handleChangeEmailAddress.bind(this);
    }

    handleSubmmit(event){
        event.preventDefault();

        this.setState({firstName: this.state.firstName,
                        lastName:this.state.lastName,
                        emailAddress:this.state.emailAddress});
                        
        this.state.newState = [this.state.firstName, this.state.lastName, this.state.emailAddress];
    }

    handleChangeFirstName(event){
        this.setState({firstName: event.target.value})
    }
    handleChangeLastName(event){
        this.setState({lastName: event.target.value})
    }
    handleChangeEmailAddress(event){
        this.setState({emailAddress: event.target.value})
    }

    render(){
        return(
            <div className = "frame">
                <h1>Register Form</h1>

                <form onSubmit={this.handleSubmmit}>
                    <div>firstName:</div>
                    <input type = "text" value = {this.state.firstName} onChange = {this.handleChangeFirstName}/>
                    <div>lastName:</div>
                    <input type = "text" value = {this.state.lastName} onChange = {this.handleChangeLastName}/>
                    <div>emailAddress:</div>
                    <input type = "text" value = {this.state.emailAddress} onChange = {this.handleChangeEmailAddress}/>
                    <button>Submit</button>
                </form>

                <ul>
                    {/* {this.state.newState.map((item) => {
                        return(
                            <li>{item}</li>
                        )
                    })} */}
                    <li>First Name: {this.state.newState[0]}</li>
                    <li>LastName Name: {this.state.newState[1]}</li>
                    <li>Email Address: {this.state.newState[2]}</li>
                </ul>
            </div>
        )
    }
}

export default LastName