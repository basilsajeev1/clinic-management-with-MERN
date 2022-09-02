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
            facType: req.body.facType,
            regNumber: req.body.regNumber,
            email: req.body.email,
            workHours: req.body.workHours,
            startPatRegNum: req.body.startPatRegNum,
            category: req.body.category,
            appType: req.body.appType,
            gstNum: req.body.gstNum,
            address: req.body.address,

        })
        await facility.save().then((result)=>{
            if(result){
            console.log(result)
            return res.status(201).json({message:"Facility added successfully"})
            }
        }).catch((err)=>{
            
                console.log(err)
                return res.status(500).json({message:"Unable to add facility"})
           
        })
            
       
    }catch{(err)=>{
        console.log(err)
    }}
    
}

const getFacilityDetail= async(req,res, next)=>{
    let facId= req.params.id
    try{
        facility= await Facility.findById(facId)
        console.log(facility)
        return res.json({facility})
    }catch(err){
        console.log(err)
    }
}

const updateFacilityDetail= async(req,res, next)=>{
    let facId= req.params.id
    try{
     Facility.findByIdAndUpdate(facId,{
            name: req.body.name,
            location: req.body.location,
            pincode: req.body.pincode,
            facType: req.body.facType,
            regNumber: req.body.regNumber,
            email: req.body.email,
            workHours: req.body.workHours,
            startPatRegNum: req.body.startPatRegNum,
            category: req.body.category,
            appType: req.body.appType,
            gstNum: req.body.gstNum,
            address: req.body.address,
        }).then((result)=>{
        if(result){
            return res.json({message:"Facility updated successfully"})
        }
        }).catch((err)=>{
            if(err){
            return res.status(500).json({message:"Unable to update facility"})
            }
        })
    }catch(err){
        console.log(err)
    }
}

const deleteFacility= (req,res, next)=>{
    let facId=req.params.id
    try{
        Facility.findByIdAndDelete(facId).then(()=>{
            return res.json({message:"Facility Deleted successfully"})
        }).catch((err)=>{
            if(err){
                return res.json({message:"Unable to delete Facility"})
            }
        })
    }catch(err){
        console.log(err)
    }

}

  exports.getFacilities= getFacilities;
  exports.addFacilities= addFacilities;
  exports.getFacilityDetail= getFacilityDetail;
  exports.updateFacilityDetail= updateFacilityDetail;
  exports.deleteFacility= deleteFacility;