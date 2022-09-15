const multer = require('multer')

const storage = multer.diskStorage({
    destination:(req, file, callback)=>{
      callback(null, "./public/images/facilityimages")
    },
    filename:(req, file, callback)=>{
      callback(null, file.originalname)
    }
   
  });
const upload = multer({storage:storage});


exports.upload = upload;