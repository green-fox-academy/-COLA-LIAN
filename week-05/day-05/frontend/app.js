const express = require('express') //import express
const path = require('path')
const app = express() //use express
const PORT = 3000

app.use(express.static('assets'));

app.get('/', (req, res) => {   
    res.sendFile(path.join(__dirname, 'index.html'));
});

function sumUntil(number){
    let sum = 0;
    for(let i = 1; i <= number; i++){
        sum += i;
    }
    // console.log(sum);
    return sum
}

function factorUntil(number){
    let factor = 1;
    for(let i = 1; i <= number; i++){
        factor = factor * i;
    }
    // console.log(factor);
    return factor
}

// sumUntil(5);
// factorUntil(5);





//doubling
app.get('/doubling', (req, res) => {
    const { query } = req;
    if(query.input) {
        res.json({
            received: query.input,
            result: query.input * 2
        })
    }else{
        res.json({
            error:"Please provide an input!"
        })
    } 
});


//greeter
app.get('/greeter', (req, res) =>{
    const { query } = req;
    if(query.name && query.title){
        res.json({
            welcome_message: `Oh, hi there ${query.name}, my dear ${query.title}!`
        })
    }else if(!query.name && query.title){
        res.json({
            error: "Please provide a name!"
        })
    }else if(query.name && !query.title){
        res.json({
            error: "Please provide a title!"
        })
    }else if(!query.name && !query.title){
        res.json({
            error: "Please provide a name and a title!"
        })
    }
})

//append a
app.get('/appenda/:appendable', (req, res) => {
    const { params } = req;
    if(params.appendable){
        res.json({
            appended: `${params.appendable}a`
        })
    }else{
        res.send('404 NOT FOUND')
    }
})


//do until
app.post('/dountil/:action', (req, res) => {
    const { params, body } = req;
    const { action } = params;
    const { until } = body;

    if(action == 'sum'){
        res.json({
            result: sumUntil(until)
        })

    }else if(action == 'factor'){
        res.json({
            result: facotrUntil(until)
        })
    }
    res.json({
        error: 'Please provide a number!'
    })

})


// app.listen(PORT);
app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
  });