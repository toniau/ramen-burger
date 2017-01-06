// require express
var express = require('express');
var path = require('path');

// create router object
var router = express.Router();

// export router
module.exports = router;

// route for homepage
router.get('/', function(req, res) {
  res.render('pages/home');
});

// route for about page
router.get('/about', function(req, res) {
  res.render('pages/about');
});

// route for order page
router.get('/order', function(req, res) {
  res.render('pages/order');
});

router.post('/order', function(req, res) {
  res.send('Thanks for ordering, ' + req.body.first + '!'); 
});
