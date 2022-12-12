const {pool} = require('../db.js');

async function getShelters(){
    return pool.query('SELECT * FROM shelters')  
}

async function shelterId (id){
    return pool.query('SELECT * FROM shelters WHERE id = $1',[id]).then(results => {return results.rows}) 
}
async function getUserShelter(user){
    //getting all the shelter ids for shelters that a user has made reservations for 
    console.log(user)
    return pool.query(`SELECT * FROM shelters INNER JOIN reservations ON shelters.id = reservations.shelter_id WHERE reservations.user_id = $1`, [user])
}


module.exports = {
   getShelters,
   shelterId,
   getUserShelter
};