const { request } = require('express');
const {pool} = require('../db.js');
const users = require('../models/reviewModels.js')


const addReview = async (request, response) => {
    const {user_id, comments, rating, shelter_id} = request.body;
    const postReview = await users.postReviewToDB(user_id, comments, rating, shelter_id)
    const reviewInfo = postReview.rows[0]
    response.send(reviewInfo)
}
//get all reviews
const allReviews = async(req,res) => {
    const reviews = await users.getReviews()
    res.status(200).json(reviews.rows)
}

//get review on id 
const getReview = async (request,response) => {
    //parse int because front end is sending as string
    reviewInfo = await users.checkAllReviewsFromUser(parseInt(request.params["user_id"]))
    const data = reviewInfo.rows
    response.send(data)
}

module.exports ={
    addReview,
    getReview, 
    allReviews
}