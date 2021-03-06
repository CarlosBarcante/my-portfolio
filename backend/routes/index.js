const express = require('express');
const router = express.Router();
require('../db/mongoConnection');
const portfolio = require('./portfolio');

router.use('/portfolio', portfolio);
router.use('/', (req, res) => {
    res.json({
        success: false,
        message: 'Please, do not call /api, it is for our server'
    })
})

module.exports = router;