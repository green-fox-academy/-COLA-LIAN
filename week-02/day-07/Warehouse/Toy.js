const Item = require('./Item')

class Toy extends Item{
    constructor(name = 1, price = 1, color){
        super(name, price);
        this.color = color;
    }
    print(){
        console.log(`${this.color} ${this.name} - ${this.price}`);
    }
}

module.exports = Toy
