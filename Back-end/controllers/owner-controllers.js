const Facility = require('../Model/Facility')


const getFacilities = async(req, res, next)=> {
    //res.send('respond with a new resource');
    let facilities;
    try{
        facilities= await Facility.find()
    }catch(err){
        console.log(err)
    }
    if(!facilities){
        return res.status(404).json({message:"Facilities not found"})
    }
    return res.status(200).json({facilities})
  }

  const addFacilities = async(req,res,next)=>{
    let facility;
    try{
        facility= new Facility({
            name: req.body.name,
            location: req.body.location,
            pincode: req.body.pincode,
            regNumber: req.body.regNumber,
            email: req.body. email,

        })
        await facility.save()
    }catch{(err)=>{
        console.log(err)
    }}
    if(!facility){
        return res.status(500).json({message:"Unable to add"})
    }
    return res.status(201).json({message:"Added successfully"})
  }

  exports.getFacilities= getFacilities;
  exports.addFacilities= addFacilities;