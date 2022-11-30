const {pool} = require('../db.js');

class User{
    static postUserToDB(firstname,lastname,username,email,sex,password){
        return pool.query(
            'INSERT INTO users(firstname,lastname,username,email,sex,password) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',[firstname,lastname,username,email,sex,password]);
    
        }
    static checkUser(username){
        return pool.query('SELECT * FROM users WHERE username = $1',[username])
    }
}

module.exports = User;
