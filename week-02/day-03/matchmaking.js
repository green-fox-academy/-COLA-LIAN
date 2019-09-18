'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

const girls = ["Eve","Ashley","Claire","Kat","Jane"];
const boys = ["Joe","Fred","Tom","Todd","Neef","Jeff"];




function makingMatches(x,y){
    var s =[];
    for(var i= 0;i<=girls.length; i++){
        if(girls[i]!=undefined){
            s.push(girls[i]);
        }
        if(boys[i]!=undefined){
        s.push(boys[i]);
        }
    }
    return s;
    
}

 console.log(makingMatches(girls, boys));

// module.exports = makingMatches;