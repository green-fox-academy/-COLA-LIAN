const LIST_ACTION ='LIST_ACTION';
const UP_VOTE ='UP_VOTE';
const DOWN_VOTE ='DOWN_VOTE';

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

function upVoteAction(id){
    return async function(dispatch){
        const result = await fetch(`http://localhost:3006/posts/${id}/upvote`,{
            method: 'PUT'
        });
        
        const data = await result.json();
        dispatch({
            type: UP_VOTE,
            upItem: data[0]
        })
        console.log(data[0]);
    }
}

function downVoteAction(id){
    return async function(dispatch){
        const result = await fetch(`http://localhost:3006/posts/${id}/downvote`,{
            method: 'PUT'
        });
        const data = await result.json();

        
        dispatch({
            type: DOWN_VOTE,
            downItem: data[0]
        })
        console.log(data[0]);
    }
}


export{
    listAction,
    upVoteAction,
    downVoteAction,
     LIST_ACTION,
    UP_VOTE,
    DOWN_VOTE
}