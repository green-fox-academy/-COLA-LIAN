import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import counterReducer from './reduxConstruction/counterReducer';
import tagReducer from './reduxConstruction/tagReducer';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({counter:counterReducer, tags: tagReducer});
const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(<Provider store = {store}> <App /> </Provider>, document.getElementById('root'));



