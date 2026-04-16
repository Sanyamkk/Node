const mangoose=require('mongoose');
const validator=require('validator'); // this is a library that provides validation functions for strings (like email validation, url validation, etc.)

// this is the schema for the user collection in the database (it defines the structure of the user document in the database)
const userSchema=new mangoose.Schema({
    firstName:{
        type:String,
        trim:true,
        minlength:2,   // this will make the firstName field have a minimum length of 3 characters
        maxlength:30,  // this will make the firstName field have a maximum length of 30 characters
        required:true,   // this will make the firstName field required in the database (no user can be created without providing a firstName)
    },
    lastName:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
        required:true, 
        lowercase:true,
        trim:true,
        unique:true,   // this will make the email field unique in the database (no two users can have the same email)
        // we dont want user to change their email after they create their account for that we use api lvl validation
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("not a valid email");
            }
        }
    },  
    password:{
        type:String,
        required:true,   
        minlength:8,   // this will make the password field have a minimum length of 6 characters
        maxlength:50, // this will make the password field have a maximum length of 50 characters
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("not a strong password");
            }   
        }
    },
    age:{
        type:Number,
        validate(value){
            if(value<=0 || value>150){
                throw new Error("not a valid age");
            }  
        } 
    },
    gender:{
        type:String,
        validate(value){
            if(!("male" , "female" , "others").includes(value.toLowerCase()))
            {
                throw new Error("not a valid gender");
            }
        }
    },
    photourl:{
        type:String,
        default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", 
        // this will set the default value of photourl to the given url if no photourl is provided while creating a user
        validate(value){
            if(!validator.isURL(value)){
                throw new Error("not a valid photo url");
            }
        }
    },
    description:{
        type:String,
    },
    skills:{
        type:[String], // this will make the skills field an array of strings (a user can have multiple skills)
        validate(value){
            if(value.length>5){
                throw new Error("a user can have a maximum of 5 skills");
            } 
        }      
    }
},
{
    timestamps:true, 
    // this will store the time when this user is created
},
);


// first name of the model then the schema name
const UserModel=mangoose.model("user",userSchema); 


module.exports = {UserModel};
