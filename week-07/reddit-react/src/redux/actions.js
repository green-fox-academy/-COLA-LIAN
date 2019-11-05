const LIST_ACTION ='LIST_ACTION'

function listAction(){
    return async function(dispatch){
        const result = await fetch('http://localhost:3002/posts');
        const data = await result.json();
        dispatch({
            type: "LIST_ACTION",
            title: data.title,
        })
    }
}



export{
    listAction,
    LIST_ACTION
}