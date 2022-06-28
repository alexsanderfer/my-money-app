const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryInt = require('express-query-int')


server.use(bodyParser.urlencoded({extends: true}))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryInt())

server.listen(port, function () {
    console.log(`Backend is running on port ${port}.`)
})

module.exports = server