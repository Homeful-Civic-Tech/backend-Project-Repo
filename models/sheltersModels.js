const {pool} = require('../db.js');

async function getShelters(){
    return pool.query('SELECT * FROM shelters')
    
}
async function addShelters(shelter_name,location){
        return pool.query(
            'INSERT INTO addshelters(shelter_name,location) VALUES($1, $2) RETURNING *',[shelter_name,location]);
    
        }
    


module.exports = {
   getShelters,
   addShelters
};