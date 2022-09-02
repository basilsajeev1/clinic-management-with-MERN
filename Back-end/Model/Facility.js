const mongoose = require('mongoose')
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
     facType:{
      type: String,
      required: true
   },
     regNumber:{
        type: String,
        required: true
     },
     email:{
        type: String,
        required: true
     },
     workHours:{
        type: Number,
        required: true
     },
     startPatRegNum:{
        type: Number,
        required: true
     },
     category:{
        type: String,
        required: true
     },
     appType:{
      type: String,
      required: true
     },
     gstNum:{
      type: String,
      required: true
     },
     address:{
      type: String,
      required: true
     },

})

module.exports = mongoose.model("Facility", facilitySchema)