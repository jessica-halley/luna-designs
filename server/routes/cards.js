
var express = require('express')
var router = express.Router()


var cardsDb = require('../db/data')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  cardsDb.getCards(db)
    .then(cards => {
      res.json(cards)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})



module.exports = router
