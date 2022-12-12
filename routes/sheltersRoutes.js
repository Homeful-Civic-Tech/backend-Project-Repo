const express = require('express');
const router = express.Router();
//get the functions from controller 
const sheltersController = require('../controller/sheltersController.js');

router.get('/',sheltersController.allShelters)



module.exports = router;