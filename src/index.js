const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hospital_Bed_Mgt_System')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})