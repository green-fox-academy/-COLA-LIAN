var myMap = new Map();


myMap.set(97,"a");
myMap.set(98,"b");
myMap.set(99,"c");
myMap.set(65,"A");
myMap.set(66,"B");
myMap.set(67,"C");
console.info(myMap);

//Print all the keys
console.log(myMap.keys());

//Print all the values
console.info(myMap.values());

//Add value D with the key 68
myMap.set(68,"D");

//Print how many key-value pairs are in the map
console.info(myMap.size);

//Print the value that is associated with key 99
console.info(myMap.get(99));

//Remove the key-value pair where with key 97
myMap.delete(97);
console.info(myMap);

//Print whether there is an associated value with key 100 or not
console.info(Boolean(myMap.get(100)));

//Remove all the key-value pairs
myMap.clear()
console.info(myMap);