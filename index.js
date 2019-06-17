const express = require('express')
const server = express()

server.use(express.json())

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Sanity!' })
})

server.listen(process.env.PORT || 5000, () => console.log('Up and running!'))
