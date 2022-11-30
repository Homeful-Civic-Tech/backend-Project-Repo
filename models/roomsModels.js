const {pool} = require('../db.js');

class Rooms{
    static postRoomToDB(name,bio,location,url,typeofs,quantity,userid){
        return pool.query(
            'INSERT INTO rooms(name,bio,location,url,typeofs,quantity,userid) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *',[name,bio,location,url,typeofs,quantity,userid]);
    
        }
    
}

module.exports = Rooms;
