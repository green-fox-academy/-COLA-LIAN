'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

var quote = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law."
var str ='It';
var subStr = "always takes longer than";

var index = quote.indexOf(str);

console.log(index);
console.log(str.length);


var quote2 = quote.slice(0,index+str.length+1)+subStr+quote.slice(index+str.length);


console.log(quote2);