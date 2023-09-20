const express = require('express');
const morgan  = require('morgan')

const app = express();

// MIDDLEWARES
app.use(morgan('dev'))
app.use(express.json())

app.use((req,res,next)=>{
    console.log("hello from the middleware!")
    next()
})

app.get('/', (req, res) => {
    res.status(200).json({message:"Hello world"});

});


app.listen(8080, () => {
    console.log('Listening on port 8080');
});

// console.log("hello world")
