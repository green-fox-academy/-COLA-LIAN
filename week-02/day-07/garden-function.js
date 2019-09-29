function garden(width, length){
    this.width = width;
    this.length = length;
}

garden.prototype.area = function(){
    return (this.width*this.length)
};

garden.prototype.circumference = function(){
    return (this.width+this.length)*2
};


garden.prototype.efficiency = function(){
    return this.area()/this.circumference()
};

let garden1 = new garden(5,3);
console.log(garden1.area());
console.log(garden1.circumference());
console.log(garden1.efficiency());