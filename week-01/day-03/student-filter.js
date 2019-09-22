'use strict';

const students = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
]

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
function x3(){
    for(var i = 0; i <students.length; i++){
        if(students[i].candies > 4){
            console.log(students[i]);
        }else{
            continue
        }
    }
}
x3();



// create a function that takes a list of students and logs: 
//  - how many candies they have on average
let sum = 0;
let average = 0;

function x4(){
    for(var i = 0; i <students.length; i++){
        sum += students[i].candies;
    }
    average = sum/students.length;
    console.log(average);
}
x4();