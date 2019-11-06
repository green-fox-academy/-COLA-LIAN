// import { combineReducers } from 'redux';
import {LIST_ACTION} from './actions'
import {UP_VOTE} from './actions'
import {DOWN_VOTE} from './actions'

// const initState = {
//     lists: [],
//     upItem: [],
//     downItem: []
// }

const initState = {
    lists: []
}

export default function(state = initState, action){
    if(action.type === LIST_ACTION){        
        return {
            ...state,
            lists: [...state.lists, ...action.lists]
        }

    }else if(action.type === UP_VOTE){
        let tempList=[...state.lists];

        tempList.splice(action.upItem.id-1, 1, {
            ...action.upItem
        })

        // = state.lists.map(article => {
        //     if(article.id == action.upItem.id){
        //         article = {
        //             ...action.upItem
        //         }

        //     }
        //     return article
        // })
        // tempList[action.upItem.id-1].score = action.upItem.score;
        // console.log(tempList[action.upItem.id-1]);

        return {
            ...state,
            lists: [...tempList]
        }

    }else if(action.type === DOWN_VOTE){
        let tempList=[...state.lists];
        tempList[action.upItem.id-1].score = action.upItem.score;

        return {
            ...state,
            lists: [...tempList]
        }
    }

    return state;
}

// export default function(state = initState, action){
//     if(action.type === LIST_ACTION){        
//         return {
//             ...state,
//             lists: [...state.lists, ...action.lists]
//         }

//     }else if(action.type === UP_VOTE){
//         return {
//             ...state,
//             upItem: [...state.upItem, action.upItem]
//         }

//     }else if(action.type === DOWN_VOTE){
//         return {
//             ...state,
//             downItem: [...state.downItem, action.downItem]
//         }
//     }

//     return state;
// }

