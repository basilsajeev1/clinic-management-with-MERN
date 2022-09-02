var express = require('express');
var router = express.Router();
const ownerControllers = require('../controllers/owner-controllers')


/* GET users listing. */
router.get('/', ownerControllers.getFacilities);

router.post('/addClinic', ownerControllers.addFacilities);

router.get('/getClinic/:id', ownerControllers.getFacilityDetail);
router.put('/updateClinic/:id', ownerControllers.updateFacilityDetail);
router.delete('/deleteClinic/:id', ownerControllers.deleteFacility);

module.exports = router;
