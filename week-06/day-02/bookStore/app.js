const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use('/static', express.static('static'));
app.use(express.json());//解析post方式下的json参数

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'test',
});

// connection.connect(function(err){
//     if(err){
//         console.log(err);
//         return
//     }
// });

//lists all book titles
app.get('/bookStore', (req, res) => {
    let sqlString = 'SELECT * FROM book_mast;';

    connection.query(sqlString, (error, result) => {
        if(error){
            console.log(error.message);
            return;
        }
        res.render('bookTitle',{result});
    })

});


//All books with full data
app.get('/bookStore/fullData', (req, res) => {
    // let sqlString = `SELECT book_mast.book_name, aut_name, cate_descrip, pub_name, book_price 
    //                 FROM book_mast JOIN author ON book_mast.aut_id=author.aut_id
    //                                  JOIN category ON book_mast.cate_id=category.cate_id
    //                                  JOIN newpublisher ON book_mast.pub_id=newpublisher.pub_id
    //                                  JOIN purchase ON book_mast.book_id=purchase.book_id;`;

    let sqlString = `SELECT book_mast.book_name, author.aut_name, category.cate_descrip, newpublisher.pub_name, book_mast.book_price 
    FROM book_mast, author, category, newpublisher, purchase 
    WHERE book_mast.aut_id=author.aut_id
    AND book_mast.cate_id=category.cate_id
    AND book_mast.pub_id=newpublisher.pub_id;`;


    connection.query(sqlString, (error, result) => {
        if(error){
            console.log(error.message);
            return;
        }
        res.render('table',{result});
    })
});




//create filters




app.get('/bookStore/filter', (req, res) => {
    // const {query} = req;
    const queryInput = req.query; 

    let sqlString = `SELECT book_mast.book_name, author.aut_name, category.cate_descrip, newpublisher.pub_name, book_mast.book_price 
                    FROM book_mast, author, category, newpublisher, purchase 
                    WHERE book_mast.aut_id=author.aut_id
                    AND book_mast.cate_id=category.cate_id
                    AND book_mast.pub_id=newpublisher.pub_id;`;

        sqlString = filterSqlString(queryInput, sqlString);
        
        connection.query(sqlString, (error, result) => {
        if(error){
            console.log(error.message);
            return;
        }
        // res.render('table',{result});
        res.json({result});
    })

     
         function filterSqlString(query, sqlString){
            if(Object.keys(query).length > 0){
                for(let key in query){
                    if(key === 'category'){
                        sqlString += `AND category.cate_descrip = '${query[key]}'`;
                    }else if(key === 'publisher'){
                        sqlString += `AND publisher.pub_name = '${query[key]}'`;
                    }else if(key === 'plt'){
                        sqlString += `AND book_mast.book_price < '${query[key]}'`;
                    }else if(key === 'pgt'){
                        sqlString += `AND book_mast.book_price > '${query[key]}'`;
                    }
                } 
            } 
            return sqlString += ';'
        }

})













app.listen(PORT);