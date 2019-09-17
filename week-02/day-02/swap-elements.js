'use strict';

// - Create a variable named `abc` with the following content: `['Arthur', 'Boe', 'Chloe']`
// - Swap the first and the third element of `abc`

var abc = ['Arthur', 'Boe', 'Chloe'];

abc.splice(0,1);
abc.splice(1,2);
//abc = abc.remove('Arthur');
// abc.splice(0,1);
console.log(abc);