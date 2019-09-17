'use strict';

// - Create a function called `factorio`
//   that returns it's input's factorial

function factorio(x){
   var n = 1;
    for(var i=1; i<=x; i++){      
        n = i * n;
        
    }
    return n;
}

console.info(factorio(1));
console.info(factorio(2));
console.info(factorio(3));
console.info(factorio(4));
console.info(factorio(5));


