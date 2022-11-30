const express = require('express');
const router = express.Router();
//get the functions from controller 
const userController = require('../controller/controller.js');

router.post('/',userController.addUser)
router.get('/login/:name/:password', userController.authUser)

module.exports = router;

