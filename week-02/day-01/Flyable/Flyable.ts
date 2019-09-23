import{Mammal, Reptile, Animal} from './Animal'
// Create a Flyable interface
//  it should have land, fly and takeOff methods
// Create an abstract Vehicle class
//  it should have at least 3 fields
// Extend Helicopter class from Vehicle
//  implement your Flyable interface
// Extend Bird from your abstract Animal class (zoo exercise)
//  implement your Flyable interface

interface Flyable{
    land(): void;
    fly(): string;
    takeOff():boolean;
}

abstract class Vehicle{
    typeName: string;
    brand: string;
    wheels: number;
    
    constructor(typeName:string, brand: string, wheels:number){
        this.brand = brand;
        this.typeName = typeName;
        this.wheels = wheels;
    }
}

class Helicopter extends Vehicle implements Flyable{
    constructor(brand: string, wheels: number) {
        super('Helicopter',brand, wheels)
    }
    
fly(): string{
    return `The ${this.typeName} is flyable.`
}
land(): void {
    console.log(`The ${this.typeName} is landable.`);
}
takeOff():boolean{
    return true
}

}


class Bird extends Animal implements Flyable{ 
    constructor(name: string){
        super(name,1);
    }
    getAge():number{
        return this.age
    }
    getName():string{
       return this.name
    }
    getFur(): boolean{
        return true
    }
    breed(): string{
        return 'laying eggs'
    }
    morph():boolean{
        return true
    }


    fly(): string{
        return `The ${this.name} is flyable.`
    }
    land(): void {
        console.log(`The ${this.name} is landable.`);
    }
    takeOff():boolean{
        return true
    }
}


let helicopter = new Helicopter("Benz", 4);
console.log(helicopter.typeName);
console.log(helicopter.brand);
console.log(helicopter.wheels);
console.log(helicopter.fly());
console.log(helicopter.takeOff());
helicopter.land();


let parrot = new Bird('parrot');
console.log(parrot.fly());
console.log(parrot.takeOff());
parrot.land();