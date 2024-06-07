//require('dotenv').config()
import dotenv from "dotenv"
import mongoose, { connect } from "mongoose";
import { DB_Name } from "./constants.js";
import connectDB from "./db/index.js";
import app from "../app.js";

connectDB()
.then(()=>{
     app.listen( process.env.PORT || 8000 , ()=>{
              console.log(`Server is running at Post ${process.env.PORT}`);
     })
})
.catch((err)=>{
    console.log(`DB connection failed ${err}`);
})










































// this is the first approach to make connection with database 
// (async ()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
//     } catch (error) {
//         console.error("Error" , error);
//         throw error
//     }
// })()