const pool = require('../db.js');



// const fillCart = async (productId,userId) => {
//     await pool.query('INSERT INTO carts (product_id, customer_id) VALUES ($1, $2)', [productId,userId])
//     //return await pool.query('SELECT * FROM carts JOIN products ON carts.product_id = products.id WHERE carts.customer_id = $1',[userId]).then(results => results.rows)

// };

async function getShelters(){
    return await pool.query('SELECT * FROM shelters').then(results => {return results.rows})
}


module.exports = {
   getShelters
};