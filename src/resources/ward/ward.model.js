const mongoose = require('mongoose')

const wardSchema = mongoose.Schema({
    wardName: {
        type: String,
        maxLength: 25
    }

    //To add building ID(FOREIGN-KEY)
})

const WARD = mongoose.model("ward", wardSchema)
module.exports = WARD