var express = require('express')
var router = express.Router()

router.post('/', function (req, res) {
  var apiKey = process.env.MAILGUN_API_KEY
  var domain = process.env.MAILGUN_DOMAIN
  var recipientAddress = process.env.RECIPIENT_ADDRESS
  var mailgun = req.app.get('mailgunjs')({apiKey: apiKey, domain: domain})
  var data = {
    from: 'Luna-Designs <postmaster@sandbox7f5f15687caf4f21a50534a71070faa5.mailgun.org>',
    to: recipientAddress,
    subject: req.body.name + ' has ordered some items from Luna Designs',
    text: 'Name: ' + req.body.name + ' Email: ' + req.body.email + ' Comments: ' + req.body.comments
  }
  mailgun.messages().send(data, function (error, body) {
    if (!error) {
      res.status(200).json('Thank you for your order. We will aim to respond within 24 hours.')
    } else {
      console.log(error)
      res.status(500).json("We're sorry, something appears to have gone wrong. Please try again. If you keep seeing this error, please email lunadesignsnz@gmail.com")
    }
  })
})

module.exports = router
