import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Hello from "./component/helloWorld";
import Error from "./component/error";
import ErrorCode from "./component/errorCode";
import NotImple from "./component/notImple";


function App() {
  return(
    <div>
    <Router>
      <Switch>
        <Route exact path='/' component={Hello}></Route>
        <Route exact path='/error' component={Error}></Route>
        <Route path='/error/:id' component={ErrorCode}></Route>
        <Route path='/:id'component={NotImple}></Route>
      </Switch>
    </Router>
    </div>
  );
}


export default App;