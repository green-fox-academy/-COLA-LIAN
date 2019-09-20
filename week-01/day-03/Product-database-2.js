// Create a map with the following key-value pairs.
var myMap = new Map();

myMap.set('Eggs',200);
myMap.set('Milk',200);
myMap.set('Fish',400);
myMap.set('Apples',150);
myMap.set('Bread',50);
myMap.set('Chicken',550);

function x(myMap){

//Which products cost less than 201? (just the name)
    for(let pair of myMap){

    if(pair[1]<201){
    console.log(pair[0]+" costs less than 201.");
    }else{
        continue
    }

}

    //Which products cost more than 150? (name + price)
    for(let pair of myMap){

        if(pair[1]>150){
        console.log(pair[0]+" costs more than 150.");
        }else{
            continue
        }
    
    }
}

x(myMap);

