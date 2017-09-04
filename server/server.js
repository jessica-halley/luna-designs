var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cards = require('./routes/cards')
var prints = require('./routes/prints')
var contact = require('./routes/contact')
const cors = require('cors')
var mailgunjs = require('mailgun-js')

const corsOptions = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  credentials: true
}


var server = express()
server.use(cors(corsOptions))
server.set('mailgunjs', mailgunjs)

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/cards', cards)
server.use('/api/prints', prints)
server.use('/contact', contact)

module.exports = server
