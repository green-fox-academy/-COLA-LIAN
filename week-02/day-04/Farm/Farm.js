const Animal = require('./Animal');

// Reuse your Animal class
// Create a Farm class
//      it has list of Animals
//      it has slots which defines the number of free places for animals
//      breed() -> creates a new animal if there's place for it
//      slaughter() -> removes the least hungry animal


class Farm{
    constructor(animalSet, places){
        this.places = 3;
        this.animalSet = [];
        this.index = 0;
    }

    get(){
        return this.animalSet
    }
 
    breed(Animal){
        if(this.animalSet.length<this.places){
            this.animalSet.push(Animal);
            console.log("Welcome! New animals.")
        }else{
            console.log("Sorry, there is no more places more new animals.")
        }      
    }

    slaughter(){
        var least = 10000;
        for(var i=0; i<this.get().length; i++){
            if(this.get()[i].hunger < least){
                least = this.get()[i].hunger;
                this.index = this.animalSet.indexOf(this.get()[i]);

            }else{
                continue
            }
        }
        
        this.animalSet.splice(this.index,1);
        console.log(this.animalSet);
    }

}

let animal1 = new Animal(50,20);
let animal2 = new Animal(20,10);
let animal3 = new Animal(10,70);
let animal4 = new Animal(30,50);

let farm = new Farm();

farm.breed(animal1);
farm.breed(animal2);
farm.breed(animal3);
farm.breed(animal4);

console.log("------breed------");
console.log(farm.get());

console.log("------slaughter------");
farm.slaughter();