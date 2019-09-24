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
    stack2: Stack2;

    constructor(stack1: Stack1){
       while(this.stack1.peek() != null){
           this.stack2.push(this.stack1.pop());
       }
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
