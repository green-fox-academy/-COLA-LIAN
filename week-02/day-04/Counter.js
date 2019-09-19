// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value


class Counter{

    constructor(number){
        this.number = number;
    }

    add1(number2){
        this.number = this.number + number2;
        console.log(this.number);
    }

    add2(){
        this.number = this.number+1;
        console.log(this.number);
    }

    get(){
        this.number = this.number.toString();
        console.log(this.number);
    }

    reset(){
        this.number = 0;
        console.log(this.number);
    }
}

let c = new Counter(0);

console.log(c);
c.add1(3);
c.add2();
c.get();
c.reset();