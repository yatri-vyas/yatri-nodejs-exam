import express from "express";
import envConfig from "./config/envConfig.js";
import db from "./config/database.js";
import bodyParser from "body-parser";
import userRouter from "./routes/userRoute.js";

const port = envConfig.PORT;

const app = express();

app.use(bodyParser.json());

app.use('/api/user',userRouter);

app.listen(port,(error)=>{
    if(!error){
        console.log("server start. ");
        console.log(`http://localhost:` + port);
    }
})