import {Stack, Stack1} from './Stack1'
import {Stack2} from './Stack2'
import {Queue} from './Queue'
import { MyNode } from './MyNode'


class MyQueue implements Queue{
    stack1: Stack1;
    stack2: Stack1;

    constructor(){
        this.stack1 = new Stack1();
        this.stack2 = new Stack1();
    }

    reconstructor1(){
        let tempStack = this.stack1;
        // this.stack2 = new Stack1();
       
       if(tempStack.getSize() != 0){
           this.stack2.push(tempStack.pop());
       }
    }

    reconstructor2(){
        let tempStack = this.stack2;
        // this.stack1 = new Stack1();

        while(tempStack.peek() != null){
            this.stack1.push(tempStack.pop());
        }
    }

    empty(): boolean{
        return this.stack1.empty()
    }

    peek(): string{
        return this.stack2.peek()
    }

    add(value: string): void{
        this.stack1.push(value);
        this.reconstructor1();
    }

    remove(): string{
       return this.stack2.pop();
       this.reconstructor2();
    }

}


let queue = new MyQueue();

queue.add("hello");
queue.add("a");
queue.add("b");
queue.add("c");
queue.add("d");

console.log(queue.peek());
console.log(queue.remove());

console.log(queue.peek());
console.log(queue.remove());