const express=require('express');
const { connectDB } = require('./config/db');

const app=express();

connectDB().then(()=>{

    console.log("connected to db");
    app.listen( 3001 , ()=>{
    console.log("server is running on port 3001");
});
}).catch((err)=>{
    console.log(err);
});

