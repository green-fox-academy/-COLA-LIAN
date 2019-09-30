function multiPurposeFunction(action){
    if (action){
        console.log(action(3));        
    }
}

function frameFunction(){
    const arrow = (param => param * param)
    multiPurposeFunction(arrow);
}
frameFunction();