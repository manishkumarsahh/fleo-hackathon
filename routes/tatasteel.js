const express = require('express');

const router = express.Router();
const tatasteelController = require('../controllers/tatasteel_controller');

 


//connect to action controller
router.post('/create',tatasteelController.create);

router.get('/getTatasteel',tatasteelController.getTatasteel);


module.exports = router;