const express = require('express');
const router = express.Router();
//get the functions from controller 
const sheltersController = require('../controller/sheltersController.js');

router.get('/',sheltersController.allShelters)
<<<<<<< HEAD
router.get('/:id',sheltersController.oneShelter)
router.get('/user/:user_id', sheltersController.UserShelter)
=======
>>>>>>> 56a91e7855f001ab2c1114edd14ee5b7fe90a28b

router.post('/add',sheltersController.postShelters)
router.get('/search/:search',sheltersController.getSearchShelters)
router.get('/category/:category', sheltersController.getCategoryShelters)
router.get('/:id',sheltersController.oneShelter)



module.exports = router;