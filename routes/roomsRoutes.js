const express = require('express');
const router = express.Router();
//get the functions from controller 
const roomsController = require('../controller/roomsController.js');

router.post('/',roomsController.addRoom)
router.get("/", roomsController.getRooms)
router.get('/search/:search',roomsController.getSearchRooms)
router.get('/category/:category', roomsController.getCategoryRooms)

module.exports = router;