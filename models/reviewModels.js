const {pool} = require('../db.js');

class Users{
    static postReviewToDB(user_id, comments, rating, shelter_id){
        return pool.query(
            'INSERT INTO review(user_id,comments,rating,shelter_id) VALUES($1, $2, $3, $4) RETURNING *',[user_id, comments, rating, shelter_id]);
    
        }
    static getReviews(){
            return pool.query('SELECT * FROM review')
            
        }

    static checkAllReviewsFromUser(user_id){
        //passing in the query number into pararmater
        return pool.query('SELECT * FROM review WHERE user_id = $1',[user_id])
    }
    // static checkAllReviewsForShelter(shelter_id){
    //     //passing in the query number into pararmater
    //     return pool.query('SELECT * FROM review WHERE shelter_id',[user_id])
    // }
    

}

module.exports = Users;