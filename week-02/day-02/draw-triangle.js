'use strict';

const lineCount = 4;
var str = '';
//console.log(str);

for(var i = 1; i <= lineCount; i++){
    str = str.concat('*');
    console.log(str);
}

// Write a program that draws a
// triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is