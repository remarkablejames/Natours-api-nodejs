import express from 'express'
const router = express.Router();

// import all controllers
import {getAllTours} from '../controllers/tourController.js'

router.use((req,res,next)=>{
    console.log("hello from the tour Router middleware!")
    next()
} )

router.get('/', getAllTours );

export default router;