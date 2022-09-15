const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const facilitySchema= new Schema({
     name:{
        type: String,
        required: true
     },
     owner:{
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
        type: String
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
      type: String
     },
     address:{
      type: String,
      required: true
     },
     logo:{
      type: String
     },

})

module.exports = mongoose.model("Facility", facilitySchema)