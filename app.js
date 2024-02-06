// nodemon app.js

// require
require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

// custom
const app = express()
const port = process.env.PORT;
const siteName = process.env.SITENAME;

// set Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// Serve static content from public folder
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Agustín',
        siteName: siteName,
        pageName: 'Home'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Agustín',
        siteName: siteName,
        pageName: 'Generic'
    });    
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Agustín',
        siteName: siteName,
        pageName: 'Elements'
    });    
})


app.get('*', (req, res) => {
    res.status(404);
    res.sendFile(__dirname + '/public/old/404.html');
})

app.listen(port, () => {
        console.clear();
        console.log(`Example app listening on port ${port}`)
})