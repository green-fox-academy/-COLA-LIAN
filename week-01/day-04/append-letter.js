'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

let far = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

function appendA(x){

for(var i = 0; i<x.length; i++){

    x[i] = x[i].concat("a");
  
}
    return x
}


console.log(appendA(far));
module.exports = appendA;