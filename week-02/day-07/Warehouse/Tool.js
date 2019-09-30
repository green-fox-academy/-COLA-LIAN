const Item = require('./Item')

class Tool extends Item{
    constructor(name = 1, price = 1){
        super(name, price);
        this.condition = 'good';
    }
    print(){
        console.log(`${this.condition} ${this.name} - ${this.price}`);
    }
}

module.exports = Tool