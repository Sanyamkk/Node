const express=require('express');
const {adminAuth , userAuth}=require('./middlewares/auth');

const app=express();

app.use("/adminlogin" , adminAuth , (req , res)=>{
    res.send("welcome admin");
});

app.use("/userlogin" , userAuth , (req , res)=>{
    res.send("welcome user");
});

app.use("/" , (req , res , next)=>{
    res.send("sorryy...");
})

app.listen(3001 , ()=>{
    console.log("server running at port 3001");
})

