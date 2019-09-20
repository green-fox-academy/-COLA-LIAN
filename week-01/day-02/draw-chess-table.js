// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % % 

'use strict';

const lineCount = 8;
var str = '';
var STR = '';
    
for(var i = 1; i <= 4; i++){
        str = str.concat("%"+" ");
    }
console.log(str);

for(var j = 0; j < lineCount-1; j++){
    if(j % 2 == 0){
    STR = " "+str;
    }else {
        STR = str;
    }
    console.log(STR);
}


