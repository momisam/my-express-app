//assignment on express for beginner
const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
    console.log('This is first middleware');
    app.send('Welcome to my assignment page');
    next();
});

app.use('/users', (req, res) => {
    console.log('The second middleware');
    res.send('This get the client to users page');
});

app.listen(3000, () => {
    console.log(`Server running on localhost;3000`);
});
