var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/DownTube.com', (req, res) => {
  res.render('index.ejs');
  // res.render(__dirname + '/views/error', { error: err });
});



module.exports = router;
