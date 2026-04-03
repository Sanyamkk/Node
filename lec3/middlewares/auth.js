const adminAuth=(req , res , next)=>{
    const token="abc";
    const check=(token==="abc");
    console.log("from admonAuth");
    if(!check){
        res.status(404).send("unauthorised admin ");
    }else{
        next();
    }
};

const userAuth=(req , res , next)=>{
    const token="xyz";
    const check=(token==="xyz");

    if(!check){
        res.status(404).send("unauthorised admin ");
    }else{
        next();
    }
};

module.exports={adminAuth , userAuth};