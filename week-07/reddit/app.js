const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();


let PORT = (process.env.PORT || 3006);
app.use(express.json());//解析post方式下的json参数
app.use(cors());

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'reddit',
});

const getLocalTime = (nS) => { 
    return new Date(parseInt(nS)).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " "); 
} 



app.get('/posts', (req, res) => {
    const sqlString = `SELECT * FROM artical_info`;

    connection.query(sqlString, (error, result) => {
        if(error){
            console.log(error.message);
            res.status(500).send('error on db')
            return;
        }
        res.status(200).json({posts:result});
    })
});


app.post('/posts', (req, res) => {
    let title = req.body.title;
    let url = req.body.url;
    let score = 0;
    let timestamp = new Date().getTime();
    let time = getLocalTime(timestamp);

    const sqlString = `INSERT INTO artical_info 
    (timestamp, score,  title, url)
    VALUES("${timestamp}", "${score}", "${title}", "${url}")`;

    connection.query(sqlString, (error, result) => {
        if(error){
            console.log(error.message);
            return;
        }
        
        res.status(201).json(
            {addItem:{
                id: result.insertId,
                title: title,
                url: url,
                timestamp: time,
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
        // res.setHeader("Content-Type", "application/json"); 
        res.status(200).send(result);

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
        res.status(200).send(result);
    })
});

app.listen(PORT);