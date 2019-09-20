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
        // console.log(this.moisture);
        this.moisture = this.moisture + coefficient * number;
        // console.log(this.moisture);
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
        this.moisture = this.moisture + coefficient*number;
        //  console.log(this.moisture);
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
        var thirstFlower = 0;
        for(var i = 0; i < this.flowers.length; i++){
            if(this.flowers[i].moisture < 5){
                thirstFlower = thirstFlower + 1 ;
            }else{
                continue
            }
        }
        return thirstFlower
    }
    thirstTree(){
        var thirstTree = 0;
        for(var i = 0; i < this.trees.length; i++){
            if(this.trees[i].moisture < 10){
                thirstTree = thirstTree + 1;
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
        var x = number/(this.thirstFlower() + this.thirstTree());
        
        for(var i = 0; i < this.flowers.length; i++){
            if(this.flowers[i].moisture < 5){
                this.flowers[i].watered(x);
                this.flowers[i].waterAmount();
            }else{
                this.flowers[i].waterAmount();
            } 
        }

        for(var i = 0; i < this.trees.length; i++){
            if(this.trees[i].moisture < 10){
                this.trees[i].watered(x);
                this.trees[i].waterAmount();
            }else{
                this.trees[i].waterAmount();
            }
            
        }
        
       
    }

}

let blue = new Flower("blue",2);
let yellow = new Flower("yellow",4);
let purple =  new Tree("purple",6);
let orange =  new Tree("orange",6);

console.log("--------Show garden--------")
let garden = new Garden();
garden.addFlower(yellow);
garden.addFlower(blue);
garden.addTree(purple);
garden.addTree(orange);
garden.main();

console.log("--------Watering with 40-------");
garden.watering(40);
console.log("--------Watering with 70-------");
garden.watering(70);

console.log(purple.moisture);
console.log(orange.moisture);