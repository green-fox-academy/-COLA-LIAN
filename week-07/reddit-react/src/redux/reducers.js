// import { combineReducers } from 'redux';
import {LIST_ACTION} from './actions'

const initState = {
    lists: [0, 0]
}

export default function(state = initState, action){
    if(action.type === LIST_ACTION){
        return{
            ...state,
            lists: [...state.lists, ...action.lists]
        }
    }



    return state
}