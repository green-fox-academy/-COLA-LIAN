'use strict';

// - Create a function called `printer`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)

function printer(x){
    console.log(arguments);
}

printer(1,2,3);
printer("Hello!","How are you?","Fine,thanks!");