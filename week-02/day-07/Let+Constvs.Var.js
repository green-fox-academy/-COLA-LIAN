function even(arr){
    const num = arr.length;
    let count = 0
    for(let i = 0; i < num; i++){
        count = count + arr[i];
        
    }
    
    let even = count/num;
    console.log(even);
    return even
}

even([1,2,3,4]);