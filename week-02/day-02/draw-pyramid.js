'use strict';

const lineCount = 4;

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for(var i = 1; i <=lineCount;i++){

// console.log(lineCount-i);
// console.log((2*i-1));
    var x;
    x =" ".repeat(lineCount-i)+ "*".repeat((2*i-1))+" ".repeat(lineCount-i);
    console.log(x)
}

