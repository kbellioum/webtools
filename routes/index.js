var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', {title: 'Web Tools'});
});

router.get('/ping', function(req, res) {
  res.render('ping', { title: 'my ping tool'});
});


router.get('/whois', function(req, res) {

  res.render('whois', { title: 'my whois tool'});
});







module.exports = router;
