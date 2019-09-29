class Set{
    constructor(){
        this.set = [];
    }
    add(){
        this.set.push(1);
        this.set.push(2);
        this.set.push(3);
        // console.log(this.set);
        return this.set
    }
    print(){
        for(let i = 0; i < this.set.length; i++){
            // console.log(this.set[i]);
        }
    }
}

let set = new Set;


function find(arr1, arr2){
    let arr = [];
   

    set.add().forEach(x =>{
        if((!arr1.includes(x)) && (!arr2.includes(x))){
            arr.push(x);
        }
    })

    console.log(arr);
    return arr
}


find([7,8,9],[1,0,6]);