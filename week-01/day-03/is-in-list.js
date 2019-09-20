'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16];
let list = [4, 8, 12, 16];
let list2 = [1, 2, 3, 4];
 
function checkNums(listOfNumbers, list){
   return list.every(function checkNums(i){
    let boolean = listOfNumbers.includes(i);
    return boolean
})
}

 console.log(checkNums(listOfNumbers,list));
 console.log(checkNums(listOfNumbers,list2));

 module.exports = checkNums;