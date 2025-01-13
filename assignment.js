//assignment on express for beginner
const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
    console.log('This is first middleware');
    app.send('Welcome to my assignment page');
    next();
});


