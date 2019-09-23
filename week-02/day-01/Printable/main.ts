import Printable from './Printable'
import {Domino} from './Domino'
import {Todo} from './Todo'

let dominoes = [];
let todos = [];
dominoes.push(new Domino(5,2));
dominoes.push(new Domino(4,6));
dominoes.push(new Domino(1,5));
dominoes.push(new Domino(2,4));
dominoes.push(new Domino(7,1));

todos.push(new Todo('brushTeeth','breakfast'));
todos.push(new Todo('brushTeeth','lunch'));
todos.push(new Todo('brushTeeth','dinner'));


for (let domino of dominoes) {
    domino.printAllFields();
  }
  
for (let todo of todos) {
    todo.printAllFields();
  }