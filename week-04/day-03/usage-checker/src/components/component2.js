import React from 'react';

class component2 extends React.Component{
    constructor(props){
        super(props);
        this.state={time:0}
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        this.setState({time:performance.now()/1000});
        console.log(this.state.time);
    }

    render(){
        return(
        <tr>
            <td>Cola</td>
            <td>{this.state.time}s</td>
        </tr>
        )
    }
    
}

export default component2