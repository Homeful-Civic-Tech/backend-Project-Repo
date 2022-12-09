const { request } = require('express');
const {pool} = require('../db.js');
const rooms = require('../models/roomsModels.js')


const addRoom = async (request, response) => {
    const {name,bio,location,phone_num,url,type_of,quantity,category,userid} = request.body;
    const postRoom = await rooms.postRoomToDB(name,bio,location,phone_num,url,type_of,quantity,category,userid)
    const roomInfo = postRoom.rows[0]
    response.send(roomInfo)
}

const getRooms = async (request,response) => {
    roomsInfo = await rooms.getAllRoomsFromDB()
    const data = roomsInfo.rows
    response.send(data)
}

module.exports ={
    addRoom,
    getRooms
}

