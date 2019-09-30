function multiPurposeFunction(action){
    if (action){
        action(3);
        console.log(action(3));        
    }
}

function frameFunction(){
    const anonym = function(param){
        return param*param;
    }   
    multiPurposeFunction(anonym)
}

frameFunction();