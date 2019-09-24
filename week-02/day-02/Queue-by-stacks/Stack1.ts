interface Stack {
  empty(): boolean;
  peek(): string;
  push(value: string): void;
  pop(): string;
}

class Stack1 implements Stack{
   array: string[];

    setStack(array:string[]){
        this.array = array;
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
        console.log(this.array);
    }
    pop(): string{
    return this.array.pop()
    }

    peek(): string{
       return this.array[this.array.length-1];
    }
}


export{Stack, Stack1}