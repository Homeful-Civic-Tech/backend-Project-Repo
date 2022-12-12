const {pool} = require('../db.js');

class User{
    static postUserToDB(firstname,lastname,username,email,sex,password){
        console.log('water')
        return pool.query(
            'INSERT INTO users(firstname,lastname,username,email,sex,password) VALUES($1, $2, $3, $4, $5, $6)',[firstname,lastname,username,email,sex,password]).then(() => this.checkUser(username))
        }

    static checkUser(username){
        return pool.query('SELECT * FROM users WHERE username = $1',[username])
    }
}

module.exports = User;
