import { DB_Name } from "../constants.js";
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
        console.log(`\n Mongodb Connected !! DB Host : ${connection.connection.host}`);
    } catch (error) {
        console.error("Error", error);
        process.exit(1);
    }
};
export default connectDB;