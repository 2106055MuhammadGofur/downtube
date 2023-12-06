const express = require('express')
const router = express.Router()

router.get('/DownTube.com', (req, res) => {
    res.render('downmp3.ejs')
})

module.exports = router