// import tagState from "../components/tagState";

const tagState = ['blue', 'bold', 'hipster'];

function tagReducer(state = tagState, action){
    let tagList = state;
    switch (action.type) { 
        case 'ADD_TAG':
            if(!state.includes(action.tag)){
                return [...state, action.tag] 
            }else{
                return state
            }
            
        case 'REMOVE_TAG':             
            if(state.includes(action.tag)){
                let newTags = tagList.filter(item => item !== action.tag)
                return newTags
            }
            return state

        case 'REMOVE_TAGS':
            return []
    }
    return state
}

export default tagReducer