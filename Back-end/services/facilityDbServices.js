const Facility = require('../Model/Facility')

module.exports = {
    findFacilitiesFromDb: async(user, res) => {

        let facilities = await Facility.find({ "owner": user })
        if (facilities) {
            return res.status(200).json({ facilities })
        } else {
            return res.status(404).json({ message: "Facilities not found" })
        }


    },
    saveFacilitiesToDb: async(facility, res) => {

        await facility.save().then((result) => {
            if (result) {
                //console.log(result)
                return res.status(201).json({ message: "Facility added successfully" })
            }
        }).catch((err) => {

            console.log(err)
            return res.status(500).json({ message: "Unable to add facility" })

        })



    },
    updateFacilityInDb: async(facId, facility, res) => {

        await Facility.findByIdAndUpdate(facId, facility).then((result) => {
            if (result) {
                return res.json({ message: "Facility updated successfully" })
            }
        }).catch((err) => {
            if (err) {
                return res.status(500).json({ message: "Unable to update facility" })
            }
        })


    },
    deleteFacilityFromDb: async(facId, res) => {

        await Facility.findByIdAndDelete(facId).then(() => {
            return res.json({ message: "Facility Deleted successfully" })
        }).catch((err) => {
            if (err) {
                return res.json({ message: "Unable to delete Facility" })
            }
        })

    },
    findFacilityFromDb: async (facId, res) => {

        let facility = await Facility.findById(facId)
        return res.json({ facility })

    }
}