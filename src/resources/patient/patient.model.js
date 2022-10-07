const mongoose = require('mongoose')

const patientSchema = mongoose.Schema({
    patientName:{
        type: String,
        maxLength: 25
    },

    patientPhone:{
        type: String,
        maxLength: 7 
    },

    patientDOB:{
    type: new Date([1995, 11, 19]) //parameter: year, month, and day(int_value_format) 
    },

    patientDiagnosis:{
        type: String,
        maxLength: 50
    }

    //To add user ID(FOREIGN-KEY)
})

const PATIENT = mongoose.model('patient', patientSchema)
module.exports = PATIENT