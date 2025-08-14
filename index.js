import express from "express"
const app=express();

app.get('/',(req,res)=>{
  res.status(200).json({
    message:'Hello World',
    change:"Testing CICD second change"
  })
})

app.listen("3000",()=>{
  console.log('Server listenign on port 3000');
})
