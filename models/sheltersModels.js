const pool = require('../db.js');

async function getShelters(){
    return pool.query('SELECT * FROM shelters')  
}

async function shelterId (id){
    return pool.query('SELECT * FROM shelters WHERE id = $1',[id]).then(results => {return results.rows}) 
}


module.exports = {
   getShelters,
   shelterId
};