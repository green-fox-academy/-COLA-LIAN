
  function bubbleSort(array){
    for(let i = 0; i < array.length; i++){
        for( let j = i+1; j < array.length; j++){
            if(array[i] > array [j]){
                let temp = array [i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    //console.log(array);
      return array
    }



function binarySearch(find, array, left,right){

    if(array[left] === find){
         return left
     }else if(array[right] === find){
         return right
     }

     let mid = Math.floor((left+right)/2);

     if(array[mid] === find){
         return mid
     }else if(array[mid] < find){
         left = mid;
         return binarySearch(find, array, left, right)
     }else if(array[mid] > find){
         right = mid;
         return binarySearch(find, array, left, right)
     }
    return false
}


let array = [ 0, 3, 6, 7, 8, 10, 23, 1, 2];

console.log(binarySearch(8, bubbleSort(array), 0, array.length-1));

//Possibility of stack overflow becoz using recursion