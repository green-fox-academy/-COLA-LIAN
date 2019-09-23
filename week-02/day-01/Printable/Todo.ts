import Printable from './Printable'
class Todo implements Printable{
    things : string[];
    constructor(thing1:string, thing2:string){
        this.things = [thing1, thing2];
    }

    printAllFields(): string{
        console.log(`[${this.things[0]}, ${this.things[1]}]`);
        return `[${this.things[0]}, ${this.things[1]}]`
      }
}

export{Todo}