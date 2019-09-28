let readline = require('readline');
let Mine =  require('./Mine');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

play();


function play(){
    rl.question('How big the gameplay should be (n)?',(n) =>{

        if((n > 0) != true ){
          console.log(`That's not a valid number for the dimension!`)
          play();

        }else if(n > 0){
            
            let mine = new Mine(n);
            mine.printField();
            mine.mineField();
            

        setMine();

        function setMine(){

            rl.question(`How many mines you'd like to find (k)?`,(k) =>{

                if ((k <= 0) || (k > n*n)){
                    console.log(`That's not a valid number for the dimension!`)
                    setMine();
                }else{

                mine.generateMine(k);
                mine.insertMine();
                console.log(mine.print);

                let count = Number(n)*Number(n)-Number(k);
                console.log(count);


                //find the mines
                ques(count);


                function ques(count){
                    rl.question('What field to reveal?',(str) =>{ 

                    let input = `${str}`.split('');
                    let x = input[0].charCodeAt()-64;
                    let y = input[1];

                    if((x>n)||(Number(y)>n)){
                        console.log(`Beyond the minefield.`)
                        ques(count);
                    }else{
                        let bom = mine.chooseItem(`${str}`);
                        count--;
                        
                        if(count > 0 && bom !="*"){
                            ques(count);
                        }else if(count == 0 && bom !="*"){
                            console.log(`Hooray! You have clear mines successfully!`);
                            rl.close();
                        }else{
                            rl.close();
                        }
                    }
                })  
                }
            }
            })
        }     
        }
    })
}


