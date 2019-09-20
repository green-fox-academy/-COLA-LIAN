let animal = {
    color:'white',
    bane:'zebra'


}

let obj = Object.create(animal);

console.log(obj);
console.log(obj.isPrototypeOf({}));
console.log(obj.isPrototypeOf(obj));
console.log(obj.isPrototypeOf(animal));
console.log(animal.isPrototypeOf(obj));
console.log({}.isPrototypeOf(animal));