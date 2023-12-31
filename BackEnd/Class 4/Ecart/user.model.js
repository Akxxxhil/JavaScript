import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowecase:true 
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowecase:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:true})

export const USER=mongoose.model("USER",userSchema)