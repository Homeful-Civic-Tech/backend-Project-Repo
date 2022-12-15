const express = require('express');
const router = express.Router();
const roomsController = require('../controller/roomsController.js');

router.post('/', roomsController.addRoom);
router.get("/", roomsController.getRooms);
router.get('/search/:search', roomsController.getSearchRooms);
router.get('/category/:category', roomsController.getCategoryRooms);
router.get('/:id', roomsController.getRoomById);
module.exports = router;