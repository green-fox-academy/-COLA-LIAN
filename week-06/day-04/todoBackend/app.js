const express = require('express');
const app = express();
app.use(express.json());
// const PORT = 3000;
let PORT = (process.env.PORT || 3000);

let todos = [
    {
      id: 1,
      text: "Wake up",
      done: true
    },
    {
      id: 2,
      text: "Do some work",
      done: false
    }
]

function handleDelete(todoId) {
    let oldLength = todos.length;
    todos = todos.filter(item=> item.id != todoId); 
    todos.forEach(item => {
        if(item.id> todoId){
            item.id = item.id -1;
        }
    })
    let newLength = todos.length;

    return newLength === oldLength ? 200 : 404
}

function findTodo(todoId) {
    let todoExist = false;
    todos.forEach(item => {
        if(item.id == todoId){
            todoExist = true; 
        }
    })
    return todoExist
}


app.get('/api/todos', (req, res) => {
    res.send(JSON.stringify(todos));
})

app.post('/api/todos', (req, res) => {
   if(req.body.text){
        todos.push({
            "id":  todos.length + 1,
            "text": req.body.text,
            "done": false
        })
       res.status(200).send(JSON.stringify(todos));
   }
   else{
        res.statusCode(400).send('Text is missing!');
   }
})


app.delete('/api/todos/:id', (req, res) => {
    let resStatus = handleDelete(req.params.id);
    res.status(resStatus).send(JSON.stringify(todos));
})


app.put('/api/todos/:id', (req, res) => {
    let {content} = req.body;

    if(findTodo(req.params.id)){
        if(req.body.text){
            todos[req.params.id-1].text = req.body.text;
        }
        if(req.body.done){
            todos[req.params.id-1].done = req.body.done;
        }
        
        res.status(200).send(JSON.stringify(todos));
    }

    res.status(404).send("Cannot find the todo item.")   
})

app.listen(PORT);