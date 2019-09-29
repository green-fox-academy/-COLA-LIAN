// Write a function that finds the maximum value in an array.
const data = [5,1,2,9,7,3,8];

function max(data){
    let temp = 0;
    for(let item of data){
        if(item > temp){
            temp = item;
        }
    }
    return temp
}

console.log(max(data));