
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
    console.log(array);
    return array
    }



let array = [4, 5, 3, 2, 7, 0, 9, 55, 12, 63, 9, 35, 36];
bubbleSort(array);
