const express=require("express");
const bollywood=require("./router/bollywood")
const hollywood=require("./router/hollywood")
const app=express();
app.use("/api",bollywood)
app.use("/api",hollywood)
app.listen ( process.env.PORT,()=>{
    console.log("server is running in the port 7000")
})