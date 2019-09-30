function multiPurposeFunction(action){
    if (action){
        console.log("======");
        console.log(action(3));        
    }
}

function exampleNonAnonymFunction(param){
    return param*param;
}


console.log(multiPurposeFunction(exampleNonAnonymFunction()));



function frameFunction(){
    // this function call shows an example,
    // but it is not using anonym functions
   
   multiPurposeFunction(exampleNonAnonymFunction());
    // write your code here



    (function(){
    
    })


}

// console.log(frameFunction());