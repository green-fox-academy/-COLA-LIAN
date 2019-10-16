import React from 'react';
import Component1 from './components/component1'
import Component2 from './components/component2';
import Table from './components/table';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

  const style = {
    borderCollapse: 'collapse',
    marginLeft: '30vw',
    marginTop: '20vh',
  }

  class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {usages:[{name: 'component 1', time: '10s'}]}
      this.addRow =  this.addRow.bind(this);
  }

  addRow(componentName, lifeTime){
      this.setState({
        usages:[...this.state.usages,{name: componentName, time: lifeTime}]
      })
      console.log(this.state);
  }
  


  render(){
    return (
    <div>  
      {/* <table style={style} usage={this.state.usage} border='1'>      
          <tr >
            <th>Component </th>
            <th>Time </th>
          </tr>            
      </table>  */}
      <Table usages={this.state.usages}/>
        <Router>
          <Route path='/1'>
              <Component1 add={this.addRow} />
          </Route>
          <Route path='/2'>
              <Component2 add={this.addRow} />
          </Route>
        </Router>  
    </div>    
  )
}
  
}

export default App;
