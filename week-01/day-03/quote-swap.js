'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

const words = ["What", "I", "do", "create,", "I", "cannot", "not", "understand."];

// Expected output: "What I cannot create I do not understand."

function quoteSwap(words){
    let x = words.indexOf("do");
    let y = words.indexOf("cannot");
    // console.log(x);
    // console.log(y);

    words.splice(x,1,words.splice(y,1,words[x]).join('')); 
    return words
}

 console.log(quoteSwap(words));




// module.exports = quoteSwap;