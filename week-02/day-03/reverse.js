'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

const reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI";

//the first algorithm
var stack =[];

for(var i=reversed.length;i>0; i--){
   stack.push(reversed[i]);
}

var postiveSequence = stack.join('');

console.log(reversed);
console.log(stack);
console.log(postiveSequence);


//the second algorithm

    function reverse(x){
        x = x.split('').reverse().join('');
        return x;
    }
    //console.log(reversed.split(''));
    //console.log(reversed.split('').reverse(''));
    console.log(reverse(reversed));