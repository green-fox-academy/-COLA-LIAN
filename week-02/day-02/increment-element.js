'use strict';

// - Create a variable named `t` with the following content: `[1, 2, 3, 4, 5]`
// - Increment the third element simply by accessing it
// - Log the third element to the console

var t = [1, 2, 3, 4, 5];

t.splice(3,0,3);
console.log(t);
console.log(t[3]);