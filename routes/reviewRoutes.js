const express = require('express');
const router = express.Router();
const reviewController = require('../controller/reviewContoller.js');

router.post('/', reviewController.addReview)
router.get("/", reviewController.allReviews)
router.get("/:user_id?", reviewController.getReview)


 module.exports = router;