import React from 'react';
import './App.css';

class Component extends React.Component{
    constructor(props){
        super(props);
        this.state = {userName: '', emailAddress:'', password: '', newState:[]};
        this.handleSubmmit =  this.handleSubmmit.bind(this);

        this.handleChangeUserName =  this.handleChangeUserName.bind(this);
        this.handleChangeEmailAddress =  this.handleChangeEmailAddress.bind(this);
        this.handleChangePassword =  this.handleChangePassword.bind(this);
    }

    handleSubmmit(event){
        event.preventDefault();

        if(this.state.userName !== ''){
             if(this.state.emailAddress.search("@")  !== -1){
                 if(this.state.password.length >= 8){
                    this.setState({ userName: this.state.userName,
                                    emailAddress:this.state.emailAddress,
                                    password:this.state.password});
                        
                    console.log(`{  username: ${this.state.userName} ,
                                    emailAddress: ${this.state.emailAddress},
                                    password: ${this.state.password}}`);
                 }else{
                    alert('Password must be at least 8 characters.');
                 }
            }else{
                alert(`Email address must contain '@' symbol.`);
            }
        }else{
            alert('Username must not be empty.');
        }
       

        
                        
        this.state.newState = [this.state.userName, this.state.emailAddress, this.state.password];
    }

    handleChangeUserName(event){
        this.setState({userName: event.target.value});
    }
    handleChangeEmailAddress(event){
        // if(event.target.value.search("@") == -1)       
        this.setState({emailAddress: event.target.value});
    }
    handleChangePassword(event){
        this.setState({password: event.target.value})
    }

    render(){
        return(
            <div className = "frame">
                <h1>User Register</h1>

                <form onSubmit={this.handleSubmmit}>
                    <div>userName:</div>
                    <input type = "text" value = {this.state.userName} onChange = {this.handleChangeUserName}/>
                    <div>emailAddress:</div>
                    <input type = "text" value = {this.state.emailAddress} onChange = {this.handleChangeEmailAddress}/>
                    <div>Password:</div>
                    <input type = "text" value = {this.state.password} onChange = {this.handleChangePassword}/>
                    <p><button>Submit</button></p>
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

export default Component