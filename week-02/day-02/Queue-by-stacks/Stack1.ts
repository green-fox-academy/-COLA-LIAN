interface Stack {
  empty(): boolean;
  peek(): string;
  push(value: string): void;
  pop(): string;
}

class Stack1 implements Stack{
   array: string[];
    size: number;

    constructor(){
        this.array = [];
    }

    getSize(){
        this.size = this.array.length;
        return this.size
    }

    empty(): boolean{
        if (this.array == []){
            return true
        }else{
            return false
        }    
    }

    push(value:string):void{
        this.array.push(value);
        // console.log(this.array);
    }
    
    pop(): string{
    return this.array.pop()
    }

    peek(): string{
       return this.array[this.array.length-1];
    }
}


export{Stack, Stack1}