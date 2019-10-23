function counterReducer(state = 0, action){   

    switch (action.type) { 
        case 'INCREASE':
            // return state + 1
            if(action.amount === undefined){
                return state + 1
            }else{
                return {
                    ...state,
                    counter: state.counter + action.amount,
                } 
            }
                
        case 'DECREASE':
            return state - 1
            
        case 'SET':
            return action.amount
            
        case 'RESET':
            return 0
    }
    return state
}


export default counterReducer;