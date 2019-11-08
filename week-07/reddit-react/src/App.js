import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Header from './components/header';
import Submit from './components/submit';
import Home from './components/home';

function App() {
  return (
    <Router>
      <div className="bgd">
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/newSubmit" component={Submit} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
