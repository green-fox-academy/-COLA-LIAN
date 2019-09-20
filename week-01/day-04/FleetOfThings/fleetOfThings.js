'use strict';

const Thing = require('./thing');
const Fleet = require('./fleet');

class FleetOfThings{

//    constructor(fleet){
//        this.fleet = fleet;
//    }
    main(){
        this.fleet = new Fleet();
        let thing1 = new Thing("Get milk");
        let thing2 = new Thing("Remove the obstacles");
        let thing3 = new Thing("Stand up");
        thing3.complete();
        let thing4 = new Thing("Eat lunch");
        thing4.complete();

        this.fleet.add(thing1);
        this.fleet.add(thing2);
        this.fleet.add(thing3);
        this.fleet.add(thing4);
        console.log(this.fleet.things);
        // console.log(this.fleet.things[2].getName());
    }

   print(){

       for(var i=0; i<this.fleet.getThings().length; i++){
        if(this.fleet.getThings()[i].getCompleted()== true){
            console.log("[x]"+this.fleet.getThings()[i].getName());
        }else{
            console.log("[ ]"+this.fleet.getThings()[i].getName());
        } 
    }     
}
}

let fleetOfThings = new FleetOfThings();
fleetOfThings.main();
fleetOfThings.print();


// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well