const mangoose=require('mongoose');

const userSchema=new mangoose.Schema({
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    age:{
        type:Number,
    },
    gender:{
        type:String,
    },
});

const UserModel=mangoose.model("user",userSchema); // first name of the model then the schema name

module.exports = {UserModel};
