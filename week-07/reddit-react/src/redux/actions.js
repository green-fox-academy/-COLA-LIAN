const LIST_ACTION ='LIST_ACTION'

function listAction(){
    return async function(dispatch){
        const result = await fetch('http://localhost:3006/posts');
        const data = await result.json();
    
        console.log(data.posts)
        dispatch({
            type: LIST_ACTION,
            lists: data.posts
        })
    }
}

export{
    listAction,
    LIST_ACTION
}