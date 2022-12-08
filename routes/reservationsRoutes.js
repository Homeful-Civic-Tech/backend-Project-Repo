const express = require('express');
const router = express.Router();
const reservationsController = require('../controller/reservationsController.js');

router.post('/',reservationsController.addReservation)
router.get("/", reservationsController.getReservations)


module.exports = router;