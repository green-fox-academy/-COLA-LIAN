'use strict';

// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

var size = 4;
var x =[];
var str;

for(var i=1;i<=size;i++){
    for(var j=0;j<size;j++){
       x.push(0);
    }

     x[x.length-i] = 1;
     str = x.join(' ');
     console.log(str);
     x = [];

}

//console.log(x);
