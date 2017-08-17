
var express = require('express')
var router = express.Router()


var printsDb = require('../db/data')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  printsDb.getPrints(db)
    .then(prints => {
      res.json(prints)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})



module.exports = router
