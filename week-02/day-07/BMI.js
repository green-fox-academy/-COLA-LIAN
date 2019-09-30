function BMI(obj){   
    return {BMI: obj.mass/(obj.heigh*obj.heigh)}
}

console.log(BMI({heigh: 160, mass: 54}));