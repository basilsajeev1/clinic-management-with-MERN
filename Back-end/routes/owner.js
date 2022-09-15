var express = require('express');
var router = express.Router();
const ownerControllers = require('../controllers/owner-controllers')
const authentication = require('../middlewares/authentication')


/* GET users listing. */
router.get('/', authentication.tokenCheck, ownerControllers.getFacilities);
router.post('/addClinic',authentication.tokenCheck, ownerControllers.addFacilities);
router.get('/getClinic/:id', ownerControllers.getFacilityDetail);
router.put('/updateClinic/:id', ownerControllers.updateFacilityDetail);
router.delete('/deleteClinic/:id', ownerControllers.deleteFacility);

module.exports = router;
