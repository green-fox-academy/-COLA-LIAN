const PORT = 3000;
const express = require('express')
const app = express()

app.use(express.json())

function sum(array){
    let x = 0;
    array.forEach((item) => {
        x = x + item;
    })
    return x
}

function multiply(array){
    let x = 1;
    array.forEach((item) => {
        x = x * item;
    })
    return x
}

function double(array){
    let x = [];
    array.map((item) => {
        x.push(item*2);
    })
    return x
}


app.post('/arrays/:action', (req, res) =>{
    const { body } = req
    const{ what, numbers} = body

    if(what && numbers){
        if(what == 'sum'){
            res.json({
                result: sum(numbers)
            })
        }else if(what == 'multiply'){
            res.json({
                result: multiply(numbers)
            })
        }else if(what == 'double'){
            res.json({
                result: double(numbers)
            })
        }
    }

    res.json({
        error: "Please provide what to do with the numbers!"
    })
})


app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});