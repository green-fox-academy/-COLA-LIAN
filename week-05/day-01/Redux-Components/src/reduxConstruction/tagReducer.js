// import tagState from "../components/tagState";

const tagState = ['blue', 'bold', 'hipster'];

function tagReducer(state = tagState, action){   
    switch (action.type) { 
        case 'ADD_TAG':
            if(!state.includes(action.tag)){
                return [...state, action.tag] 
            }else{
                return state
            }
            
        case 'REMOVE_TAG':             
            if(state.includes(action.tag)){
                state.splice(state.indexOf(action.tag),1);
            }
            return state

        case 'REMOVE_TAGS':
            state.tags = [];
            return []
    }
    return state
}

export default tagReducer