const express=require("express");
const bollywood=require("./router/bollywood")
const hollywood=require("./router/hollywood")
const dotenv=require("dotenv") //npm i dotenv
const app=express();
dotenv.config();
// const scedf=
app.use("/api",bollywood)
app.use("/api",hollywood)
app.listen ( process.env.PORT,()=>{
    console.log("server is running in the port 7000")
})