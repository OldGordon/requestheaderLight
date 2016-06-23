var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var ip = req.header['x-forwarded-for'] || req.connection.remoteAddress,
      language = req.acceptsLanguages(),
      software = req.get('User-Agent'),
      pattern = software.match(/(\([^)]*\)).*?/);
      software = pattern[0].slice(1, -1);
      language = language[0],
      header = {
                  "ipaddress": ip ,
                  "language": language,
                  "software": software
              };
  res.render('index', { title: 'FCC Request Header ',
                        header: header});

});

module.exports = router;
