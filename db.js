const {Pool} = require('pg');
//get the postgres database from the 
const pool = new Pool({
    database: 'HomeFul',
    user:     '',
    password: ''
})


module.exports = {
    pool
}
