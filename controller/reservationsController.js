const { request } = require('express');
const {pool} = require('../db.js');
const reservations = require('../models/reservationsModels.js');

const addReservation = async(request, response) => {
    const {username, message,gender,quantity_of_people, firstname, lastname, email, user_id} = request.body;
    const postReservation = await reservations.postReservationsToDB(username, message,gender,quantity_of_people, firstname, lastname, email, user_id)
    const reservationsInfo = postReservation.rows[0]
    response.send(reservationsInfo)
}

const getReservations = async(request, response) => {
    reservationsInfo = await reservations.getAllReservationsFromDB();
    const data = reservationsInfo.rows
    response.send(data)
}



module.exports = {
    addReservation,
    getReservations
}