var express = require('express');
var router = express.Router();
var portscanner = require('portscanner');

router.get('/', function(req, res) {
  res.render('index', {title: 'Web Tools'});
});

router.get('/ping', function(req, res) {
  res.render('ping', { title: 'my ping tool'});
});


router.get('/whois', function(req, res) {

  res.render('whois', { title: 'my whois tool'});
});


router.get('/portscan', function(req, res) {

  res.render('portscan', { title: 'my whois tool'});
});







module.exports = router;
