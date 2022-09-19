const Facility = require('../Model/Facility')
const Owner = require('../Model/Owner')
const facilityDbServices = require('../services/facilityDbServices')
const uploadFile = require('../middlewares/uploadFile')

module.exports = {

    getFacilities: async (req, res) => {

        try {
            //console.log("user is "+ req.user)
            await facilityDbServices.findFacilitiesFromDb(req.user, res)
        } catch (err) {
            console.log(err)
        }

    },

    addFacilities: async (req, res) => {

        try {
            var logo
            if(req.file){
                logo = req.file.name
            }else{
                logo= "empty"
            }
            // console.log ("body is"+req.body)
            let facility = new Facility({
                name: req.body.name,
                owner: req.user,
                location: req.body.location,
                pincode: req.body.pincode,
                facType: req.body.facType,
                regNumber: req.body.regNumber,
                email: req.body.email,
                workHours: req.body.workHours,
                startPatRegNum: req.body.startPatRegNum,
                category: req.body.category,
                appType: req.body.appType,
                gstNum: req.body.gstNum,
                address: req.body.address,
                logo: logo

            })
            await facilityDbServices.saveFacilitiesToDb(facility, res)
            


        } catch {
            (err) => {
                console.log(err)
            }
        }

    },


    updateFacilityDetail: async (req, res) => {

        try {
            let facId = req.params.id
            //console.log(req.params.id)
            if(req.file){
                logo = req.file.name
            }else{
                logo= "empty"
            }
            let facility={
                name: req.body.name,
                owner: req.body.owner,
                location: req.body.location,
                pincode: req.body.pincode,
                facType: req.body.facType,
                regNumber: req.body.regNumber,
                email: req.body.email,
                workHours: req.body.workHours,
                startPatRegNum: req.body.startPatRegNum,
                category: req.body.category,
                appType: req.body.appType,
                gstNum: req.body.gstNum,
                address: req.body.address,
                logo: logo
            }
            await facilityDbServices.updateFacilityInDb(facId, facility, res)

        } catch (err) {
            console.log(err)
        }
    },

    deleteFacility: async (req, res) => {

        try {
            let facId = req.params.id
            await facilityDbServices.deleteFacilityFromDb(facId, res)
        } catch (err) {
            console.log(err)
        }

    },

    getFacilityDetail: async (req, res) => {

        try {
            let facId = req.params.id;
            //console.log(facId)
            await facilityDbServices.findFacilityFromDb(facId, res)

        } catch (err) {
            console.log(err)
        }
    }

}


