const Facility = require('../Model/Facility')
const Owner = require('../Model/Owner')
const jwt = require('jsonwebtoken')
require('dotenv').config();

const tokenCheck = async(req,res,next)=>{
    let owner
    try{
    if(req.headers.authorization){
    const token= req.headers.authorization.split(" ")[1]
    
        const userData= jwt.verify(token,process.env.TOKEN_SECRET)
        //console.log(userData)
        owner= await Owner.find({_id:userData._id})
        //console.log(owner[0]._id)
        if(owner){
            req.user= owner[0]._id
            next();
        }else{
            return res.status(401).json({message:"User not verified"})
            
        }
        
    }else{
        return res.status(401).json({message:"Unauthorised"})
        
    }
}catch(error){
    
    if(error){
        console.log(error);
        return res.status(401).json({message:"User not verified"})
    }
}
    
}

exports.tokenCheck= tokenCheck;