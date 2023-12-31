import mongoose from "mongoose";
const productSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    prodctImage:{
        type:String
    },
    price:{
        type:Number,
        default:0
    },
    stock:{
        type:Number,
        default:0
    }, 
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"USER",
        required:true
    }
}
,{timestamps:true})
export const Product=mongoose.model("Product",productSchema)