class Item{
    constructor(name = 1, price = 1){
        this.name = name;
        this.price = price;
    }
    print(){
        console.log(`${this.name} - ${this.price}`);
    }
}

module.exports = Item
