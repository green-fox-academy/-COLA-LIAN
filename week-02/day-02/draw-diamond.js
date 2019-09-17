'use strict';

const lineCount = 7;



// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

for(var i = 1; i <=lineCount;i++){
    // console.log(lineCount-i);
    // console.log((2*i-1));
        var x;
        x =" ".repeat(lineCount-i)+ "*".repeat((2*i-1))+" ".repeat(lineCount-i);
        console.log(x)
    }

    for(var j = lineCount; j>0; j--){
        // console.log(lineCount-i);
        // console.log((2*i-1));
            var x;
            x =" ".repeat(lineCount-j)+ "*".repeat((2*j-1))+" ".repeat(lineCount-j);
            console.log(x)
        }