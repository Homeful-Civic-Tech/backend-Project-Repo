const { request } = require('express');
const {pool} = require('../db.js');
const reservations = require('../models/reservationsModels.js');
const { shelterId } = require('../models/sheltersModels.js');

const addReservation = async(request, response) => {
    const {username, message,gender,quantity_of_people, firstname, lastname, email, user_id,shelter_id} = request.body;
    const postReservation = await reservations.postReservationsToDB(username, message,gender,quantity_of_people, firstname, lastname, email, user_id, shelter_id)
    const reservationsInfo = postReservation.rows[0]
    response.send(reservationsInfo)
}

const getReservationsOfUser = async(request, response) => {
    const user = request.params.id;
    reservationsInfo = await reservations.getAllReservationsFromDB(user);
    const data = reservationsInfo.rows
    response.send(data)
}



module.exports = {
    addReservation,
    getReservationsOfUser
}