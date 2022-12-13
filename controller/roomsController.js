const { request } = require('express');
const {pool} = require('../db.js');
const rooms = require('../models/roomsModels.js')



const addRoom = async (request, response) => {
    const {name,bio,location,phone_num,url,type_of,quantity,category,userid} = request.body;
    const postRoom = await rooms.postRoomToDB(name,bio,location,phone_num,url,type_of,quantity,category,userid)
    const roomInfo = postRoom.rows[0]
    response.send(roomInfo)
}
const getCategoryRooms = async(req, res) => {
    const category = req.params.category;
    const roomsInfo = await rooms.getCategoryRooms(category)
    res.status(200).json(roomsInfo.rows)
}
const getSearchRooms = async(req, res) => {
    const search = req.params.search;
    const  roomsInfo = await rooms.getSearchRooms(search)
    res.status(200).json(roomsInfo.rows)
}

const getRooms = async (request,response) => {
    const roomsInfo = await rooms.getAllRoomsFromDB()
    const data = roomsInfo.rows
    response.send(data)
}

module.exports ={
    addRoom,
    getRooms,
    getSearchRooms,
    getCategoryRooms
}

