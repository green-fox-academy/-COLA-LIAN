'use strict';

// - Create an array named `s` with the following content: `[1, 2, 3, 8, 5, 6]`
// - Change the 8 to 4 with the `.map` method 
// - Print the fourth element as a test

var s = [1, 2, 3, 8, 5, 6];

var s2 = s.map(x =>{
    if (x == 8){
        x = 4;
        return x;
    }
    else{     
        return x;
    }
   
})

console.log(s2);


// var changes = s.map(function MAP(x){

//     for(var i=0; i<=x.length; i++){

//         if (s[i] == 8){
//             s[i] = 4;
//             return s[i];
//         }else{
//             return s[i];
//         }
//      }
//     })

//  console.log(changes);


