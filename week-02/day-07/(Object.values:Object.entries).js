let object = {
    'a': 101,
    'b': 600,
    'c': 10,
    'x': 12,
    'y': 17,
    'z': 29,
}

 function max(obj) {
    let maxVal = 0;
    let maxObj = null;
    for (let entry of Object.entries(obj)){
        if(entry[1] > maxVal){
            maxVal = entry[1];
            maxObj = entry;
        }
    }
      return maxObj 
 }

console.log(max(object));