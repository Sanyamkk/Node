const express=require('express')

const app=express();


app.use("/home" , (req , res , next)=>{
    console.log("i am from first one ");
    next();
},(req , res , next)=>{
    console.log("i am from 2nd one ");
    next();
    console.log("i am also from 2nd one but after 3rd one ");
    res.send("welcome to home ");
},(req , res , next)=>{
    console.log("i am from 3rd one ");
}
)
app.listen(3001 , ()=>{
    console.log("server running in port 3001");
});
