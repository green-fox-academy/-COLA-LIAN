import React from 'react';
import Component1 from './components/component1'
import Component2 from './components/component2';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const style = {
  borderCollapse: 'collapse',
  marginLeft: '30vw',
  marginTop: '20vh',
}

function App() {
  return (
    <div> 
      <Router>
      <table style={style} border='1'>      
          <tr >
            <th>Component </th>
            <th>Time </th>
          </tr>     
          <Switch>
           <Route path='/1'>
                <Component1/>
            </Route>
            <Route path='/2'>
                <Component2/>
            </Route>
          </Switch>      
      </table> 
    </Router>  
    </div>
  );
}

export default App;
