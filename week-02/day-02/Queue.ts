interface Queue {
    empty(): boolean;
    peek(): string;
    add(value: string): void;
    remove(): string;
  }

class Queue1 implements Queue {
    array:string[];
    constructor(array:string[]) {
        this.array = array;
    }

    empty(): boolean{
        if (this.array == []){
            return true
        }else{
            return false
        }    
    }

    peek(): string{
        return this.array[this.array.length-1];
     }

    add(value:string): void{
        this.array.push();
        console.log(this.array);
    }

    remove(): string{
        let str = this.array[0];
        this.array.splice(0,1);
        console.log(this.array);
        return str
    }
} 

let array = ["x", "y", "z", "a", "b"];
let queue1 = new Queue1(array);

console.log(queue1.empty());
queue1.add("Hi, typescript!");
console.log(queue1.remove());
console.log(queue1.peek());