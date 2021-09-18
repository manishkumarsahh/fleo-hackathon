const express = require('express');

const router = express.Router();
const factoryController = require('../controllers/factory_controller');




router.post('/create',factoryController.create);

router.get('/getfactory',factoryController.getfactory);




module.exports = router;