var express = require('express');
var router = express.Router();
var portscanner = require('portscanner');



router.get('/', function(req, res) {

  if(req.query['port'].length==0 || req.query['ipaddr'].length==0){

     res.render('portscanresult', {status: ""});

  }
  else {
    portscanner.checkPortStatus(req.query['port'], req.query['ipaddr'], function(error, status) {
      // Status is 'open' if currently in use or 'closed' if available
      res.render('portscanresult', {status: status});
    })
  }




});






module.exports = router;
