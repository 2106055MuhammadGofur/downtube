const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/Downtube.com', (req, res) => {
  res.render('downmp4.ejs')
});

module.exports = router;
