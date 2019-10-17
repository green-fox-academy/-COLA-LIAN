import React from 'react';

class component2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {name:'Component2', time:0}
    }

    componentWillMount(){
        this.setState({time:(new Date).getTime()});
        console.log(this.state.time); 
    } 

    componentDidMount(){
        this.props.add(this.state.name, (((new Date).getTime() - this.state.time)/1000) +'s');
        console.log(this.state.time); 
    }

    render(){
        return(
        <p>
            This is the content of Component2! 
            {/* {this.props.title} */}
        </p>
        );
    }
}

export default component2