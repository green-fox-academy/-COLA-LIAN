import {MyNode} from './MyNode'

interface Stack {
    empty(): boolean;
    peek(): string;
    push(value: string): void;
    pop(): string;
  }


class Stack2 implements Stack{
    root: MyNode

    setRoot(root:MyNode){
        this.root = root;
    }

    empty():boolean{
        if(this.root = null){
            return true
        }else{
            return false
        }
    }

    push(value: string): void{
        let newNode = new MyNode();
        let current = this.root;

        while(current.next != null){
        current = current.getNext();
         }
        newNode.setData(value);
        current.next.setNext(newNode);
    }

    pop(): string{
        let current = this.root;
        while(current.next != null){
            current = current.getNext();
        }
        let str = current.getData()
        current.before.next = null;
        return str
    }

    peek(): string{
        if(this.root != null){
            return this.root.getData()
        }else{
            return "This stack is empty"
        }
    }
}

export{Stack2} 