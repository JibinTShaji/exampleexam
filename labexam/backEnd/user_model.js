import mongoose, { Schema } from "mongoose";

//create schema for user

const user_schema=new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    password:{type:String},
})

//create user model by passing scema and desired collection name

export const user_model=mongoose.model("users",user_schema)