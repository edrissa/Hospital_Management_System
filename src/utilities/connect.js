const mongoose = require('mongoose')

const URI = process.env.MONGODB_URI
const connect = () => {
	return mongoose.connect(URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		autoIndex: false,
	})
}

module.exports = connect