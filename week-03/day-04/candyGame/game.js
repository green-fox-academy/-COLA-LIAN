//creat candies
let creat = document.querySelector('.create-candies');
let candies = document.querySelector('.candies');
creat.addEventListener('click', creatCandy);

function creatCandy(){
    candies.innerText++;
}

//buy lollipop
let buy = document.querySelector('.buy-lollypops');
let lollipop = document.querySelector('.lollypops');
buy.addEventListener('click', function(){
   if(candies.innerText >= 100){
       candies.innerText = candies.innerText - 100;
        lollipop.innerHTML += '🍭';
   }
})

// candy producton rate
let time0 =parseInt(new Date().getTime()/1000);
console.log('888888'+time0);
let speed = document.querySelector('.speed');


function interval(){    
    let timeCurrent = parseInt(new Date().getTime()/1000);
    console.log(timeCurrent-time0);
    speed.innerHTML = candies.innerText/(timeCurrent - time0);
}

setInterval(interval, 1000);


//rain
let rain = document.querySelector('.candy-machine');
rain.addEventListener('click', function(){
    creat.removeEventListener('click', creatCandy);
    creat.addEventListener('click', function(){     
    candies.innerText = Number(candies.innerText) + 100;
    })
})