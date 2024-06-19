const express = require("express");
const courseRouter = require("./routes/course")
const port =8080;
const app = express();
const path = require("path")
require("dotenv").config();
const {dbConnection}= require("./database/config")

app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))
dbConnection()
app.use("/courses",courseRouter)
app.listen(port,()=>{
    console.log(`el servidor está listo en el puerto ${port}`);
})

