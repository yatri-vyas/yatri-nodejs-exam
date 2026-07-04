import mongoose from "mongoose";
import envConfig from "./envConfig.js";

const db = async()=>{
try {
    await mongoose.connect(envConfig.MONGODB_URL);
    console.log("database connect.")
} catch (error) {
    console.log(error)
}
}

export default db();