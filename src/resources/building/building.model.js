const mongoose = require('mongoose')

const buildingSchema = mongoose.Schema({
    buildingName: {
        type: String,
        maxLength: 25
    }, 

    buildingLocation:{
        type: String,
        maxLength: 25
    }
})

const Building = mongoose.model('building', buildingSchema)
module.exports = Building