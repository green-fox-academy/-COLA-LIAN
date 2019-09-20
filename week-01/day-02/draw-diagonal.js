'use strict';

const lineCount = 6;
var str = '';

// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is

for(var i=1;i<=lineCount;i++){
    
  if(i==1 || i==lineCount){
      var x ="%".repeat(lineCount);
     console.log(x); 
  }
  else {
      var x = "%"+" ".repeat(i-2)+"%"+" ".repeat(lineCount-i-1)+"%";
      console.log(x);
  }
}
  
