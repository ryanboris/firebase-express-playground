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

server.listen(process.env.PORT || 5000, () => console.log('Up and running!'))
