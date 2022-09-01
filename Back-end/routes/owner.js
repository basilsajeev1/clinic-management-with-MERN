var express = require('express');
var router = express.Router();
const ownerControllers = require('../controllers/owner-controllers')


/* GET users listing. */
router.get('/', ownerControllers.getFacilities);
router.post('/', ownerControllers.addFacilities);

module.exports = router;
