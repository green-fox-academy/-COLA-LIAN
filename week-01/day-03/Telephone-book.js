var myMap = new Map();
myMap.set('William A. Lathan',"a405-709-1865");
myMap.set('John K. Miller',"402-247-8568");
myMap.set('Hortensia E. Foster',"	606-481-6467");
myMap.set('Amanda D. Newland',"319-243-5613");
myMap.set('Brooke P. Askew',"307-687-2982");
//console.info(myMap);

// Create an application which solves the following problems.

// What is John K. Miller's phone number?
// Whose phone number is 307-687-2982?
// Do we know Chris E. Myers' phone number?

function myMapFunction(Map){
    Map.get('John K. Miller');
   console.info('John K. Miller:'+ Map.get('John K. Miller'));

    for(let pair of Map){
        if(pair[1] == "307-687-2982"){
            console.info('Brooke P. Askew:'+pair[0]);
        }else{
            continue
        }
    }

    if(Map.has('Chris E. Myers')){
        console.info("Yes,we do know Chris E. Myers' phone number.");
    }else{
        console.info("No,we do not know Chris E. Myers' phone number.");
    }

}

myMapFunction(myMap);