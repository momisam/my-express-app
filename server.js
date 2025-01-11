//import express module
const express = require('express');

//create server
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to my express page');
});

app.listen(3000, () => {
    console.log(`server runing on localhost:3000`);
})