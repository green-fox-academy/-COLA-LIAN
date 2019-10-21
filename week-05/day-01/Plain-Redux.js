const redux = require('redux');

// //action creator
// function increase(){
//     return {
//         type:'INCREASE', 
//         amount: number,
//       }
// }

// function decrease( number = 1){
//     return {
//         type:'DECREASE', 
//         amount: number,
//       }
// }

// function set(number){
//     return {
//         type:'SET', 
//         amount: number,
//       }
// }

// function reset(){
//     return {
//         type:'RESET', 
//       }
// }


//reducer
const initState = {
    counter: 0,
    tags: [],
}

function counter(state = initState, action){   
    switch (action.type) { 
        case 'INCREASE':
            if(action.amount === undefined){
                return {
                    ...state,
                    counter: state.counter + 1,
                } 
            }else{
                return {
                    ...state,
                    counter: state.counter + action.amount,
                } 
            }

        case 'DECREASE':
            if(action.amount === undefined){
                return {
                    ...state,
                    counter: state.counter - 1,
                } 
            }else{
                return {
                    ...state,
                    counter: state.counter - action.amount,
                } 
            }

        case 'SET':
            return {
                ...state,
                counter: action.amount,
            }
        case 'RESET':
            return {
                ...state,
                counter: 0,
            }

        case 'ADD_TAG':
            state.tags.push(action.tag);
            return {
                ...state,
            }
        case 'REMOVE_TAG':
            state.tags.splice(state.tags.indexOf(action.tag),1);
            return {
                ...state,  
            }
        case 'REMOVE_TAGS':
            state.tags = [];
            return {
                ...state,  
            }
    }
    return state;
}


//store
let store = redux.createStore(counter);
store.subscribe(() => console.log(store.getState()));


store.dispatch({type: 'SET', amount: 6});
store.dispatch({type: 'INCREASE'});
store.dispatch({type: 'INCREASE', amount: 2});
store.dispatch({type: 'RESET'});
store.dispatch({type: 'INCREASE'});
store.dispatch({type: 'DECREASE', amount: 4});


store.dispatch({type: 'ADD_TAG', tag: 'blue'});
store.dispatch({type: 'ADD_TAG', tag: 'bold'});
store.dispatch({type: 'ADD_TAG', tag: 'hipster'});
store.dispatch({type: 'REMOVE_TAG', tag: 'blue'});
store.dispatch({type: 'ADD_TAG', tag: 'bold'});
store.dispatch({type: 'REMOVE_TAGS'});