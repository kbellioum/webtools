var express = require('express');
var router = express.Router();
var portscanner = require('portscanner');



router.get('/', function(req, res) {

  portscanner.checkPortStatus(req.query['port'], req.query['ipaddr'], function(error, status) {
    // Status is 'open' if currently in use or 'closed' if available
    //console.log(status)
    res.render('portscanresult', {status: status});
  })



});






module.exports = router;
