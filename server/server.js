var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var listCards = require('./routes/cards')
const cors = require('cors')

const corsOptions = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  credentials: true
}


var server = express()
server.use(bodyParser.json())
server.use(cors(corsOptions))
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/cards', listCards)

module.exports = server
