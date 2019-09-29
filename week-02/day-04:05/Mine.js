class Mine{
    constructor(size){
        this.size = Number(size);
        this.mineNum = 0;
        this.row = new Array();//an actual array for mines' number and places
        this.print = new Array();//an display array
        this.mineArr = [];
    }

    printField(){
        for(let k = 0; k < this.size; k++){ 
            this.print[k] = new Array(); 
            this.print[k][0] = '0';
            for(let j = 1; j < this.size + 1; j++){
                this.print[k][j] = `${j}`;
            }
        }    
        for(let k = 1; k < this.size + 1; k++){    
            this.print[k] = new Array();        
            for(let j = 1; j < this.size+1; j++){   
                this.print[k][0] = String.fromCharCode((65+k-1));  
                this.print[k][j]="#";  // search the item by array index
            }    
        }  
        // console.log(this.print);
        // return this.print
    }

    
    generateMine(num){
        this.mineNum = num;
        
        while(this.mineArr.length != this.mineNum){
            let x = Math.floor(Math.random()*this.size+1);
            let y = Math.floor(Math.random()*this.size+1);
            let z = 0;
            this.mineArr.forEach(arr=>{
                if(arr.toString() == [x,y]){
                    z++;
                }
            });
            if(z == 0){
                this.mineArr.push([x,y]);
            }
        }
        // console.log(mineArr);
        // return this.mineArr
    }

    mineField(){
        for(let k = 0; k < this.size; k++){ 
            this.row[k] = new Array(); 
            this.row[k][0] = '0';
            for(let j = 1; j < this.size+1; j++){
                this.row[k][j] = `${j}`;
            }
        }    
        for(let k = 1; k < this.size+1; k++){    
            this.row[k] = new Array();        
            for(let j = 1; j < this.size+1; j++){   
                this.row[k][0] = String.fromCharCode((65+k-1));  
                this.row[k][j]=" ";  // search the item by array index
            }    
        }  
        //  console.log(this.row);
        //  return this.row
    }

    // insert mine
    insertMine(){
        this.mineArr.forEach( mine =>
            this.row[mine[0]][mine[1]] = '*'
        )
        console.log(this.row);
    }


    chooseItem(str){
        let input = str.split('');
        let x = input[0].charCodeAt()-64;
        let y = input[1];
        let count = 0;
        
    //mine appears
        //  console.log(x + "," + y + "=" + this.row[x][y]);
        if (this.row[x][y] == '*') {
            console.log('You reveal a mine !!!');
            count = '*';
        }else{
            let abs = [-1,0,1];
            abs.forEach( a => {
                abs.forEach( b => {
                    let xa = Number(x)+a;
                    let yb = Number(y)+b;
                    if(this.row.length > xa){
                        if(this.row[xa].length > yb){
                            if (this.row[xa][yb] == '*'){
                                count++;
                            }
                        }
                    }
                });
            });
        }
        // console.log(count);
        // console.log(this.row);

        
         this.print[Number(x)][Number(y)] = `${count}`;
       

          console.log(this.print);
         return count
    }




 

}

//  let mine = new Mine(4);

// mine.printField();
// mine.mineField();
// mine.generateMine(10);
// mine.insertMine();

// mine.chooseItem("D3");
// mine.chooseItem("A4");

// console.log(mine.print);
 
module.exports = Mine;