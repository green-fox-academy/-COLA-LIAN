import React from 'react';
import ReactDOM from 'react-dom'
import FirstComponent from './first-component'
import SecondComponent from './second-component'
// let element = <FirstComponent />;

let element = <p>Hello React!</p>;

ReactDOM.render(element, document.getElementById('react-container'));