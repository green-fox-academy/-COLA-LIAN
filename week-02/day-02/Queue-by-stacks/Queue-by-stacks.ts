import {Stack, Stack1} from './Stack1'
import {Stack2} from './Stack2'
import {Queue} from './Queue'
import { MyNode } from './MyNode';

// interface Queue {
//     empty(): boolean;
//     peek(): string;
//     add(value: string): void;
//     remove(): string;
//   }


class MyQueue implements Queue{
    stack1: Stack1;
    stack2: Stack1;

    // constructor(stack1: Stack1){
    //     let tempStack = stack1;

    //    while(tempStack.peek() != null){
    //        this.stack2.push(tempStack.pop());
    //    }
    // }

    reconstructor(stack:Stack1){
        let tempStack = stack;

       while(tempStack.peek() != null){
           this.stack2.push(tempStack.pop());
       }
       return this.stack2
    }

    empty(): boolean{
        return this.stack1.empty()
    }

    peek(): string{
        return this.stack1.peek()
    }

    add(value: string): void{
        this.stack1.push(value);
    }

    remove(): string{
       return this.stack2.pop();
    }

}

let array = ["1","2","3","4","5"];
let stack = new Stack1();
stack.setStack(array);


let queue = new MyQueue();
queue.reconstructor(stack);