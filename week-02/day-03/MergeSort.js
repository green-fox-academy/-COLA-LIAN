function merge(left, right){
    let x = [];
    while(left.length > 0 && right.length > 0){
        if(left[0] < right[0]){
            x.push(left.shift());
        }else{
            x.push(right.shift());
        }
    }
     return x.concat(left).concat(right)
    // return x.concat(right)
}


function mergeSort(array){
    if(array.length == 1){
        return array
    }

    let middle = Math.floor(array.length/2);
    let left = array.slice(0,middle);
    let right = array.slice(middle);
   
    return merge(mergeSort(left), mergeSort(right))
}


let array = [4, 3, 6, 6, 9, 8, 65, 13, 21];
console.log(mergeSort(array));
console.log(merge([4, 3, 6, 6, 9], [8, 65, 13, 21]));