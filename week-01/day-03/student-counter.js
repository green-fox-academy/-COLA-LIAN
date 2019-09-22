'use strict';

const students = [
  {name: 'Theodor', age: 3, candies: 2},
  {name: 'Paul', age: 9.5, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
]

// create a function that takes a list of students and logs: 
// - How many candies are owned by students altogether
let sum1 = 0;
// console.log(students[1].candies+students[2].candies);

function x1(){

  for(var i = 0; i < students.length; i++){
    sum1 += students[i].candies;
  }

  return sum1

}

x1();
console.log (sum1);

// create a function that takes a list of students and logs:
// - The sum of the age of people who have less than 5 candies
let sum2 = 0;
function x2(){
    for(var i = 0; i < students.length; i++){
        if(students[i].candies < 5){
            sum2 += students[i].age;
        }else{
            continue
        }
    }
    return sum2
}
x2();
console.log(sum2);