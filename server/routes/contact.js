var express = require('express')
var router = express.Router()

router.post('/', function (req, res) {

  var order = '<br /> Order = ';

  if(req.body.heartCard){
    order += 'Heart Card: ' + req.body.heartCard + '<br />';
  }
  if(req.body.birthdayCard){
    order += 'Birthday Card: ' + req.body.birthdayCard + '<br />';
  }
  if(req.body.cactusCard){
    order += 'Cactus Card: ' + req.body.cactusCard + '<br />';
  }
  if(req.body.cupcakeCard){
    order += 'CupCake Card: ' + req.body.cupcakeCard + '<br />';
  }
  if(req.body.happyBirthdayCard){
    order += 'Happy Birthday Card: ' + req.body.happyBirthdayCard + '<br />';
  }
  if(req.body.thankYouCard){
    order += 'Thank You Card: ' + req.body.thankYouCard + '<br />';
  }

  if(req.body.beePrint){
    order += 'Bee Print: ' + req.body.beePrint + '<br />';
  }
  if(req.body.cactusPrint){
    order += 'Cactus Print: ' + req.body.cactusPrint + '<br />';
  }
  if(req.body.crayfishPrint){
    order += 'Crayfish Print: ' + req.body.crayfishPrint + '<br />';
  }
  if(req.body.heartPrint){
    order += 'Heart Print: ' + req.body.heartPrint + '<br />';
  }
  if(req.body.friendsPrint){
    order += 'Friends Are Like Stars Print: ' + req.body.friendsPrint + '<br />';
  }
  if(req.body.mountainPrint){
    order += 'Move Moutains Print: ' + req.body.mountainPrint + '<br />';
  }


  var apiKey = process.env.MAILGUN_API_KEY
  var domain = process.env.MAILGUN_DOMAIN
  var recipientAddress = process.env.RECIPIENT_ADDRESS
  var mailgun = req.app.get('mailgunjs')({apiKey: apiKey, domain: domain})
  var data = {
    from: 'Luna-Designs <postmaster@sandbox7f5f15687caf4f21a50534a71070faa5.mailgun.org>',
    to: recipientAddress,
    subject: req.body.name + ' has ordered some items from Luna Designs',
    html: 'Name: ' + req.body.name + '<br /> Email: ' + req.body.email + '<br /> Comments: ' + req.body.comments + order

  }
  mailgun.messages().send(data, function (error, body) {
    if (!error) {
      res.status(200).json('Thank you for your request. We will aim to respond within 24 hours.')
    } else {
      console.log(error)
      res.status(500).json("We're sorry, something appears to have gone wrong. Please try again. If you keep seeing this error, please email lunadesignsnz@gmail.com")
    }
  })
})

module.exports = router
