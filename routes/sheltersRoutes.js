const express = require('express');
const router = express.Router();
//get the functions from controller 
const sheltersController = require('../controller/sheltersController.js');

router.get('/',sheltersController.allShelters)
router.post('/add',sheltersController.postShelters)
router.get('/search/:search',sheltersController.getSearchShelters)
router.get('/category/:category', sheltersController.getCategoryShelters)
router.get('/:id',sheltersController.oneShelter)



module.exports = router;