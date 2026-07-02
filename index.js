const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

const router = require("./routes/index")

app.use(express.json());

const PORT = process.env.PORT;
const dbConnect = require("./configaration/dbConfig");

app.use(router);

dbConnect();

 app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
    
 })
