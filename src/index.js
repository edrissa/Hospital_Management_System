require('dotenv').config()
const mongoose = require('mongoose')

const express = require('express')
const app = express()
const port = process.env.port

const middleware = require('./utilities/middleware')

app.use(express.json())
app.use(middleware.requestLogger)

const URI = process.env.MONGODB_URI
const connect = () => {
  return mongoose.connect(
    URI, 
    {
      useNewUrlParser: true,

      useUnifiedTopology: true,
      autoIndex: false
    }
  )
}

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

//Get One
app.get('/api/users/:id', (req, res) => {
  const id = req.params.id
  const user = users.find((user) => user.id === Number(id))

  if(user) {
    res.json(user)
  }
  
  else{
    res.status(404).end()
    //res.send("sorry user not found")
  }
})

//Delete One
app.delete('/api/users/:id', (req, res) => {
  const id = req.params.id
  users = users.filter((user) => user.id !== Number(id))

  res.status(204).end()
})

//Get All
app.get('/api/users', (req, res) => {
  res.json(users)
})

// Create one
app.post('/api/users', (req, res) => {
  const content = req.body

  //here we save the content to the database
  res.json(content)
})

// Put
app.put('api/users/:id', (req, res) =>{
  const id = req.params.id

  res.id
})

app.use(middleware.unknownEndpoint)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})