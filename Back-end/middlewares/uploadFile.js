var multer = require('multer')
var randomstring = require("randomstring");

const storage = multer.diskStorage({
    destination:(req, file, callback)=>{
      callback(null, "./public/images/facilityimages")
    },
    filename:(req, file, callback)=>{
      file.name = randomstring.generate();
      callback(null, file.name)
    }
   
});
const upload= multer({storage:storage});
  



exports.upload = upload;