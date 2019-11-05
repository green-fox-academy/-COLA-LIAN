const express = require('express');
const mysql = require('mysql');
const app = express();

let PORT = (process.env.PORT || 3002);
app.use(express.json());//解析post方式下的json参数

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'reddit',
});

app.get('/posts', (req, res) => {
    const sqlString = `SELECT * FROM artical_info`;

    connection.query(sqlString, (error, result) => {
        if(error){
            console.log(error.message);
            return;
        }

        res.setHeader("Content-Type", "application/json");
        res.status(200).send({ posts:result });
    })
});



app.post('/posts', (req, res) => {
    let title = req.body.title;
    let url = req.body.url;
    let score = 0;
    let timestamp = Date.now();

    const sqlString = `INSERT INTO artical_info 
    (timestamp, score,  title, url)
    VALUES("${timestamp}", "${score}", "${title}", "${url}")`;

    connection.query(sqlString, (error, result) => {
        if(error){
            console.log(error.message);
            return;
        }

        res.setHeader("Content-Type", "application/json"); 
        // res.send(result);
        res.status(201).send(
            {addItem:{
                id: result.insertId,
                title:title,
                url:url,
                timestamp: timestamp,
                score: score
            }
        });
    })
});


app.put('/posts/:id/upvote', async (req, res) => {
    let upId = req.params.id;
    const sqlUpdate = `UPDATE artical_info set score=score+1 WHERE id=${upId}`;
    const sqlSelect = `SELECT * FROM artical_info WHERE id=${upId}`;

    await connection.query(sqlUpdate);

    connection.query(sqlSelect, (error, result) => {
        if(error){
            res.send(500).send(error.message);
            return;
        }
        res.setHeader("Content-Type", "application/json"); 
        res.status(200).send({downItem:result});

    })

});

app.put('/posts/:id/downvote', async (req, res) => {
    let upId = req.params.id;
    const sqlUpdate = `UPDATE artical_info set score=score-1 WHERE id=${upId}`;
    const sqlSelect = `SELECT * FROM artical_info WHERE id=${upId}`;

    await connection.query(sqlUpdate);

    connection.query(sqlSelect, (error, result) => {
        if(error){
            res.send(500).send(error.message);
            return;
        }
        res.setHeader("Content-Type", "application/json"); 
        res.status(200).send({downItem:result});

    })

});

app.listen(PORT);