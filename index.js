import express from "express"
const app=express();

app.get('/',(req,res)=>{
  res.send("Hello World from simple backend")
})

app.listen("3000",()=>{
  console.log('Server listenign on port 3000');
})
