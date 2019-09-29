let Garden =  require('./Garden');

class Playground extends Garden(){
    
    constructor(length, width){
        super(length, width);
        this.toys = new Array();
    }

    add(toy){
        this.toys.push(toy);
    }

}