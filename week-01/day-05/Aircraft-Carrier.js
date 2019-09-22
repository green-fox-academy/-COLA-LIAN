class Aircraft{
    constructor(type, ammo, baseDamage,maxAmmo, priority){
        this.type = type;
        this.ammo = ammo;
        this.baseDamage = baseDamage;
        this.maxAmmo = maxAmmo;
        this.priority = priority;
        this.allDamage = 0;
    }
    fight(){
        this.allDamage = this.ammo * this.baseDamage ;
        this.ammo = 0;
        console.log(this.allDamage);
        return this.allDamage
    }
    refill(number){
        var remain;
        if(this.ammo + number <= this.maxAmmo){
            this.ammo = this.ammo + number;
            remain = 0;
        }else{
            remain = number -this.maxAmmo+this.ammo;
            this.ammo = this.maxAmmo;
        }
        return remain
    }
    getType(){
        return this.type;
    }
    getStatus(){
        var printStatus = "Type: "+this.type+", Ammo:"+this.ammo+", Base Damage:"+this.baseDamage +", All Damage:"+this.allDamage;
        console.log(printStatus);
        // console.log(this.baseDamage);
        return printStatus;
    }
    isPriority(){
        return priority
    }

}






class airCraftCarrier{
    constructor(list,ammoAmount,HP){
        this.list = [];
        this.ammoAmount = ammoAmount;
        this.HP = HP;
        this.totalDamage = 0;
    }
    add(Aircraft){
        this.list.push(Aircraft);
    }

    fill(){
        var totalNeed = 0
        for(var i = 0; i < this.list.length; i++){
            totalNeed = totalNeed + (this.list[i].maxAmmo-this.list[i].ammo);
        }

        while(this.ammoAmount > 0){

            if(this.ammoAmount >= totalNeed){
            for(var i = 0; i < array.length; i++){
             this.list[i].refill(this.ammoAmount);
             console.log()
            }
        }else if(this.ammoAmount < totalNeed && this.ammoAmount > 0){
            for(var i = 0; i < this.list.length; i++){
                if(this.list[i].priority){
                    this.ammoAmount = this.list[i].refill(this.ammoAmount);
                }else{
                    continue
                }
              }
            }
        }
    }

    Damage(){
        for(var i = 0; i < this.list.length; i++){
            this.totalDamage = this.totalDamage + this.list.allDamage;
        }
        return this.totalDamage
    }

    // fight(airCraftCarrier){
        

    // }

    getStatus(){
        var printStatus = "HP: "+this.HP+", Aircraft count:"+ this.list.length+", Ammo Storage:" +this.ammoAmount+ ", Total damage:"+ this.Damage();
        console.log(printStatus);

        console.log("\nAircrafts:");
        for(var i=0; i < this.list.length; i++){
            this.list[i].getStatus();
        }
    }
      
    
        
    


}


let craft1 = new Aircraft("F35",6, 20, 80, false);
let craft2 = new Aircraft("F16", 10, 40, 100, true);
// let craft1 = new Aircraft();

let carrier1 = new airCraftCarrier([],50, 5);


carrier1.add(craft1);
carrier1.add(craft2);
carrier1.getStatus();

craft1.fight();
craft2.fight();

carrier1.fill()
carrier1.getStatus();
