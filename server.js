const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs')
const app = express(); 

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('home');
})

app.post('/', (req, res) => {
    console.log(Object.keys(req.body).length);
})

app.listen(3000, () => {
    console.log(`server running on port 3000`);
})