var express = require('express');
var router = express.Router();
var util = require('util');
var exec = require('child_process').exec;



router.get('/', function(req, res) {


  function puts(error, stdout, stderr) {
  	util.puts(stdout);


  	res.render('pingresult', {toto: stdout.split(/\n/g)});
   }



  exec("ping -c 4 "+req.query['ipaddr'],puts);





});





module.exports = router;
