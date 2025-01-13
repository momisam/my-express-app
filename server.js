//import express module
const express = require('express');

//create server
const app = express();

//middleware 
app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next(); //Pass controll to the next middleware or route handler
});

app.get('/', (req, res) => {
    res.send('Welcome to my express Homepage');
});
app.get('/about', (req, res) => {
    res.send('This is the about page');
});
app.get('/contact', (req,res) => {
    res.send('Contact us  at contact@mosessam.com')
})

app.listen(3000, () => {
    console.log(`server runing on localhost:3000`);
});