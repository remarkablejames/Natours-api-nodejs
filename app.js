const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({message:'Hi there'});
});


app.listen(8080, () => {
    console.log('Listening on port 8080');
});
