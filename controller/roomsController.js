const { request } = require('express');
const { pool } = require('../db.js');
const rooms = require('../models/roomsModels.js');

const addRoom = async (req, res) => {
    const { name, bio, location, phone_num, url, type_of, quantity, category, userid } = req.body;
    const postRoom = await rooms.postRoomToDB(name, bio, location, phone_num, url, type_of, quantity, category, userid);
    const roomInfo = postRoom.rows[0];
    res.send(roomInfo);
}
const getCategoryRooms = async (req, res) => {
    const category = req.params.category;
    const roomsInfo = await rooms.getCategoryRooms(category);
    res.status(200).json(roomsInfo.rows);
}
const getSearchRooms = async (req, res) => {
    const search = req.params.search;
    const roomsInfo = await rooms.getSearchRooms(search);
    res.status(200).json(roomsInfo.rows);
}
const getRoomById = async (req, res) => {
    const roomsId = req.params.id;
    const roomInfo = await rooms.getRoomById(roomsId);
    const data = roomInfo.rows;
    res.send(data);
}
const getRooms = async (req, res) => {
    const roomsInfo = await rooms.getAllRoomsFromDB();
    const data = roomsInfo.rows;
    res.send(data);
}

module.exports = {
    addRoom,
    getRooms,
    getSearchRooms,
    getCategoryRooms,
    getRoomById
}

