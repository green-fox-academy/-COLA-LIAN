var myMap = new Map();

myMap.set('Eggs',200);
myMap.set('Milk',200);
myMap.set('Fish',400);
myMap.set('Apples',150);
myMap.set('Bread',50);
myMap.set('Chicken',550);
console.info(myMap);

// Create an application which solves the following problems.


function x(myMap){
    // How much is the fish?
    console.info('Price of fish:'+myMap.get('Fish'));


    // What is the most expensive product?
    var max = 0;
    var product1;
    for(let pair of myMap){
        if (pair[1]>max){
            max = pair[1];
            product1 = pair[0];
        }else{
            continue
        }
    }
    console.info('The most esxpensive product:'+product1);


    // What is the average price?
    var average = 0;
    for(let pair of myMap){
        average = average + pair[1];
    }
    average =average/myMap.size;
    console.info('The average price:'+average);

    // How many products' price is below 300?
    var up = 0;
    for(let pair of myMap){
        if (pair[1]<300){
            up = up + 1;
        }else{
            continue
        }
    }
    console.info(up+'products');

    // Is there anything we can buy for exactly 125?
    
        if (Boolean(myMap.get(125))){
        console.info('Yes!');
        }else{
         console.info('No');
         }
    
    // What is the cheapest product?
    var min = 10000000;
    var product2;
    for(let pair of myMap){
        if (pair[1] < min){
            min = pair[1];
            product2 = pair[0];
        }else{
            continue
        }
    }
    console.info('The cheapest product:'+product2);

}

x(myMap);