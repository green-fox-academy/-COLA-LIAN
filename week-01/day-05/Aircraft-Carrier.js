class Aircraft{
    constructor(type, ammo, baseDamage, maxAmmo, priority){
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
        if(number <= 0){
            throw "Attention! There is no enough ammo!"
        }
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
        if(this.ammoAmount <= 0){
            throw ""
        }
        if(this.ammoAmount >= totalNeed){
            for(var i = 0; i < array.length; i++){
             this.list[i].refill(this.ammoAmount);
             console.log()
            }
        }else if(this.ammoAmount < totalNeed){
    
            for(var i = 0; i < this.list.length; i++){
                if(this.list[i].priority == true){
                    this.ammoAmount = this.list[i].refill(this.ammoAmount);
                }else{
                    continue
                }
                //fill the second priority aircraft
                if(this.ammoAmount > 0){
                    if(this.list[i].priority == false){
                        this.ammoAmount = this.list[i].refill(this.ammoAmount);
                    }else{
                        continue
                    }
                }
              }
            }

        }
    
    Damage(){
		this.totalDamage = 0;
        for(var i = 0; i < this.list.length; i++){
           this.totalDamage += this.list[i].allDamage ;
        }
        return this.totalDamage;
    }

    fight(airCraftCarrier){
        this.list.map(function(x){
            x.ammo = 0;
        })
		// for(var i = 0; i < this.list.length; i++){
		// 	this.list[i].fight();
		// }
        if(airCraftCarrier.HP > this.Damage()){
			airCraftCarrier.HP -= this.Damage();
        }else{
            airCraftCarrier.HP = 0;
        }
    }

    getStatus(){
		var printStatus = "";
		this.HP>0?printStatus = "HP: "+this.HP+", Aircraft count:"+ this.list.length+", Ammo Storage:" +this.ammoAmount+ ", Total damage:"+ this.Damage():printStatus = "HP: "+this.HP+", Aircraft count:"+ this.list.length+", Ammo Storage:" +this.ammoAmount+ ", Total damage:"+ this.Damage()+" It's dead Jim "
        // var printStatus = "HP: "+this.HP+", Aircraft count:"+ this.list.length+", Ammo Storage:" +this.ammoAmount+ ", Total damage:"+ this.Damage();
        console.log(printStatus);

        console.log("\nAircrafts:");
        for(var i=0; i < this.list.length; i++){
            this.list[i].getStatus();
        }
    }

}


let craft1 = new Aircraft("F35",6, 20, 80, false);
let craft2 = new Aircraft("F16", 10, 40, 100, true);
let craft3 = new Aircraft();

let carrier1 = new airCraftCarrier([],50, 5);
let carrier2 = new airCraftCarrier([],50, 5);

carrier1.add(craft1);
carrier1.add(craft2);
carrier1.getStatus();

craft1.fight();
craft2.fight();
carrier1.fight(carrier2);
carrier1.getStatus();

carrier1.fill();
carrier1.getStatus();
carrier2.getStatus();		