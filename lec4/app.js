const express=require('express');
const { connectDB } = require('./config/db');
const { UserModel } = require('./models/user');


const app=express();


// this will parse the incoming request body and make it available in req.body
app.use(express.json()); 


// find all users
app.get("/feed" , async (req , res)=>{
    try{
        const user=await UserModel.find({}) // this will return an array of all the users in the database

        if(user.length===0){
            res.status(404).send("user not found");
        }
        res.send(user);
    }
    catch(err){
        res.status(400).send("error in finding user");
    }
});


//  find user by email
app.get("/user" , async (req , res)=>{
    const email=req.body.email;
    try{
        const user=await UserModel.find({email:email}) // this will return an array of users with the given email
        if(user.length===0){
            res.status(404).send("user not found");
        }
        res.send(user);
    }
    catch(err){
        res.status(400).send("error in finding user");
    }
});


// delete user by email
app.delete("/user" , async(req , res)=>{
    const userId=req.body.userId;
    try{
        const user=await UserModel.findByIdAndDelete(userId); // this will delete the user with the given userId
        res.send("user deleted successfully");
    }
    catch(err){
        res.status(400).send("error in deleting user");
    }
});


// update user by email
app.patch("/user/:userId" , async(req , res)=>{
    const userId=req.params?.userId;
    const data=req.body;


    const allowedUpdates=["userId", "gender" , "skills" , "photourl" , "age"]; // these are the fields that the user can update
    const isupdateAllowed=Object.keys(data).every((update)=>{
        return allowedUpdates.includes(update); // this will check if all the fields that the user wants to update are in the allowedUpdates array
    });
    if(!isupdateAllowed){
        return res.status(400).send("invalid updates");  // this will return an error if the user tries to update a field that is not in the allowedUpdates array
    }
    try{

        await UserModel.findByIdAndUpdate(userId , data); // this will update the user with the given userId and data
        returnDocument:"after" // this will return the updated document after the update is done
        runValidators:true // this will run the validators defined in the schema while updating the document
        console.log(data);
        res.send("user updated successfully");
    }
    catch(err){
        res.status(400).send("error in updating user");
    }
});
// signup route
app.post("/signup" , async (req , res)=>{
    const userobj={
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password,
        age:req.body.age,
        gender:req.body.gender,
    }
    console.log(req.body);
    const user=new UserModel(userobj); // we need to make one new instance of the model to save the data in the database
    await user.save() // this will save the data in the database
    res.send("signup successful");
})

// connect to the database and start the server
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

