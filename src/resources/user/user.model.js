const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        maxLength: 25,

    },

    userPassword: {
        type: String,
        minLength: 8
    },

    userPhone: {
        type: String,
        maxLength: 7,
    }
})

const User = mongoose.model('user', userSchema)
module.exports = User

// comments

//Another way of doing it
//const User = userSchema.models('User', userSchema)

// Shorthand 
//  module.exports = userSchema.models('User', userSchema) 