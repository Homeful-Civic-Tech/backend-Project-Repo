const { pool } = require('../db.js')

class Reservations{
    static postReservationsToDB(username, message,gender,quantity_of_people, firstname, lastname, email, user_id){
        return pool.query('INSERT INTO reservations(username, message,gender,quantity_of_people, firstname, lastname, email, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [username, message,gender,quantity_of_people, firstname, lastname, email, user_id]);
    }
    static getAllReservationsFromDB(){
        return pool.query(
            'SELECT * FROM  reservations');
        }
}


module.exports = Reservations;