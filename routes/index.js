const express = require('express');

const router = express.Router();
const fs = require('fs');
const path = require('path');

console.log('router loaded');

//connect to tatasteel and factory files
router.use('/tatasteel', require('./tatasteel'));
router.use('/factory', require('./factory'));

 
module.exports = router;