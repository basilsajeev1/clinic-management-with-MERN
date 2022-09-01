const mongoose =require('mongoose')
const Schema = mongoose.Schema;
const facilitySchema= new Schema({
     name:{
        type: String,
        required: true
     },
     location:{
        type: String,
        required: true
     },
     pincode:{
        type: Number,
        required: true
     },
     regNumber:{
        type: String,
        required: true
     },
     email:{
        type: String,
        required: true
     }
})

module.exports = mongoose.model("Facility", facilitySchema)