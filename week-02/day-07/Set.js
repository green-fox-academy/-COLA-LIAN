// // ES6 solution
// const setEntity = new Set();
// setEntity.add(1).add(2).add(1);
// for (let item of setEntity){
//     console.log(item);
// }


//no Es6 solution
class Set{
    constructor(){
        this.set = [];
    }
    add(){
        this.set.push(1);
        this.set.push(2);
        this.set.push(3);
        console.log(set);
    }
    print(){
        for(let i = 0; i < this.set.length; i++){
            console.log(this.set[i]);
        }
    }
}

// let set = new Set;
//  set.add();
// set.print();

module.export = Set;
