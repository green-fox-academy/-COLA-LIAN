class Plants{
    constructor(color,moisture,waterShortage){
        this.color = color;
        this.moisture = moisture;
        this.waterShortage = false;
    }
}

class Flower extends Plants {
    constructor(color,moisture,waterShortage){
       super(color,moisture,waterShortage);
    }
    waterAmount(){
        if(this.moisture < 5){
            this.waterShortage = true;
            console.log("The "+this.color+" flower needs water.");
            return this.waterShortage
        }else{
            this.waterShortage = false;
            console.log("The "+this.color+" flower doesn't need water.");
            return this.waterShortage
        }
    }
    watered(number){
        var coefficient = 0.75;
        this.moisture = this.moisture + coefficient * number;
        console.log(this.moisture);
        return this.waterShortage;
    }
}

class Tree extends Plants{
    constructor(color,moisture,waterShortage){
        super(color,moisture,waterShortage);
    }
    waterAmount(){
        if(this.moisture < 10){
            console.log("The "+this.color+" tree needs water.");
            this.waterShortage = false;
            return this.waterShortage
        }else{
            console.log("The "+this.color+" tree doesn't need water.");
            this.waterShortage = true;
            return this.waterShortage
        }
    }
    watered(number){
        var coefficient = 0.4;
        this.moisture = this.moisture + coefficient * number;
        console.log(this.moisture);
        return this.waterShortage;
    }
}

// let yellow = new Tree("yellow", 2);
// yellow.waterAmount();
// yellow.watered(10);


class Garden{
    constructor(flowers, trees){ 
        this.flowers = [];
        this.trees = [];
    }

    addFlower(Flower){
        this.flowers.push(Flower);
        // Flower.waterAmount();
    }
    addTree(Tree){ 
        this.trees.push(Tree);
        // Tree.waterAmount();
    }

    
    thirstFlower(){
        var thirstFlower = [];
        for(var i=0; i<= this.flowers.length; i++){
            if(this.flowers[i].moisture<5){
                thirstFlower.push(this.flowers[i]) ;
            }else{
                continue
            }
        }
        return thirstFlower
    }



    thirstTree(){
        var thirstTree = [];
        for(var i=0; i<= this.trees.length; i++){
            if(this.trees[i].waterShortage){
                thirstTree.push(this.trees[i]);
            }else{
                continue
            }
        }
        return thirstTree
    }



    main(){
        for(var i=0; i<this.flowers.length; i++){
            this.flowers[i].waterAmount();
        }
        for(var i=0; i<this.trees.length; i++){
            this.trees[i].waterAmount();
        }
        
    }

    watering(number){
        var x = number/(this.thirstFlower().length + this.thirstTree().length);
        for(var i=0; i<this.thirstFlower().length; i++){
            this.thirstFlower()[i].watered(x);
        }
        
        for(var i=0; i<this.thirstTree().length; i++){
            this.thirstTree()[i].watered(x);
        }
    }

}

let yellow = new Flower("yellow",4);
let blue = new Flower("blue",2);
let purple =  new Tree("purple",8);
let orange =  new Tree("orange",34);
// yellow.waterAmount();
// blue.waterAmount();
// blue.waterAmount();
// orange.waterAmount();


let garden = new Garden();
garden.addFlower(yellow);
garden.addFlower(blue);
garden.addTree(purple);
garden.addTree(orange);
garden.main();

// garden.watering(40);

console.log(garden.flowers);
console.log(garden.trees);
console.log(garden.flowers[0].moisture);
garden.thirstFlower();