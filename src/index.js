const jwt=require("jsonwebtoken");
const bycript=require("bycript");
const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.json();
})

app.post("/signup",(req,res)=>{
    const {username,password}=req.body;
    if(!username && !password){
        res.status(400).json("Login or password are not strings");
    }else{
        res.status(200).json("Data is valid");
    }
});

app.post("/login",(req,res)=>{
    const {username,password}=req.body;
    if(!username && !password){
        res.status(400).json("Login or password are not strings");
    }else{
        res.status(200).json("Data is valid");
    }
    res.status(403).json("Authentication faild");
})

module.exports=app();