const express = require("express");

const app = express();

app.use(express.json())

const userroutes = require("./mvc/routes/userroute")

app.use("/",userroutes);


app.listen(3000,()=>{
    console.log("http://localhost:3000")
})
