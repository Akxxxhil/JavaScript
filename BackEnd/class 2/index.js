
//require('dotenv').config()        ==>process.env.
const express=require("express")
const app=express()

const port=4000

app.get('/',(req,res)=>{
    res.send("welcome to backend")
})

app.listen(port,()=>{
    console.log(`server is running succesfully ${port}`);
})