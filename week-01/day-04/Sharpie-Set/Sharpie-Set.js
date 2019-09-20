const Sharpie = require('./Sharpie');

// Reuse your Sharpie class
// Create SharpieSet class:
//  it contains a list of Sharpie
//  countUsable() -> sharpie is usable if it has ink in it
//  removeTrash() -> removes all unusable sharpies

class SharpieSet{
    constructor(set){
        this.set = [];
    }

    main(Sharpie){
        this.set.push(Sharpie);
    }
    get(){
        return this.set;
    }

    countUsable(){
        for(var i=0; i<this.get().length; i++){

            if(this.get()[i].inkAmount>0){
            console.log("The "+this.get()[i].color+" sharpie is usable.");
        }else if(this.get()[i].inkAmount == 0){
            console.log("The "+this.get()[i].color+" sharpie is unusable.");
        }

     } 
    }
    removeTrash(){
        for(var i=0; i<this.get().length; i++){
        if(this.get()[i].inkAmount==0){
            delete this.get()[i];
        }else if(this.get()[i].inkAmount > 0){
            continue
        }
     } 
    console.log(this.get());
     return this.get();
    }
}


let pink = new Sharpie("pink",1.5,3.55);
let black = new Sharpie("black",1.7, 0);
let red = new Sharpie("red",1.3,0.99);
let sharpieSet = new SharpieSet();

sharpieSet.main(pink);
sharpieSet.main(black);
sharpieSet.main(red);

console.log("--------------sharpieSet---------------");
console.log(sharpieSet.get());

console.log("--------------countUsable---------------");
sharpieSet.countUsable();

console.log("--------------removeTrash---------------");
sharpieSet.removeTrash();