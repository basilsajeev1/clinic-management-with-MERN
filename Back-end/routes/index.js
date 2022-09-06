var express = require('express');
var router = express.Router();
const Owner = require('../Model/Owner')
const bcrypt = require('bcrypt')



router.post('/register', async function(req, res, next) {
  
  let owner;
  let encPassword = await bcrypt.hash(req.body.password,10)
  try{
    
    owner= new Owner({
        name: req.body.name,
        mobile: req.body.mobile,
        email: req.body.email,
        password: encPassword ,
        address: req.body. address,

    })
    await owner.save().then((result)=>{
      if(result){
        
        req.session.user= result
      return res.status(201).json({message:"Owner added successfully"})
      }
    }).catch((err)=>{
      if(err){
      console.log(err)
      return res.status(500).json({message:"Unable to add owner"})
      }
    })
  }catch{(err)=>{
    console.log(err)
    }}

});

router.post('/login',   async function(req, res, next) {
  //res.send("logged in");
   await Owner.find({email:req.body.email}).then((ownerData)=>{
    if(ownerData[0])
    {
      //console.log(ownerData[0])
      bcrypt.compare(req.body.password,ownerData[0].password).then((status)=>{
        if(status){
            req.session.user= ownerData[0]
            // console.log(req.session.user)
            console.log("credentials are correct")
            return res.json({message:"credentials are correct"})
        }else{
            console.log("Credentials do not match")
            return res.json({message:"credentials do not match"})            
        }
      })
    }else{
      console.log("user not found")
      return res.json({message:"owner not found"})      
  }
  })
});

module.exports = router;
