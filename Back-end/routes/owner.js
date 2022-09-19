var express = require('express');
var router = express.Router();
const ownerControllers = require('../controllers/owner-controllers')
const authentication = require('../middlewares/authentication')
const uploadFile = require('../middlewares/uploadFile')

/* GET users listing. */
router.get('/', authentication.tokenCheck, ownerControllers.getFacilities);
router.post('/addClinic',  authentication.tokenCheck,uploadFile.upload.single("logo"), ownerControllers.addFacilities);
router.get('/getClinic/:id',authentication.tokenCheck, ownerControllers.getFacilityDetail);
router.put('/updateClinic/:id', authentication.tokenCheck,uploadFile.upload.single("logo"), ownerControllers.updateFacilityDetail);
router.delete('/deleteClinic/:id', ownerControllers.deleteFacility);

module.exports = router;
