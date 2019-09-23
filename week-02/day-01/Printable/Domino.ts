
import Printable from './Printable'


 class Domino implements Printable{
    values: number[];
 constructor(valueA:number, valueB:number) {
    this.values = [valueA, valueB];
  }
  toString() {
    return `[${this.values[0]}|${this.values[1]}]`
  }
  printAllFields(){
    console.log(`[${this.values[0]}, ${this.values[1]}]`);
    return `[${this.values[0]}, ${this.values[1]}]`
  }
 }

// let domino = new Domino(1,2);
// console.log(domino.printAllFields());

export{Domino}