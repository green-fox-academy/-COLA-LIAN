abstract class Intrument{
    protected name: string;
    constructor(name:string){
        this.name = name;
    }
    abstract play(): void;
}


abstract class StringedInstrument extends Intrument{
    numberOfStrings: number;
    constructor(name:string, numberOfStrings: number){
        super(name);
        this.numberOfStrings = numberOfStrings
    }
    abstract sound(): string;
    public play():void{
        console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`)
    }
}


class ElectricGuitar extends StringedInstrument{
    constructor(numberOfStrings: number = 6){
        super("Electric Guitar", numberOfStrings);
    }
    sound():string{
        return 'Twang'
    }
}

class BassGuitar extends StringedInstrument{ 
    constructor(numberOfStrings: number = 4){
        super("Bass Guitar", numberOfStrings); 
    }

    sound():string{
        return 'Duum-duum-duum'
    }
}


class Violin extends StringedInstrument{
    constructor(numberOfStrings: number = 4){
        super("Violin", numberOfStrings);
    }
    sound():string{
        return 'Screech'
    }
}

export{ElectricGuitar, BassGuitar, Violin};