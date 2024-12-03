var express = require('express');
var router = express.Router();

// GET home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET Add Contact page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Add Contact' });
});

// GET About page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us' });
});

module.exports = router;
