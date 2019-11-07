// import { combineReducers } from 'redux';
import {LIST_ACTION} from './actions'
import {UP_VOTE} from './actions'
import {DOWN_VOTE} from './actions'
import {SUBMIT} from './actions'

const initState = {
    lists: [],

}

export default function(state = initState, action){
    if(action.type === LIST_ACTION){        
        return {
            ...state,
            lists: [...state.lists, ...action.lists]
        }
    }else if(action.type === UP_VOTE){

        let tempList = state.lists.map(article => {
            if(article.id === action.upItem.id){
                article = {
                    ...action.upItem
                }
            }
            return article
        })

        return {
            ...state,
            lists: [...tempList]
        }

    }else if(action.type === DOWN_VOTE){
        let tempList = state.lists.map(article => {
            if(article.id === action.downItem.id){
                article = {
                    ...action.downItem
                }
            }
            return article
        })

        return {
            ...state,
            lists: [...tempList]
        }

    }else if(action.type === SUBMIT){
        return{
            ...state,
            lists: [...state.lists, action.submit]
        }
    }

    return state;
}



