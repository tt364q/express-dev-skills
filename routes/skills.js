// Require express
const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');
// initialize a router object

// require controller module 

// define our routes 
// all routes in this module start at /skills
router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
router.delete('/:id', skillsCtrl.delete)
router.post('/', skillsCtrl.create)
router.get('/:id', skillsCtrl.show)

// export the router object
module.exports = router;