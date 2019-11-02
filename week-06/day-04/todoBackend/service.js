// let data = require('./data');
const todos ={ todos: [
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
}

exports.deleteTodo = function deleteTodo(id){
    let oldLength = todos.length;
    todos = todos.filter(item => item.id != req.params.id);
    let newLength = todos.length;
    return newLength === oldLength ? 404 : 204
}