// import { combineReducers } from 'redux';
import {LIST_ACTION} from './actions'

const initState = {
    lists: []
}

export default function(state = initState, action){
    if(action.type === LIST_ACTION){        
        return {
            lists: [...state.lists, ...action.lists]
        }
    }
    return state;
}

