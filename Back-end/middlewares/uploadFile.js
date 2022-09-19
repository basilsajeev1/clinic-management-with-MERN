var multer = require('multer')
var randomstring = require("randomstring");

const storage = multer.diskStorage({
    destination:(req, file, callback)=>{
      if(file){
        callback(null, "./public/images/facilityimages")
      }
      
    },
    filename:(req, file, callback)=>{
      if(file){

        file.name = req.user+ Date.now() +".jpg";      
        callback(null, file.name)
      }
      
    }
   
});
const upload= multer({storage:storage});
  



exports.upload = upload;