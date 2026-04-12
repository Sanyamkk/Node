const express=require('express');
const { connectDB } = require('./config/db');
const { UserModel } = require('./models/user');

const app=express();

app.post("/signup" , async (req , res)=>{
    const userobj={
        firstName:"Sanyam",
        lastName:"Kothari",
        email:"kotharisanyam6@gamil.com",
        password:"sanyam@123",
        age:21, 
        gender:"male",  
    }
    const user=new UserModel(userobj); // we need to make one new instance of the model to save the data in the database
    await user.save() // this will save the data in the database
    res.send("signup successful");
})
connectDB()
.then(()=>{

    console.log("connected to db");
    app.listen( 3001 , ()=>{
    console.log("server is running on port 3001");
});
})
.catch((err)=>{
    console.log(err);
});

