'use strict';

const lineCount = 6;

// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

for(var i=0;i<lineCount;i++){
    
    if(i==0 || i==lineCount-1){
        var x ="%".repeat(lineCount);
       console.log(x); 
    }else{
        var x = "%"+" ".repeat(lineCount-1-1)+"%";
        console.log(x);
    }
    
}