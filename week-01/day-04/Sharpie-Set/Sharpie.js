// Create Sharpie class
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount

class Sharpie{
    constructor(color, width, inkAmount){
        this.color = color;
        this.width = width;
        this.inkAmount = inkAmount;
    }

    use(){
        this.inkAmount--;
        console.log(this.inkAmount)
    }

}

// let sharpie = new Sharpie("pink", 1.5, 4.5);
// console.log(sharpie);
// sharpie.use();

module.exports = Sharpie;