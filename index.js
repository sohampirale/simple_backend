import express from "express"
const app=express();

app.get('/',(req,res)=>{
  res.status(200).json({
    message:'Hello World',
    change:"Testing CICD 4th change"
  })
})

app.get("sui",(req,res)=>{
  res.send("SUIIII CID wokring!!");
})

app.listen("3000",()=>{
  console.log('Server listenign on port 3000');
})
