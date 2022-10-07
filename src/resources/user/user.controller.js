// const { response } = require('express')
// const Users = require('./user.model')

// //  Get One
// app.get('/api/users/:id', (req, res) => {
//     const id = req.params.id
//     const user = Users.findByID(id)
//     response.json(user)
//     //const user = users.find((user) => user.id === Number(id))
  
//     if(user) {
//       res.json(user)
//     }
    
//     else{
//       res.status(404).end()
//       //res.send("sorry user not found")
//     }
//   })

// //  Get All
// app.get('/api/users', (req, res) => {
//     res.json(users)
//   })

//Delete One
// app.delete('/api/users/:id', (req, res) => {
//     const id = req.params.id
//     users = users.filter((user) => user.id !== Number(id))
  
//     res.status(204).end()
//   })
  
//   // Create one
//   app.post('/api/users', (req, res) => {
//     const content = req.body
  
//     //here we save the content to the database
//     res.json(content)
//   })
  
//   // Put
//   app.put('api/users/:id', (req, res) =>{
//     const id = req.params.id
  
//     res.id
//   })

  module.exports