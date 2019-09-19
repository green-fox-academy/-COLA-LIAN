// Create a Station and a Car classes
// Station:
//  gasAmount
//  refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
// Car:
//  gasAmount
//  capacity
//  create constructor for Car where:
//    initialize gasAmount -> 0
//    initialize capacity -> 100

class Station{
    constructor(gasAmount){
        this.gasAmount = gasAmount;
    }

    refill(Car){
        this.gasAmount = this.gasAmount - Car.capacity;
        Car.gasAmount = Car.capacity;
        Car.capacity = 0;
        console.log(this.gasAmount);
        console.log(Car.gasAmount);
        console.log(Car.capacity);
    }
}

class Car{
    constructor(gasAmount,capacity){
        this.gasAmount = gasAmount;
        this.capacity = capacity;
    }
}

let car = new Car(0, 100);
console.log(car);
let station = new Station(500);
station.refill(car);

