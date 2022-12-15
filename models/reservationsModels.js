const { pool } = require('../db.js')

class Reservations{
    static postReservationsToDB(firstname, lastname, gender, email,message, user_id){
        return pool.query('INSERT INTO reservations(firstname, lastname, gender, email,message, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [firstname, lastname, gender, email,message, user_id]);
    }
    static getAllReservationsFromDB(user){
        return pool.query(
            'SELECT * FROM  reservations WHERE user_id=$1', [user]);
        }
}


module.exports = Reservations;