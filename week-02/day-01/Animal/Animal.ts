abstract class Animal{
   protected name: string;
   protected age: number;

   constructor(name:string, age: number){
       this.name = name;
       this.age = age;
    //    this.sex = sex;
   }
   abstract getName():void;
   abstract getAge(): void;
   abstract breed(): void;
   abstract getFur(): boolean;
   abstract morph():boolean;
}




class Mammal extends Animal{
    constructor(name: string){
        super(name,1);
    }
    getAge():number{
        return this.age
    }
    getName():string{
        return this.name
     }
    getFur(): boolean{
        return true
    }
    breed():string{
        return 'viviparity.'
    }
    morph():boolean{
        return false
    }
}




class Reptile extends Animal{
    constructor(name: string){
        super(name, 1);
    }
    getAge():number{
        return this.age
    }
    getName():string{
        return this.name
     }
     getFur(): boolean{
        return false
    }
    breed(): string{
        return 'laying eggs.'
    }
    morph():boolean{
        return true
    }
}



class Bird extends Animal{ 
    constructor(name: string){
        super(name,1);
    }
    getAge():number{
        return this.age
    }
    getName():string{
       return this.name
    }
    getFur(): boolean{
        return true
    }
    breed(): string{
        return 'laying eggs'
    }
    morph():boolean{
        return true
    }
}

export{Mammal, Reptile, Bird}