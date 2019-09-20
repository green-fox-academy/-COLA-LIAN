var myMap = new Map();

myMap.set('978-1-60309-452-8',"A Letter to Jo");
myMap.set('978-1-60309-459-7',"Lupus");
myMap.set('978-1-60309-444-3',"Red Panda and Moon Bear");
myMap.set('6978-1-60309-461-0',"The Lab");

//Print all the key-value pairs in the following format
// A Letter to Jo (ISBN: 978-1-60309-452-8)
// Lupus (ISBN: 978-1-60309-459-7)
// Red Panda and Moon Bear (ISBN: 978-1-60309-444-3)
// The Lab (ISBN: 978-1-60309-461-0)

function Print(Map){
for(let pair of Map){
    console.info(pair[1]+"(ISBN:"+pair[0]+")");
}
}
Print(myMap);

// // Remove the key-value pair with key 978-1-60309-444-3
myMap.delete(978-1-60309-444-3);

// // Remove the key-value pair with value The Lab
for(let pair of myMap){
    if (pair[1] == "The Lab"){
        myMap.delete(pair[0]);
        break
    }else{
        continue
    }
}
console.info(myMap);

// // Add key-value pairs to the map
myMap.set('978-1-60309-450-4',"They Called Us Enemy");
myMap.set('978-1-60309-453-5',"Why Did We Trust Him?");

// Print whether there is an associated value with key 478-0-61159-424-8 or not
console.info(Boolean(myMap.get(478-0-61159-424-8)));
console.info(myMap.has(478-0-61159-424-8));

// Print the value associated with key 978-1-60309-453-5
console.info(myMap.get(978-1-60309-453-5));

