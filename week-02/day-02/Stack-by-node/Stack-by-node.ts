import {MyNode} from './MyNode'

interface Stack {
    empty(): boolean;
    peek(): string;
    push(value: string): void;
    pop(): string;
  }


class MyStack implements Stack{
    tail: MyNode

    setTail(tail:MyNode): void{
        this.tail = tail;
    }

    empty():boolean{
        return this.tail === null
    }

    push(value: string): void{
        let newNode = new MyNode();
        newNode.setData(value);

        let current = this.tail;
        current.setNext(newNode);
        this.tail = current.next;
    }

    pop(): string{  
        let value : string;

        if(this.empty()){
            value = "This stack is empty."
        }else{
            value = this.tail.getData();
            this.tail.next = this.tail;
        }
        return value
       
    }

    peek(): string{
        let value :string;

         if(this.empty()){
             value = "This stack is empty."
         }else{  
            value = this.tail.data;
         }
         return value
    }
    
}


let tail = new MyNode();
tail.setData("Hello root!");
let myStack = new MyStack();
myStack.setTail(tail);

console.log(myStack.empty());
console.log(myStack.peek());


myStack.push("a");
myStack.push("b");
myStack.push("c");
console.log(myStack.peek());

myStack.push("How old are you?");
console.log(myStack.peek());

console.log(myStack.pop());
console.log(myStack.peek());