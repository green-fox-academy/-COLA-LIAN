function coffee(sugar = false, milk = false){
    if(sugar && milk){
        return 'coffee with sugar and milk'
    }else if(sugar){
        return "coffee with sugar"
    }else if(milk){
        return "coffee with milk"
    }else{
        return 'coffee'
    }

}

console.log(coffee(sugar = true, milk = false));