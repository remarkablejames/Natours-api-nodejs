import express from 'express'
import morgan from 'morgan'
import toursRouter from './routes/toursRouter.js'

const app = express();

// MIDDLEWARES
if (process.env.NODE_ENV === 'development'){
    console.log("ENV vars",process.env.NODE_ENV)
    app.use(morgan('dev'))
}
app.use(express.json())

app.use((req,res,next)=>{
    console.log("hello from the middleware!")
    next()
})


// ROUTES
app.use('/api/v1/tours', toursRouter)


export default app;

