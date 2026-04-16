const validator=require('validator');

const loginValidation=(req)=>{
    const {email , password} = req.body;
    if(!email || !password){
        throw new Error("email and password are required");
    }
    else if(!validator.isEmail(email)){
        throw new Error("not a valid email");
    }
};

module.exports={loginValidation};