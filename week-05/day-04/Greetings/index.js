const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
   let {query} = req;
    res.render('home', {query});
});

// start express app on port 3000
app.listen(PORT);