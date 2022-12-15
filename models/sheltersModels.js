const { pool } = require('../db.js');

async function getShelters(){
    return pool.query('SELECT * FROM shelters')  
}
async function getSearchShelters(search){
    return pool.query("SELECT * FROM shelters WHERE shelter_name LIKE'%" + search +"%'")
    
}
async function getCategoryShelters(category){
    return pool.query('SELECT * FROM shelters WHERE category = $1' ,[category])
    
}
async function addShelters(shelter_name,location){
        return pool.query(
            'INSERT INTO addshelters(shelter_name,location) VALUES($1, $2) RETURNING *',[shelter_name,location]);
    
        }
    

async function shelterId (id){
    return pool.query('SELECT * FROM shelters WHERE id = $1',[id]).then(results => {return results.rows}) 
}

module.exports = {
   getShelters,
   getSearchShelters,
   addShelters,
   getCategoryShelters,
   shelterId

};