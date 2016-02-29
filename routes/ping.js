var express = require('express');
var router = express.Router();
var sys = require('sys')
var exec = require('child_process').exec;



router.get('/', function(req, res) {

  //var username = req.query['ipaddr'];

  function puts(error, stdout, stderr) { 
  	sys.puts(stdout);
  	
  	//var txt = stdout.replace(/\n/g, "<br>");
  	
  	res.render('pingresult', {toto: stdout.split(/\n/g)});
   }
  


  exec("ping -c 4 "+req.query['ipaddr'],puts);
  
  

  
  
});





module.exports = router;
