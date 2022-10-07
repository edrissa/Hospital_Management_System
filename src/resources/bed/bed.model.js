const mongoose = require('mongoose')

const bedSchema = mongoose.Schema({
    bedType: {
        type: String,
        maxLength: 25
    },

    bedStatus: {
        type: String,
        maxLength: 25
    },

    bedStatusDescript: {
        type: String,
        maxLength: 50
    }

    //To add patient ID & WARD ID(FOREIGN-KEYS)

})

const BED = mongoose.model('bed', bedSchema)
module.exports = BED