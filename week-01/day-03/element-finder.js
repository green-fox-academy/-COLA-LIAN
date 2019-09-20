'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers = [1, 2, 3, 4, 5, 6, 8];

// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!


function containsSeven(numbers){
   var boolean = numbers.includes(7);
   return boolean ? "Yes!" : "Noooooo.";
}
console.info(containsSeven(numbers));

// console.log(containsSeven(numbers));
// module.exports = containsSeven;