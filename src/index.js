require('dotenv').config()
const mongoose = require('mongoose')

const express = require('express')
const app = express()
//const userRouter = require('./resources/user/user.controller')
const port = process.env.port
const connect = require('./utilities/connect')

const middleware = require('./utilities/middleware')

app.use(express.json())
app.use(middleware.requestLogger)

try {
  //mongoose.connect(URI)
  connect()
  console.log("connected to MongoDB");
} catch (error) {
  console.log("error connection to MongoDB:", error.message)
}

app.get('/', (req, res) => {
  res.send('Hospital_Bed_Mgt_System')
})

const me = {
  fname: "Edrissa",
  lname: "Saine",
  minit: "Mansour",
  status: "Online",
  location: "Pipeline",
  living: "true",
  id: "0208",
  phone:"3650492",
  picture: "./djhdfhchdhdh.jpg",
  email: "edrissasaine366@gmail.com",
  gender: "male",
  dob: "19/11/199*" 
}

let users = [
  {
    id: 1,
    username: "idris",
    phone: "0001111",
    password: "secrete"
  }, 

  {
    id: 2,
    username: "jankeh",
    phone: "0001111",
    password: "secrete"
  }
]

app.get('/me', (req, res) => {
  res.json(me)
})

//app.use('/api/user/', userRouter)

app.use(middleware.unknownEndpoint)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})