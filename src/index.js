//require('dotenv').config()
import dotenv from "dotenv"
import mongoose, { connect } from "mongoose";
import { DB_Name } from "./constants.js";

import connectDB from "./db/index.js";

connectDB();










































// this is the first approach to make connection with database 
// (async ()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
//     } catch (error) {
//         console.error("Error" , error);
//         throw error
//     }
// })()