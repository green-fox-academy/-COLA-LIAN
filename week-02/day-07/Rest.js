function foo(x = 2, y = 2, ...rest){
    let arr = new Array();
    if(rest.length < (x*y)){
        return null
    }else{
        
        let count = 0;
        for(let i = 0; i < x; i++){
             arr[i] = new Array();

            for(let j = 0; j < y; j++){
                arr[i][j] = rest[count];
                count++;
            }
        }
        console.log(arr);
       
    }
    
    return arr
}

foo(x = 2, y = 3, 3, 3, 3, 4, 6, 7);
// console.log(rest[0]);