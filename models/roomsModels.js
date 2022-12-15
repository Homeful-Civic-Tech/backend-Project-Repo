const { pool } = require('../db.js');


class Rooms {
    static postRoomToDB(name, bio, location, phone_num, url, typeofs, quantity, category, userid) {
        return pool.query(
            'INSERT INTO rooms(name,bio,location,phone_num,url,type_of,quantity,category,userid) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', [name, bio, location, phone_num, url, typeofs, quantity, category, userid]);

    }
    static getSearchRooms(search) {
        return pool.query("SELECT * FROM rooms WHERE name LIKE'%" + search + "%' ORDER by created_at DESC;")

    }
    static getCategoryRooms(categorys) {
        return pool.query('SELECT * FROM rooms WHERE category = $1 ORDER by created_at DESC;', [categorys])

    }
    static getRoomById(id) {
        return pool.query('SELECT * FROM rooms WHERE id = $1', [id])
    }

    static getAllRoomsFromDB() {
        return pool.query(
            'SELECT * FROM rooms ORDER by created_at DESC;');

    }
}



module.exports = Rooms;
