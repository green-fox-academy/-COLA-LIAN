import{Mammal, Reptile, Bird} from './Animal'

const reptile = new Reptile('Crocodile');
const mammal = new Mammal('Koala');
const bird = new Bird('Parrot');

console.log('How do you breed?');
console.log(`A ${reptile.getName()} is breeding by ${reptile.breed()}`);
console.log(`A ${mammal.getName()} is breeding by ${mammal.breed()}`);
console.log(`A ${bird.getName()} is breeding by ${bird.breed()}`);
console.log(`Is ${reptile.getName()} will morph after grow? ${reptile.morph()}.`);
console.log(`Is ${mammal.getName()} will morph after grow? ${mammal.morph()}.`);
console.log(`Is ${bird.getName()} will morph after grow? ${bird.morph()}.`);