var priceList = new Map();
priceList.set('Milk',1.07);
priceList.set('Rice',1.59);
priceList.set('Eggs',3.14);
priceList.set('Cheese',12.60);
priceList.set('Chicken Breasts',9.40);
priceList.set('Apples',2.31);
priceList.set('Tomato',2.58);
priceList.set('Potato',1.75);
priceList.set('Onion',1.10);


var AliceList = new Map();
AliceList.set('Rice',1);
AliceList.set('Eggs',5);
AliceList.set('Chicken Breasts',2);
AliceList.set('Apples',1);
AliceList.set('Tomato',10);



var BobList = new Map();
BobList.set('Rice',2);
BobList.set('Eggs',2);
BobList.set('Chicken Breasts',4);
BobList.set('Apples',1);
BobList.set('Tomato',2);
BobList.set('Milk',3);
BobList.set('Cheese',1);
BobList.set('Potato',1);

    // How much does Bob pay?
    var BobSum = 0;
    for(let pair of BobList){
        BobSum = BobSum + priceList.get(pair[0])*BobList.get(pair[0]);
    }
    console.log('Bob pays:'+ BobSum);
    

    // How much does Alice pay?
    var AliceSum = 0;
    for(let pair of AliceList){
        AliceSum = AliceSum + priceList.get(pair[0])*AliceList.get(pair[0]);
    }
    console.log('Alice pays:'+ AliceSum);


    // Who buys more Rice?
if(BobList.get('Rice')>AliceList.get('Rice')){
    console.log('Bob buys more rice.');
}else{
    console.log('Alice buys more rice.');
}


    // Who buys more Potato?
    if(BobList.get('Potato')>AliceList.get('Potato')){
        console.log('Bob buys more potato.');
    }else{
        console.log('Alice buys more potato.');
    }

    // Who buys more different products?
    if(BobList.size>AliceList.size){
        console.log('Bob buys more different products.');
    }else{
        console.log('Alice buys more different products.');
    }

    // Who buys more products? (piece)
    var BobItems = 0;
    for(let pair of BobList){
        BobItems = pair[1]+ BobItems;
    }
    console.log(BobItems);

    var AliceItems = 0;
    for(let pair of AliceList){
        AliceItems = pair[1]+ AliceItems;
    }
    console.log(AliceItems);

    if(BobItems>AliceItems){
        console.log('Bob buys more products?');
    }else{
        console.log('Alice buys more products.');
    }