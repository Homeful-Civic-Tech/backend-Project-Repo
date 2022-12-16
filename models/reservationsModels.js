const { pool } = require('../db.js')

class Reservations{
    static postReservationsToDB(firstname, lastname, gender, email,message,shelter_id, user_id){
        return pool.query('INSERT INTO reservations(firstname, lastname, gender, email, message, shelter_id, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [firstname, lastname, gender, email, message, shelter_id, user_id]);
    }
    static getAllReservationsFromDB(user){
        return pool.query(
            'SELECT * FROM reservations INNER JOIN shelters ON reservations.shelter_id = shelters.id where user_id = $1;', [user]);
        }
}


module.exports = Reservations;