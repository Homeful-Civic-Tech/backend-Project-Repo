const {pool} = require('../db.js');

async function getShelters(){
    return pool.query('SELECT * FROM shelters')
    
}


module.exports = {
   getShelters
};