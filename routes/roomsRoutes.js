const express = require('express');
const router = express.Router();
//get the functions from controller 
const roomsController = require('../controller/roomsController.js');

router.post('/',roomsController.addRoom)


module.exports = router;