const { Pool } = require('pg')

const pool = new Pool ({
  database: 'HomeFul',  
  user: 'aneika',             
  password: '2311',                  
  host: 'localhost'

})
// const connectionProduction = {
//     connectionString: process.env.DATABASE_URL, 
//     ssl: {rejectUnauthorized: false}
//   }

// const pool = new Pool(process.env.NODE_ENV === 'production' ? connectionProduction : connectionDevelopment)

module.exports = pool