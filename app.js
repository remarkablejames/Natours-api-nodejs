const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({message:'Hi there, this should definitely work'});
});


app.listen(8080, () => {
    console.log('Listening on port 8080');
});

// console.log("hello world")
