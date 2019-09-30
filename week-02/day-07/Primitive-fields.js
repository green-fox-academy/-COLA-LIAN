 function primitiveFields(obj){
    let arr = [];
    for (let entry of Object.entries(obj)){
        // console.log(entry);

            if(typeof entry[1] == "string" || typeof entry[1] == "number" || typeof entry[1] == "boolean"){
                arr.push(entry[0]);
            }
            
         
    }
    console.log(arr);
}

primitiveFields({ x: 1, y: true, z: [], a: 'a', b : undefined, c:5 });

