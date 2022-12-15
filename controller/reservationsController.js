const { request } = require('express');
const {pool} = require('../db.js');
const reservations = require('../models/reservationsModels.js');

const addReservation = async(request, response) => {
    const {firstname, lastname, gender, email,message, user_id} = request.body;
    const postReservation = await reservations.postReservationsToDB(firstname, lastname, gender, email,message, user_id)
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