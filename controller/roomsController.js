const {pool} = require('../db.js');
const rooms = require('../models/roomsModels.js')


const addRoom = async (request, response) => {
    const {name,bio,location,url,typeofs,quantity,userid} = request.body;
    const postRoom = await rooms.postRoomToDB(name,bio,location,url,typeofs,quantity,userid)
    const roomInfo = postRoom.rows[0]
    response.send(roomInfo)
}

module.exports ={
    addRoom
}

