const express=require('express')

const app=express();


app.get("/home" , (req , res)=>{
    res.send("hey i am from home ");
});

app.post("/user1" , (req , res)=>{
    res.send("successfully added to db");
});

app.use("/" , (req , res)=>{
    res.send("i am from default one ");
})


app.listen(3001 , ()=>{
    console.log("server is running in port 3001");
});

