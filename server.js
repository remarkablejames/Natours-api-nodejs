
import dotenv from 'dotenv';
dotenv.config({path: './config.env'});
import app from "./app.js";
import mongoose from 'mongoose';

console.log("ENV vars in server",process.env.NODE_ENV)

// Connect to MongoDB

const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD)
mongoose.connect(DB, {
    useNewUrlParser: true
}).then(con=>{
    console.log("DB connection successful!")

} );

// Start the server
const port = 8080;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});