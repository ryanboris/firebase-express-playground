const express = require('express')
const server = express()

const db = require('./data/dbConfig')

server.use(express.json())

server.get('/', (req, res) => {
  db('users')
    .then(users => {
      return res.status(200).json(users)
    })
    .catch(err => {
      return res.status(500).json({ error: err.message })
    })
})

const port = process.env.PORT || 5000
server.listen(port, () => console.log(`Up and running on ${port}`))
