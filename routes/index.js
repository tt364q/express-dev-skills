const express = require('express');
const router = express.Router();

// code goes here
router.get('/', function(req, res){
    res.render('index');
})

module.exports = router;