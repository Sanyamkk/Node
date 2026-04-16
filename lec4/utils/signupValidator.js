const validator=require('validator'); // this is a library that provides validation functions for strings (like email validation, url validation, etc.)

const validateSignupData=(req)=>{
    const {firstName, lastName, email, password} = req.body;
    if(!firstName || !lastName){
        throw new Error("first name and last name are required");
    }
    else if(firstName.trim().length<2 || lastName.trim().length<2 || firstName.trim().length>30 || lastName.trim().length>30){
        throw new Error("invalid field length for first name or last name");
    }
    else if(!validator.isEmail(email)){
        throw new Error("not a valid email");
    }
    else if(!validator.isStrongPassword(password)){
        throw new Error("not a strong password");
    }
};

module.exports={validateSignupData};