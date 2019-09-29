class Garden{
    constructor(width, length){
        this.length =  length;
        this.width = width;
    }

    area(){
        let area = (this.length*this.width)
        return area
    }

    circumference(){
        let circumference = 2*(this.length + this.width);
        return circumference
    }
    
    efficiency(){
        let efficiency = this.area()/this.circumference()
        return efficiency
    }

}
// let garden = new Garden(5,3);
// console.log(garden.area());
// console.log(garden.circumference());
// console.log(garden.efficiency());



module.exports = Garden;