'use strict';

// - Create variable named `al` and assign the value `EPAM` to it
// - Create a function called `greet` that greets it's input parameter
//     - Greeting is printing e.g. `Greetings, dear EPAM`
//     - Prepare for the special case when no parameters are given
// - Greet `al`

var al = "EPAM";
var greets ;

function Greet(greets){
    
    if(greets == null || greets == 0 || greets == ""){
        return "Please input something here."
    }
    console.log(`Greetings, dear EPAM`);
    return `Greetings, dear EPAM`

}

console.log(Greet(al));
console.log(Greet(0));
